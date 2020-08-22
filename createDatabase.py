from dotenv import load_dotenv
import os 
import mysql.connector

load_dotenv()

user = os.environ.get("USERNAME")
password = os.environ.get("PASSWORD")

cnx = mysql.connector.connect(user=f"{user}", password=f"{password}")

cursor = cnx.cursor() 

#code from https://dev.mysql.com/doc/connector-python/en/connector-python-example-ddl.html

#create database (one run once)

# try:
#         cursor.execute(
#             "CREATE DATABASE PokeQuiz DEFAULT CHARACTER SET 'utf8'")
# except mysql.connector.Error as err:
#         print("Failed creating database: {}".format(err))
#         exit(1)

#using database (run everytime)

try:
    cursor.execute("USE {}".format("PokeQuiz"))
except mysql.connector.Error as err:
    print("Database {} does not exists.".format("PokeQuiz"))

#stoping here for today. next thing to do is to create tables and utilize one-to-many associations


