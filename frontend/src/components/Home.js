import React, { useEffect, useRef } from 'react';
//import { fetchQuizes } from '../utility/fetch'
import { getQuizes, selectQuizes } from '../app/quizesSlice.js'
import { useSelector, useDispatch } from 'react-redux';

export default function Home() {
    const quizes = useSelector(selectQuizes)
    const dispatch = useDispatch();
    const onLoad = useRef(true)
   // console.log('calling get quizes from Home.js')
   // console.log('here is get quizes', getQuizes)
   // dispatch(getQuizes());

   console.log('here are the quizes', quizes)

  useEffect(() => {
    if(onLoad.current){
      dispatch(getQuizes());
      onLoad.current = false;
    }

  });

  return (
    <div>
      <p>{JSON.stringify(quizes)}</p>
    </div>
  );    
}
