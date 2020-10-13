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
    })
}

export const fetchQuiz = (id) => {
    return axios.get(`${host}/quiz?id=${id}`).then(response =>{
        return response.data.quiz
    })
}

export const fetchQuizAttempt = (id) => {
    return axios.get(`${host}/attempt?id=${id}`).then(response =>{
        console.log('here is the fetch quiz attempt response', response)
        return response.data
    })
}

export const fetchQuestions = (id) => {
    return axios.get(`${host}/questions?id=${id}`).then(response =>{
        return response.data
    })
}



  

