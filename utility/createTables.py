import mysql.connector
from mysql.connector import errorcode 
from dotenv import load_dotenv
import os 

load_dotenv()

user = os.environ.get("USERNAME")
password = os.environ.get("PASSWORD")
DB_NAME = os.environ.get("DB_NAME")


#this code creates the tables needed for the project. this page has already been ran

TABLES = {}

TABLES['quizes'] = (
    "CREATE TABLE `quizes` ("
    "  `id` int NOT NULL AUTO_INCREMENT,"
    "  `title` varchar(256) NOT NULL,"
    "  PRIMARY KEY (`id`)"
    ")")

TABLES['questions'] = (
    "CREATE TABLE `questions` ("
    "  `id` int NOT NULL AUTO_INCREMENT UNIQUE,"
    "  `question` varchar(1000) NOT NULL,"
    "  `correct_answer` varchar(1000) NOT NULL,"
    "  `wrong_answer1` varchar(1000) NOT NULL,"
    "  `wrong_answer2` varchar(1000) NOT NULL,"
    "  `wrong_answer3` varchar(1000) NOT NULL,"
    "   PRIMARY KEY (`id`)"
    ")")

TABLES['quiz_questions'] = (
    "CREATE TABLE `quiz_questions` ("
    "  `quiz_id` int NOT NULL,"
    "  `question_id` int NOT NULL"
    ")")

TABLES['scores'] = (
    "CREATE TABLE `scores` ("
    "  `id` int NOT NULL AUTO_INCREMENT UNIQUE,"
    "  `quiz_id` int NOT NULL,"
    "  `test_taker` varchar(256) NOT NULL,"
    "  `score` int NOT NULL,"
    "  FOREIGN KEY (`quiz_id`) REFERENCES `quizes` (`id`)"
    ")")

cnx = mysql.connector.connect(user=f"{user}", password=f"{password}")

cursor = cnx.cursor()

cursor.execute("USE {}".format(DB_NAME))

for table_name in TABLES:
    table_description = TABLES[table_name]
    try:
        print("Creating table {}: ".format(table_name), end='')
        cursor.execute(table_description)
    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_TABLE_EXISTS_ERROR:
            print("already exists.")
        else:
            print(err.msg)
    else:
        print("OK")

cursor.close()
cnx.close()