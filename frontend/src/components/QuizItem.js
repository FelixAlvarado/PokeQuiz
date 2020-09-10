import React from 'react';
import '../style/quizesview.css'
import {pokePicture} from '../utility/pokemon'

export default function QuizItem({quiz}) {
  
  function average(){
    let total = 0;

    quiz.scores.forEach(score =>{
      total += score[1]
    })

    return Math.floor(total / quiz.scores.length)
  }

  return (
    <div className="quiz-item">
        <img alt="pokemon" src={pokePicture()} className="picture"/>
        <div><h2>{quiz.title}</h2></div>
        <div>
          <h3>Average Score: {average()}%</h3>
        </div>
    </div>
 
    
  );    
}