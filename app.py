from flask import Flask, request, jsonify
from flask_cors import CORS
import jwt
import datetime
from functools import wraps

# Import the utility module here
from story_recommender import recommend_similar_stories
from database import create_table, add_user, get_user
from chat import get_chat_history, send_message

app = Flask(__name__)
app.config["SECRET_KEY"] = "your_secret_key"

# Enable CORS for localhost:3000
CORS(app, resources={r"/*": {"origins": "*"}})

create_table()


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get("Authorization")

        if not token:

            return jsonify({"message": "Token is missing!"}), 401

        try:
            data = jwt.decode(token, app.config["SECRET_KEY"])
        except:
            return jsonify({"message": "Token is invalid!"}), 401

        return f(*args, **kwargs)

    return decorated


@app.route("/signup", methods=["POST"])
def signup():
    data = request.get_json()

    name = data.get("username")
    email = data.get("email")
    password = data.get("password")

    if not name or not email or not password:
        return jsonify({"message": "Name, email, and password are required"}), 400

    if get_user(email):
        return jsonify({"message": "User already exists!"}), 400

    add_user(name, email, password)

    return jsonify({"message": "User created successfully!"})


@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"message": "Email and password are required"}), 400

    user = get_user(email)

    if not user or user[3] != password:
        return jsonify({"message": "Invalid email or password"}), 401

    token = jwt.encode(
        {
            "name": user[1],
            "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=30),
        },
        app.config["SECRET_KEY"],
    )
    return jsonify({"token": token})

@app.route("/logout")
@token_required
def logout():
    # Since JWT is stateless, there's no need for logout logic
    return jsonify({"message": "Logged out successfully!"})


@app.route("/chat_history/<username>", methods=["GET"])
def chat_history(username):
    return get_chat_history(username)


@app.route("/send_message", methods=["POST"])
def message():
    return send_message()


@app.route("/", methods=["GET"])
@app.route("/home", methods=["GET"])
def home():
    return "Hello, World!"


@app.route("/recommend_stories", methods=["POST"])
def recommend_stories():
    data = request.get_json()
    input_text = data.get("input_text")
    if not input_text:
        return jsonify({"error": "No input text provided"}), 400

    try:
        stories = recommend_similar_stories(input_text)
        return jsonify(stories)
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
