import React from 'react';
import '../style/nav.css'
import {Link} from "react-router-dom";

export default function Nav() {

  return (
    <div className="nav-bar">
      <Link to="/"><div className='logo' ></div></Link>
      <Link to="/create"><button className='create-quiz-button'>Create Quiz</button></Link>
    </div>
  );    
}
