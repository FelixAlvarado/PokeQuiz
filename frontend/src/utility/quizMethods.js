const axios = require('axios');

let host 

if(window.origin.includes("herokuapp")){
    host = "https://pokequiz1.herokuapp.com"
}else {
    host = "http://localhost:5000"
}


export const createQuiz = (title, questions) => {
    return axios.post(`${host}/create`,{
        title: title,
        questions: questions
        }).then(response =>{
            return response.data
        })

}

export const scoreQuiz = (attempts, score) => {
    return axios.post(`${host}/score`,{
        attempts: attempts,
        score: score
        }).then(response =>{
            return response.data
        })

}