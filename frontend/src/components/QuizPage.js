import React, { useRef, useEffect, useState } from 'react';
import { getQuiz  } from '../app/quizesSlice.js'
import { useSelector, useDispatch } from 'react-redux';
import '../style/quizpage.css'
import {pokePicture} from '../utility/util'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import ScoreList from './ScoreList'
import {Link, useLocation} from "react-router-dom";


export default function QuizPage() {
  const dispatch = useDispatch();
  let id = window.location.href.split('/')[4]
  const onLoad = useRef(true)
  const [picture, setPicture] = useState('')
  const [copyIcon, setCopyIcon] = useState({icon:faCopy,className:"copy-icon"})
  let location = useLocation()

  const quiz = useSelector(state => {
    if(state.quizes[`${id}`]){
    return state.quizes[`${id}`]
    }else{
      return {}
    }
  })

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
    console.log('here is the text', text)
    text.select()
    document.execCommand("copy")
    setCopyIcon({icon:faCheckCircle,className:"copy-icon2"})
  }


useEffect(() => {
  if(onLoad.current){
    dispatch(getQuiz(id))
    setPicture(pokePicture())
    if(location.state && location.state.justCreated){
      setTimeout(function(){alert("You quiz was successfully created! Share this page's link with your friends to see how they will score!")}, 500)
    }
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
              <Link to="/takequiz" className="quiz-button">Take Quiz</Link>
              <div className="page-link-holder">
                <input id="currentLink" defaultValue={window.location.href}/>
                <FontAwesomeIcon onClick={(e) => handleClick(e)} className="copy-icon" icon={copyIcon.icon} size="lg" />
              </div>
            </div>
          </div>
      </div>
      <button className="quiz-button2">Take Quiz</button>
      <button onClick={(e) => handleClick(e)} className="copy-link">Copy Link</button>
      <ScoreList scores={quiz.scores} quizId={quiz.id} />
    </div>


  );    
}
