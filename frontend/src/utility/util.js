
export const pokePicture = () => {
    let index = Math.floor(Math.random() * 721) + 1
    index = index.toString()
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`
}

export const averageScore = (scores) => {


    if(!scores || scores.length === 0){
      return 'N/A'
    }

    let total = 0;

    scores.forEach(score =>{
      total += score[1]
    })

    return Math.floor(total / scores.length).toString() + '%'
}

export const gradeQuiz = (questions, answers) => {
  let correct = 0;
  let quizLength = Object.keys(questions).length

  Object.keys(answers).forEach(key =>{
    if(answers[`${key}`].answer === questions[`${key}`].correct_answer){
      correct += 1
    }
  }); 

  return Math.floor((correct / quizLength) * 100)

}

export const mergeScores = (oldQuiz, newQuiz) => {

  let result = JSON.parse(JSON.stringify(oldQuiz))
  let keys = {}

  result.scores.forEach((score) =>{
    keys[`${score[2]}`] = true
  })

  newQuiz.scores.forEach((score) =>{

    if(!keys[`${score[2]}`]){
      result.scores.push(score)
    }
  })

  result.scores.sort((a,b) => a[2] - b[2])

  console.log('here is the result from utility', result)
  
  return result
};
