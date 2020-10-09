const axios = require('axios');

let host 

if(window.origin.includes("herokuapp")){
    host = "https://pokequiz1.herokuapp.com"
}else {
    host = "http://localhost:5000"
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
        return response.data
    })
}

export const fetchQuestions = (id) => {
    return axios.get(`${host}/questions?id=${id}`).then(response =>{
        return response.data
    })
}



  

