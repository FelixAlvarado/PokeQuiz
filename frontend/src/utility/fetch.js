const axios = require('axios');

let host 

if(window.origin.includes("herokuapp")){
    host = "https://pokequiz1.herokuapp.com"
}else if (window.origin.includes(":5000")) {
    host = "http://localhost:5000"
} else {
    host = "http://127.0.0.1:8000"
}

export const fetchQuizes = () => {
    return axios.get(`${host}/quizes`).then(response =>{
        return response.data.quizes
    }).catch(error =>{
        console.log('error occurred on server side when attempting to fetch questions', error)
    })
}

export const fetchQuiz = (id) => {
    return axios.get(`${host}/quiz?id=${id}`).then(response =>{
        console.log('here is the data that was fetched for quiz page', response.data.quiz)
        return response.data.quiz
    }).catch(error =>{
        console.log('error occurred on server side when attempting to fetch questions', error)
    })
}

export const fetchQuizAttempt = (id) => {
    console.log('attempting to fetch quiz attempt data')
    return axios.get(`${host}/attempt?id=${id}`).then(response =>{
        console.log('here is the fetch quiz attempt response', response)
        return response.data
    }).catch(error =>{
        console.log('error occurred on server side with fetch quiz attempt call', error)
    })
}

export const fetchQuestions = (id) => {
    console.log('fetching questions')
    return axios.get(`${host}/questions?id=${id}`).then(response =>{
        console.log('here is the data received from fetch questions', response)
        return response.data
    }).catch(error =>{
        console.log('error occurred on server side when attempting to fetch questions', error)
    })
}



  

