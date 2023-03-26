// challenge 1
// Given an array of numbers, return an array of each number, squared
const nums = [1, 2, 3, 4, 5];
const squared = nums.map(function(item) {
    return item * item
})
console.log(squared)

// other solns
// let a = nums.map(x => x*x)
// conse.log(a)
// return(a)

// Challenge 2
// Given an array of strings, return an array where
// the first letter of each string is capitalized

const names = ["alice", "fred", "bob", "charlie"]
let b = names.map((name) => {
     return name[0].toUpperCase() + name.slice(1)
})
console.log(b)
// other solns
// return name.slice(0, 1).toUpperCase()
// return `${name[0].toUpperCase()}${name.slice(1)}`


 // Given an array of strings, return an array of strings that wraps all of the original strings in an
 // html-like <p></p> tag

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
            //--->    ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
const elements = pokemon.map(monster => {
    return `<p>${monster}</p>`
})
console.log(elements)
