import React, {useState, useEffect, useRef} from 'react';
import '../style/nav.css'
import {Link} from "react-router-dom";

export default function Nav() {

  let [font, setFont] = useState(18)
  const onLoad = useRef(true)


  useEffect(() => {

    if(onLoad.current){
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          setFont(16)
        }
      onLoad.current = false;
    }
  },[setFont]);

  return (
    <div className="nav-bar">
      <Link to="/"><div className='logo' ></div></Link>
      <Link to="/create"><button className='create-quiz-button' style={{fontSize:`${font}px`}}>Create Quiz</button></Link>
    </div>
  );    
}
