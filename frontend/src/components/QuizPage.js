import React, { useRef, useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import { getQuiz  } from '../app/quizesSlice.js'
import { useSelector, useDispatch } from 'react-redux';
import '../style/quizpage.css'
import {pokePicture} from '../utility/util'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faCoffee } from '@fortawesome/free-solid-svg-icons'


export default function QuizPage() {
  const dispatch = useDispatch();
  let { id } = useParams();
  const quiz = useSelector(state => state.quizes[`${id}`])
  const onLoad = useRef(true)
  const [picture, setPicture] = useState('')
  console.log('here is the quiz', quiz)
  const title = quiz ? quiz.title : ''


  function handleImage(){
    if (picture.length > 0){
      return(
        <img alt="pokemon" src={picture} className="page-picture"/>
      )
    } else {
      return(
        <div className="page-picture"></div>
      )
    }
  }


useEffect(() => {
  if(onLoad.current){
    dispatch(getQuiz(id))
    setPicture(pokePicture())
    onLoad.current = false;
  }
});

  return (
    <div className="page-holder">
      <div className="page-top-section">
        {handleImage()}
          <div className="page-top-right">
            <div className="page-title"><div>{title}</div></div>
              <div className="link-button-holder">
              <button className="take-quiz-button">Take Quiz</button>
              <div className="page-link-holder">
                <input defaultValue={window.location.href}/>
                <FontAwesomeIcon className="copy-icon" icon={faCopy} size="lg" />
              </div>
            </div>
          </div>
      </div>
    </div>
  );    
}
