import React, { useRef, useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import { getQuiz  } from '../app/quizesSlice.js'
import { useSelector, useDispatch } from 'react-redux';
import '../style/quizpage.css'
import {pokePicture} from '../utility/util'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faCheckCircle } from '@fortawesome/free-solid-svg-icons'


export default function QuizPage() {
  const dispatch = useDispatch();
  let { id } = useParams();
  const quiz = useSelector(state => state.quizes[`${id}`])
  const onLoad = useRef(true)
  const [picture, setPicture] = useState('')
  const [copyIcon, setCopyIcon] = useState({icon:faCopy,className:"copy-icon"})
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

  function handleClick(e) {
    e.preventDefault()
    let text = document.getElementById("currentLink")
    text.select()
    document.execCommand("copy")
    setCopyIcon({icon:faCheckCircle,className:"copy-icon2"})
  }


useEffect(() => {
  if(onLoad.current){
    dispatch(getQuiz(id))
    setPicture(pokePicture())
    onLoad.current = false;
  }
},[dispatch,id]);

  return (

    <div className="page-holder">
      <div className="page-top-section">
        {handleImage()}
          <div className="page-top-right">
            <div className="page-title"><div>{title}</div></div>
              <div className="link-button-holder">
              <button className="take-quiz-button">Take Quiz</button>
              <div className="page-link-holder">
                <input id="currentLink" defaultValue={window.location.href}/>
                <FontAwesomeIcon onClick={(e) => handleClick(e)} className="copy-icon" icon={copyIcon.icon} size="lg" />
              </div>
            </div>
          </div>
      </div>
      <button className="copy-link">Copy Link</button>
    </div>


  );    
}
