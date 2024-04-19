from flask_socketio import SocketIO, join_room, leave_room
from flask import request, jsonify
from tinydb import TinyDB, Query
from datetime import datetime

socketio = SocketIO()

# Initialize TinyDB
db = TinyDB("chat_db.json")

active_users = {}


@socketio.on("connect")
def handle_connect():
    print("Client connected")


@socketio.on("disconnect")
def handle_disconnect():
    print("Client disconnected")


@socketio.on("join")
def handle_join(data):
    username = data["username"]
    room = data["room"]

    active_users[username] = request.sid
    join_room(room)

    print(f"{username} joined room {room}")


@socketio.on("leave")
def handle_leave(data):
    username = data["username"]
    room = data["room"]

    del active_users[username]
    leave_room(room)

    print(f"{username} left room {room}")


@socketio.on("send_message")
def handle_message(data):
    sender = data["sender"]
    receiver = data["receiver"]
    message = data["message"]

    receiver_sid = active_users.get(receiver)

    if receiver_sid:
        socketio.emit(
            "receive_message", {"sender": sender, "message": message}, room=receiver_sid
        )
        save_message(sender, receiver, message)
    else:
        print(f"User {receiver} is not active")


def save_message(sender, receiver, message):
    message_data = {
        "sender": sender,
        "receiver": receiver,
        "message": message,
        "timestamp": str(datetime.now()),
    }
    sender_messages_table = db.table(f"{sender}_messages")
    sender_messages_table.insert(message_data)
    receiver_messages_table = db.table(f"{receiver}_messages")
    receiver_messages_table.insert(message_data)


def get_chat_history(username):
    user_messages_table = db.table(f"{username}_messages")
    chat_history = user_messages_table.all()
    return jsonify(chat_history)


def send_message():
    data = request.get_json()
    sender = data["sender"]
    receiver = data["receiver"]
    message = data["message"]

    receiver_sid = socketio.active_users.get(receiver)

    if receiver_sid:
        socketio.emit(
            "receive_message", {"sender": sender, "message": message}, room=receiver_sid
        )
        save_message(sender, receiver, message)
        return jsonify({"message": "Message sent successfully"})
    else:
        return jsonify({"error": f"User {receiver} is not active"}), 404
