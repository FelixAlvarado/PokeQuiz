import React, { useEffect, useState, useRef} from 'react';
import '../style/quizesview.css'
import {pokePicture, averageScore} from '../utility/util'
import {Link} from "react-router-dom";

export default function QuizItem({quiz}) {
  const [picture, setPicture] = useState('')
  const onLoad = useRef(true)

  function handleImage(){
    if (picture.length > 0){
      return(
        <img alt="pokemon" src={picture} className="picture"/>
      )
    } else {
      return(
        <div className="picture"></div>
      )
    }
  }

  useEffect(() => {
    if(onLoad.current){
      setPicture(pokePicture())
      onLoad.current = false;
    }
  },[onLoad]);

  return (
    <Link to={`/quiz/${quiz.id}`} className="quiz-item">
        {handleImage()}
        <div><h2>{quiz.title}</h2></div>
        <div>
          <h3>Average Score: {averageScore(quiz.scores)}%</h3>
        </div>
    </Link>

  );    
}