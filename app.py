from flask import Flask, request
from queries import fetch_quizes, fetch_quiz, fetch_attempt
import mysql.connector
from mysql.connector import errorcode 
from dotenv import load_dotenv
import os 
from flask_cors import CORS

load_dotenv()

user = os.environ.get("USERNAME")
password = os.environ.get("PASSWORD")
DB_NAME = os.environ.get("DB_NAME")

cnx = mysql.connector.connect(user=f"{user}", password=f"{password}")
cursor = cnx.cursor(buffered=True)
cursor.execute("USE {}".format(DB_NAME))

app = Flask(__name__)
CORS(app)

@app.route('/quizes', methods=["GET"])
def quizes():
    return fetch_quizes(cursor)

@app.route('/quiz', methods=["GET"])
def quiz():
    quiz_id = request.args.get('id')
    return fetch_quiz(cursor,quiz_id)

@app.route('/attempt', methods=["GET"])
def attempt():
    score_id = request.args.get('id')
    return fetch_attempt(cursor,score_id)


if __name__ == "__main__":
    app.run(debug=True)