

def fetch_quizes(cursor):
    result = {'quizes':{}}
    search_string = ""
    count = 0
    cursor.execute("SELECT * FROM quizes")
#tuple returned is (id, title)
    for quiz in cursor:
        result['quizes'][f"{quiz[0]}"] = {'id':quiz[0],'title':quiz[1], 'scores':[]}
        count += 1

        if (count < cursor.rowcount):
            search_string += f"quiz_id = {quiz[0]} OR "
        else:
            search_string += f"quiz_id = {quiz[0]} "

    cursor.execute(f"SELECT * FROM scores WHERE {search_string}")

#tuple returned is (id, quiz_id, test_taker, score)
    for score in cursor:
        result['quizes'][f"{score[1]}"]['scores'].append([score[2],score[3]])
  
    return result

def fetch_quiz(cursor, id):
    cursor.execute(f"SELECT * FROM quizes WHERE id = {id}")
    result = {'quiz':{}}
    for quiz in cursor:
        result['quiz'][f"{quiz[0]}"] = {'id':quiz[0],'title':quiz[1], 'scores':[]}
    
    cursor.execute(f"SELECT * FROM scores WHERE quiz_id = {id}")

    for score in cursor:
        result['quiz'][f"{score[1]}"]['scores'].append([score[2],score[3],score[0]])
 
    return result 

def fetch_attempt(cursor,id):

    result = {}
    score = []

    cursor.execute(f"SELECT * FROM scores WHERE id = {id}")

    quiz_id = ''
    score_id = ''

    for score in cursor:
        score = [score[2],score[3],score[0]]
        quiz_id = score[1]
        score_id = score[0]
    
    result[f"{quiz_id}"] = {}

    result[f"{quiz_id}"]["score"] = score
    
    print('quiz id')
    print(result)

    #above result is correct. now need to get quiz, question, and attempt information. can probably do that with one request

    return 'hello'

    # for question in cursor:


