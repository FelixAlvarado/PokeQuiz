import React, {useState, useEffect} from 'react';
import '../style/nav.css'
import {Redirect} from "react-router-dom";

export default function Nav() {
  
  const [redirect, setRedirect] = useState(false)


  function changeRedirect(e){
    e.preventDefault()
    setRedirect(true)
  }

  function handleRedirect(){
    if(redirect){
      return(
        <Redirect to={{ pathname: '/'}}/>
      )
    }
  }

  useEffect((arg,redirect) =>{
    if(redirect){
      setRedirect(false)
    }
  },[redirect])

  return (
    <div className="nav-bar">
      <div onClick={(e) => changeRedirect(e)} className='logo' ></div>
      <button className='create-quiz-button'>Create Quiz</button>
      {handleRedirect()}
    </div>
  );    
}
