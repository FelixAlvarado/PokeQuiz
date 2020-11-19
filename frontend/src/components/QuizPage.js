import React, { useRef, useEffect, useState } from 'react';
import { getQuiz  } from '../app/quizesSlice.js'
import { getScores,addScore } from '../app/scoresSlice.js'
import { useSelector, useDispatch } from 'react-redux';
import '../style/quizpage.css'
import {pokePicture, organizeScores} from '../utility/util'
import {deleteQuiz} from '../utility/fetch'
import {fetchScores} from '../utility/fetch'
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
  let [marginMod, setMarginMod] = useState('');
  let scores = useSelector(state => state.scores)
  let quizScores = organizeScores(scores, id)
  let pass = window.location.href.split('/')[5]

  let quiz = useSelector(state => {
    if(state.quizes[`${id}`]){
    return state.quizes[`${id}`]
    }else{
      return {scores:[]}
    }
  })

  const justCreated = (quiz.title && location.state && location.state.justCreated) ? true : false

  let title = (quiz && quiz.title) ? quiz.title : ''
  let pictureClass = title.length > 12 ? 'picture-opacity' : ''

  function handleImage(){
    if (picture.length > 0){
      return(
        <img alt="pokemon" src={picture} className={`page-picture ${pictureClass}`} style={{width: '100px'}}/>      )
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

  function topSection() {
    if(/chrome/i.test( navigator.userAgent )){
      return( 
    <div className="page-top-section">
      {handleImage()}
        <div className="page-top-right">
          <div className="page-title"><div>{title}</div></div>
            <div className="link-button-holder">
            <Link to={{pathname:`/test/${id}`,state:{justCreated:justCreated}}}  className="quiz-button">Take Quiz</Link>
            <div className={`page-link-holder ${marginMod}`}>
              <input id="currentLink" defaultValue={window.location.href}/>
              <FontAwesomeIcon onClick={(e) => handleClick(e)} className="copy-icon" icon={copyIcon.icon} size="lg" />
            </div>
          </div>
        </div>
    </div>)
    }else {
      return(
    <div className="page-top-section-grid">
      {handleImage()}
        <div className="page-top-right">
          {/* <div className="page-title"><div>{title}</div></div> */}
            <div className="page-title"><div>{title}</div></div>
            <div className="link-button-holder">
            <Link to={{pathname:`/test/${id}`,state:{justCreated:justCreated}}}  className="quiz-button">Take Quiz</Link>
            <div className={`page-link-holder ${marginMod}`}>
              <input id="currentLink" defaultValue={window.location.href}/>
              <FontAwesomeIcon onClick={(e) => handleClick(e)} className="copy-icon" icon={copyIcon.icon} size="lg" />
            </div>
          </div>
        </div>
    </div>
      )
    }
  }

  function handleClick(e){
    e.preventDefault()
    deleteQuiz(id).then(response =>{
    }).catch(error => console.log('error occurred while deleted quiz', error))
  }



useEffect(() => {

  if(onLoad.current){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    if (navigator.userAgent.toLowerCase().indexOf('safari') > -1 && !(navigator.userAgent.toLowerCase().indexOf('chrome') > -1) && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      setMarginMod('margin-mod')
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    if(!justCreated){
        fetchScores(id).then(newScores =>{
          dispatch(addScore(newScores))
          dispatch(getQuiz(id))
        })
 
      }
    setPicture(pokePicture())
    if(justCreated){
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
      {topSection()}
      <button className={pass === process.env.pass ? "none" : ''} onClick={e => handleClick(e)}>delete quiz</button>
      <Link to={`/test/${id}`} className="quiz-button2"><span>Take Quiz</span></Link>
      <button onClick={(e) => handleClick(e)} className="copy-link">Copy Link</button>
      <ScoreList scores={quizScores} quizId={quiz.id} />
      {handleAlert()}
    </div>


  );
}
