import React, {useState} from 'react';
import '../style/createpage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import {createQuiz} from '../utility/quizMethods'
import {Redirect} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getQuestions, addQuiz  } from '../app/quizesSlice.js'


export default function CreatePage() {

  const [title, setTitle] = useState('')
  const questionObject = {question:'', correctAnswer:'', wrongAnswer1:'', wrongAnswer2:'', wrongAnswer3:''}
  const [questions, setQuestions] = useState({0:Object.assign({},questionObject), 1:Object.assign({},questionObject)})
  const [index, setIndex] = useState(1)
  const [newQuiz, setNewQuiz] = useState({boolean: false,id:''})
  let questionForm
  const dispatch = useDispatch();

  function removeQuestion(e){
    e.preventDefault();
    if(index < 2){
      return
    }
    let newObject = Object.assign({},questions)
    delete newObject[`${index}`]
    let newIndex = index - 1 
    setQuestions(newObject)
    setIndex(newIndex)
  }

  function addQuestion(e) {
    e.preventDefault();
    if(index > 8){
      return
    } 
    let newIndex = index + 1
    let newObject = {}
    newObject[`${newIndex}`] = {question:'', correctAnswer:'', wrongAnswer1:'', wrongAnswer2:'', wrongAnswer3:''}
    let newState = Object.assign(questions, newObject)
    setQuestions(newState)
    setIndex(newIndex)
    return
  }

  function handleChange(e,keyword, id){

    let counter

    if(typeof id == 'number'){
      let newId = id.toString() + keyword
      counter = document.getElementById(newId)
    } else {
      counter = document.getElementById(keyword)
    }

    let value = e.currentTarget.value 
    if (value.length === 0) value = ''

    let newObject = Object.assign({},questions)

    switch(keyword) {
      case 'title':
        if(value.length > 22){
          e.currentTarget.value = title 
          break;
        }
        counter.innerHTML = value.length.toString() + "/22"
        setTitle(value)
        break;
      case 'question':
        if(value.length > 150){
          e.currentTarget.value = questions[`${id}`].question 
          break;
        }
        counter.innerHTML = value.length.toString() + "/150"
        newObject[`${id}`].question = value 
        setQuestions(newObject)
        break;
      default:
        if(value.length > 100){
          e.currentTarget.value = questions[`${id}`][`${keyword}`] 
          break;
        }
        counter.innerHTML = value.length.toString() + "/100"
        newObject[`${id}`][`${keyword}`]  = value 
        setQuestions(newObject)
        break;
        
    }

    return;
  }

  function handleSubmit(e)  {
    e.preventDefault()
    let unfilled = []
    let wrongInput = false
    if (title.length === 0) unfilled.push('Title')
    Object.keys(questions).forEach(index => {
      let questionNumber = parseInt(index)  + 1
      if (questions[`${index}`].question.length === 0) unfilled.push(`Question ${questionNumber}`)
      if (questions[`${index}`].correctAnswer.length === 0)  unfilled.push(`Correct Answer (Question ${questionNumber})`)
      if (questions[`${index}`].wrongAnswer1.length === 0) unfilled.push(`Wrong Answer 1 (Question ${questionNumber})`)
      if (questions[`${index}`].wrongAnswer2.length === 0) unfilled.push(`Wrong Answer 2 (Question ${questionNumber})`)
      if (questions[`${index}`].wrongAnswer3.length === 0) unfilled.push(`Wrong Answer 3 (Question ${questionNumber})`)
      if (questions[`${index}`].wrongAnswer1.toLowerCase() === 'n/a' && questions[`${index}`].wrongAnswer2.toLowerCase() === 'n/a' && questions[`${index}`].wrongAnswer3.toLowerCase() === 'n/a') {
        wrongInput = true;
      }
    })

    if(unfilled.length === 0 && !wrongInput){
        createQuiz(title, Object.values(questions)).then(response =>{
          let newObject = Object.assign({},newQuiz)
          newObject.boolean = true; 
          newObject.id = response.id
          let quizObject = {}
          quizObject[`${response.id}`] = response
          console.log('here is the new quiz being added', quizObject)
          dispatch(addQuiz(quizObject))
          setNewQuiz(newObject)
        }).catch(error => {
            console.log('error from the server side', error)
            alert('An error occurred with our servers. Please try submitting your quiz at a later time.')}
            )
        return
    }
    let alertString = ''

    if (unfilled.length > 0){
      alertString += 'Please fill out the following inputs: ';
      unfilled.forEach((input,i) =>{
        alertString += input 
        if (i + 1 < unfilled.length){
          alertString += ', '
        }
      })   
    } 

    if (wrongInput){
      alertString += "\n \n Please note that you cannot use 'n/a' as an answer choice for all of a question's wrong answers"
    }

    alert(alertString)

  }

  function handleRedirect(){
    if(newQuiz.boolean){
      return <Redirect to={{pathname:`/quiz/${newQuiz.id}`,state:{justCreated:true}}}/>
    }
  }

  questionForm = Object.values(questions).map((question, i) =>{
    return (
      <div key={i} className="create-question-holder">
        {handleRedirect()}
        <div><p>Question {i + 1}: </p><input onChange={(e) =>handleChange(e,"question", i)} placeholder={question.question}/><div id={`${i}question`} className="counter2">0/150</div></div>
        <div><p>Correct Answer: </p><input onChange={(e) =>handleChange(e,"correctAnswer", i)} placeholder={question.correctAnswer}/><div id={`${i}correctAnswer`} className="counter2">0/100</div></div>
        <div><p>Wrong Answer 1: </p><input onChange={(e) =>handleChange(e,"wrongAnswer1", i)} placeholder={question.wrongAnswer}/><div id={`${i}wrongAnswer1`} className="counter2">0/100</div></div>
        <div><p>Wrong Answer 2: </p><input onChange={(e) =>handleChange(e,"wrongAnswer2", i)} placeholder={question.wrongAnswer}/><div id={`${i}wrongAnswer2`} className="counter2">0/100</div></div>
        <div><p>Wrong Answer 3: </p><input onChange={(e) =>handleChange(e,"wrongAnswer3", i)} placeholder={question.wrongAnswer}/><div id={`${i}wrongAnswer3`} className="counter2">0/100</div></div>
        <br/>
        <br/>
      </div>

    );
  })


  return (  
    <div className="page-holder">
      <div className="quiz-form">
        <h1>Create Your Quiz!</h1>
        <span>Title: </span><input onChange={(e) => handleChange(e, "title")}/><div id="title" className="counter">0/22</div>
        <p>Questions:</p>
        <div className="instructions">Please fill out all of the below inputs. If you would like to use less than four answer choices for any of your questions, enter "n/a" for the corresponding wrong answer. Each question must have at least two answer choices</div>
        <br/>
        <br/>
        {questionForm}
        <div className="icon-holder">
          <FontAwesomeIcon className={ index < 2 ? "remove2" : "remove"} onClick={(e) => removeQuestion(e)} icon={faMinus} size="3x" />
          <FontAwesomeIcon className={ index > 8 ? "add2" : "add"} onClick={(e) => addQuestion(e)} icon={faPlus} size="3x" />
        </div>
        <button onClick={(e) => handleSubmit(e)} className="submit">Submit</button>
      </div>
    </div>
  );    
}