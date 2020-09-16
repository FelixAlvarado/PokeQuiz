import React, { useState, } from 'react';
import '../style/quizesview.css'
import {pokePicture} from '../utility/pokemon'
import {Redirect, useLocation} from "react-router-dom";

export default function QuizItem({quiz}) {
  console.log('here is the quiz id', quiz.id)
  const [redirect, setRedirect] = useState(false)
 // let location = useLocation();

  function average(){
    let total = 0;

    quiz.scores.forEach(score =>{
      total += score[1]
    })

    return Math.floor(total / quiz.scores.length)
  }

  function handlePress(e){
    e.preventDefault()
    setRedirect(true)
  }

  function handleRedirect(){
    if(redirect){
      return(
        <Redirect to={{ pathname: `/quiz/${quiz.id}`}}/>
      )
    }
  }

  return (
    <div onClick={(e) => handlePress(e)} className="quiz-item">
        <img alt="pokemon" src={pokePicture()} className="picture"/>
        <div><h2>{quiz.title}</h2></div>
        <div>
          <h3>Average Score: {average()}%</h3>
        </div>
        {handleRedirect()}
    </div>

  );    
}