

def fetch_quizes(cursor):
    result = {'quizes':[],'status':200}
    cursor.execute("SELECT * FROM quizes")
    for quiz in cursor:
        result['quizes'].append(quiz)
    
    return result