
export const pokePicture = () => {
    let index = Math.floor(Math.random() * 721) + 1
    index = index.toString()
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`
}