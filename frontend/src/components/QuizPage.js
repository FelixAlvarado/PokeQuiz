import React, { useRef, useEffect, useState } from 'react';
import { getQuiz  } from '../app/quizesSlice.js'
import { useSelector, useDispatch } from 'react-redux';
import '../style/quizpage.css'
import {pokePicture} from '../utility/util'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import ScoreList from './ScoreList'
import {Link, useLocation} from "react-router-dom";
import AlertModal from './alertModal.js'


export default function QuizPage() {
  const dispatch = useDispatch();
  let id = window.location.href.split('/')[4]
  const onLoad = useRef(true)
  const [picture, setPicture] = useState('')
  const [copyIcon, setCopyIcon] = useState({icon:faCopy,className:"copy-icon"})
  let location = useLocation()
  let [showAlert, setShowAlert] = useState(false)
  let [alertText, setAlertText] = useState('');


  const quiz = useSelector(state => {
    if(state.quizes[`${id}`]){
    return state.quizes[`${id}`]
    }else{
      return {}
    }
  })

  const title = quiz ? quiz.title : ''

  if(location.state && location.state.title){
    title = location.state.title
  }

  console.log('here is the title being used', title)


  // function reFetch(state){
  //   console.log('made it to refetch for quiz page')
  //   if(!!state.quizes[`${id}`]){
  //     console.log('re fetching for quiz page')
  //     dispatch(getQuiz(id))
  //   }
  // }

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

  function handleAlert(){
    if(showAlert){
      return <AlertModal showAlert={showAlert} alertText={alertText}/>

    }
  }


useEffect(() => {

  if(onLoad.current){
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
    dispatch(getQuiz(id))
    setPicture(pokePicture())
    if(location.state && location.state.justCreated){
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        alert("Your quiz was successfully created! Share this page's link with your friends to see how they score!")
      }else{
        setAlertText("Your quiz was successfully created! Share this page's link with your friends to see how they score!")
        setShowAlert(true)
      }
    }
    onLoad.current = false;
  }
},[dispatch,id, location.state]);

  return (

    <div className="page-holder">
      <div className="page-top-section">
        {handleImage()}
          <div className="page-top-right">
            <div className="page-title"><div>{title}</div></div>
              <div className="link-button-holder">
              <Link to={`/test/${id}`} className="quiz-button">Take Quiz</Link>
              <div className="page-link-holder">
                <input id="currentLink" defaultValue={window.location.href}/>
                <FontAwesomeIcon onClick={(e) => handleClick(e)} className="copy-icon" icon={copyIcon.icon} size="lg" />
              </div>
            </div>
          </div>
      </div>
      <Link to={`/test/${id}`} className="quiz-button2"><span>Take Quiz</span></Link>
      <button onClick={(e) => handleClick(e)} className="copy-link">Copy Link</button>
      <ScoreList scores={quiz.scores} quizId={quiz.id} />
      {handleAlert()}
    </div>


  );    
}
