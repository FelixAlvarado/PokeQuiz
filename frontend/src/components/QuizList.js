import React, { useEffect, useRef, lazy, Suspense } from 'react';
import { getQuizes, selectQuizes } from '../app/quizesSlice.js'
import { useSelector, useDispatch } from 'react-redux';
import QuizItem from './QuizItem'
const QuizItemLazy = lazy(() => import('./QuizItem'))


export default function QuizList() {
    const quizes = useSelector(selectQuizes)
    const dispatch = useDispatch();
    const onLoad = useRef(true)
    let quizList

  useEffect(() => {
    if(onLoad.current){
      document.body.scrollTop = 0; 
      document.documentElement.scrollTop = 0;
      dispatch(getQuizes());
      onLoad.current = false;
    }
  });

  if(quizes) { 
          quizList = Object.values(quizes).reverse().map((quiz, i) =>{
            if(quiz.title && i < 10){
              return (
                <QuizItem key={i} quiz={quiz} />
                )
            }else if (quiz.title && i < 20){
              return(
              <Suspense key={i}  fallback={<div></div>}>
                <QuizItemLazy quiz={quiz} />
              </Suspense>
              )
            }else{
              return <div key={i}></div>
            }
      })

      // let array = Object.values(quizes);
      // array = array.concat(array);
      // array = array.concat(array);

    // quizList = array.map((quiz, i) =>{
    //       return <QuizItem key={i} quiz={quiz} />
    //   })
  }

  return (
    <div className="quiz-list">
        {quizList}
    </div>
  );    
}