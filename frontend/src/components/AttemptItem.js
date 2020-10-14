import React from 'react';
import '../style/scorepage.css'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




export default function AttemptItem({attempt, question}) {
    function handleIcon(){
        if(attempt.answer === question.correct_answer){
            return <FontAwesomeIcon className="right" icon={faCheck} size="lg" />
        } else {
            return <FontAwesomeIcon className="wrong" icon={faTimes} size="lg" />
        }
    }

    function handleAnswer(wrongAnswer){
        if(wrongAnswer !== attempt.answer){
            return <div>{wrongAnswer}</div>
        } else {
            return <div><mark className="incorrect">{wrongAnswer}</mark></div>
        }
    }

  return (
   
 <div className="question-holder">
    <div className="question">
        {handleIcon()}<div>{question.question}</div>
    </div>
        <mark className="correct">{question.correct_answer}</mark>
        {handleAnswer(question.wrong_answer1)}
        {handleAnswer(question.wrong_answer2)}
        {handleAnswer(question.wrong_answer3)}
    
</div>
  );    
}