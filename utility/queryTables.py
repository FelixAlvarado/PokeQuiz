import mysql.connector
from mysql.connector import errorcode 
from dotenv import load_dotenv
import os 

load_dotenv()

user = os.environ.get("USERNAME")
password = os.environ.get("PASSWORD")
DB_NAME = os.environ.get("DB_NAME")

cnx = mysql.connector.connect(user=f"{user}", password=f"{password}")
cursor = cnx.cursor()
cursor.execute("USE {}".format(DB_NAME))

query = ("SELECT * FROM quizes")

cursor.execute(query)

#you must read information from a query via the cursor before using the cursor again
for (id,title) in cursor:
  print(f"{id} is the id and {title} is the title")

cursor.close()
cnx.close()

#stopping here for today. next time add questions, scores and format needed queries

