

def fetch_quizes(cursor):
    result = []
    cursor.execute("SELECT * FROM quizes")
    for quiz in cursor:
        result.append(quiz)
    
    return result