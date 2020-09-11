import React from 'react';
import '../style/nav.css'

export default function Nav() {

  function reload(e){
    e.preventDefault()
    window.location.reload()
  }

  return (
    <div className="nav-bar">
      <div onClick={(e) => reload(e)} className='logo' ></div>
      <button className='create-quiz-button'>Create Quiz</button>
    </div>
  );    
}
