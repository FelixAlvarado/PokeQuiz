import React, { useRef, useEffect, useState } from 'react';
import { getQuiz  } from '../app/quizesSlice.js'
import { useSelector, useDispatch } from 'react-redux';
import '../style/quizpage.css'
import {pokePicture} from '../utility/util'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import ScoreList from './ScoreList'
import {Link} from "react-router-dom";


export default function QuizPage() {
  const dispatch = useDispatch();
  let id = window.location.href.split('/')[4]

  const quiz = useSelector(state => {
    if(state.quizes[`${id}`]){
    return state.quizes[`${id}`]
    }else{
      return {}
    }
  })
  
  const onLoad = useRef(true)
  const [picture, setPicture] = useState('')
  const [copyIcon, setCopyIcon] = useState({icon:faCopy,className:"copy-icon"})
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
              <Link className="quiz-button">Take Quiz</Link>
              <div className="page-link-holder">
                <input id="currentLink" defaultValue={window.location.href}/>
                <FontAwesomeIcon onClick={(e) => handleClick(e)} className="copy-icon" icon={copyIcon.icon} size="lg" />
              </div>
            </div>
          </div>
      </div>
      <button className="quiz-button2">Take Quiz</button>
      <button className="copy-link">Copy Link</button>
      <ScoreList scores={quiz.scores} quizId={quiz.id} />
    </div>


  );    
}
