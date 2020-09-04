const axios = require('axios');

export const fetchQuizes = () => {
    return axios.get('http://localhost:5000/quizes').then(response =>{
        return response.data.quizes
    })
}

