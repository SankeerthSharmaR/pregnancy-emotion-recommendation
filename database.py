import sqlite3
import os

class DatabaseManager:
    def __init__(self, database_path):
        self.database_path = database_path

    def __enter__(self):
        self.connection = sqlite3.connect(self.database_path)
        self.cursor = self.connection.cursor()
        return self.cursor

    def __exit__(self, exc_type, exc_val, exc_tb):
        if exc_type or exc_val or exc_tb:
            self.connection.rollback()
        else:
            self.connection.commit()
        self.connection.close()

current_directory = os.path.dirname(__file__)

data_directory = os.path.join(current_directory, 'data')

os.makedirs(data_directory, exist_ok=True)

DATABASE_PATH = os.path.join(data_directory, 'users.db')

def create_table():
    with DatabaseManager(DATABASE_PATH) as cursor:
        cursor.execute(
            """
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY,
                name TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL
            )
            """
        )

def add_user(name, email, password):
    with DatabaseManager(DATABASE_PATH) as cursor:
        cursor.execute(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)", (name, email, password)
        )

def get_user(email):
    with DatabaseManager(DATABASE_PATH) as cursor:
        # cursor.execute("SELECT * FROM users WHERE email = ?", (email,))
        # print(email)
        cursor.execute("SELECT * FROM users WHERE email = ?", (email,))
        user = cursor.fetchone()
        # print(user)
        return user

def delete_user(email):
    with DatabaseManager(DATABASE_PATH) as cursor:
        cursor.execute("DELETE FROM users WHERE email = ?", (email,))
