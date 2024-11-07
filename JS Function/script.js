//display hati
function printHeart(){
    console.log("<3")
}
printHeart()

//return value
function multiply(num1, num2){
    return num1 * num2
}

console.log(multiply(2,3))
console.log(multiply(9,9))
console.log(multiply(5,4))

//scope practice A
let animal = "Giant Pacific Octopus"

function observe(){
    let animal = "Pajama Squid"
    console.log(animal)
}
observe()

//scope practice B
let deadlyAnimal = "Blue-Ringed Octopus"
function handleAnimal(){
    let deadlyAnimal = "Scorpionfish"
    console.log(deadlyAnimal)
}
handleAnimal()
console.log(deadlyAnimal)

//arrow function
const sayHello = (name) => `Hello ${name}!`

console.log(sayHello("Hagrid"))
console.log(sayHello("Luna"))