import threading
import mysql.connector

def set_interval(func, sec):
    def func_wrapper():
        set_interval(func, sec)
        func()
    t = threading.Timer(sec, func_wrapper)
    t.start()
    return t

class Database:
    def __init__(self, cursor_value, cnx_value, user, password, DB_NAME, host, port):
        self.cursor = cursor_value
        self.cnx = cnx_value
        self.user = user
        self.password = password
        self.DB_NAME = DB_NAME
        self.host = host 
        self.port = port

    def restart_connection(self):
        self.cnx = mysql.connector.connect(user=f"{self.user}", password=f"{self.password}",database=f"{self.DB_NAME}", host=f"{self.host}", port=f"{self.port}")
        self.cursor = self.cnx.cursor(buffered=True)
        self.cursor.execute("USE {}".format(self.DB_NAME))
    