
export const pokePicture = () => {
    let index = Math.floor(Math.random() * 721) + 1
    index = index.toString()
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`
}

export const averageScore = (scores) => {

    if(!scores){
      return ''
    }

    let total = 0;

    scores.forEach(score =>{
      total += score[1]
    })

    return Math.floor(total / scores.length)
}