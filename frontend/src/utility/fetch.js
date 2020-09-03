const axios = require('axios');

export const fetchQuizes = () => {
    return axios.get('http://localhost:5000/quizes').then(response =>{
        console.log('here is the data', response.data)
        return response.data.quizes
    })
}

