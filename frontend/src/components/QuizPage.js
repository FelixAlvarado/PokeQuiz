import React, { useRef, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom"

export default function QuizPage() {

  let { id } = useParams();
  const onLoad = useRef(true)
 // let location = useLocation;
 // let { from } = location.state 
  //console.log('here is location', location)


useEffect(() => {
  if(onLoad.current){

    onLoad.current = false;
  }
});

  return (
    <div>
      <p>here is the id: {id}</p>
      <p>here is the id: {id}</p>
      <p>here is the id: {id}</p>
      <p>here is the id: {id}</p>
      <p>here is the id: {id}</p>
      <p>here is the id: {id}</p>
    </div>
  );    
}
