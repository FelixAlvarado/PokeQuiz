const axios = require('axios');

let host 

if(window.origin.includes("herokuapp")){
    host = "https://pokequiz1.herokuapp.com"
}else if (window.origin.includes(":5000")) {
    host = "http://localhost:5000"
} else {
    host = "http://127.0.0.1:8000"
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