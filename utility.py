import threading

def set_interval(func, sec):
    def func_wrapper():
        set_interval(func, sec)
        func()
    t = threading.Timer(sec, func_wrapper)
    t.start()
    return t

def restart_connection(mysql,cursor, cnx, user,password, DB_NAME, host, port):
    cnx.close()
    cnx = mysql.connector.connect(user=f"{user}", password=f"{password}",database=f"{DB_NAME}", host=f"{host}", port=f"{port}")
    cursor = cnx.cursor(buffered=True)
    cursor.execute("USE {}".format(DB_NAME))
    return
    