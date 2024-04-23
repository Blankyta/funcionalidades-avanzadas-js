// Escribe tu código aquí:
const num= [3,8,4,2,1]

num.forEach((num) => {
    console.log(`El numero ${num} es ${num % 2 === 0 ? 'par':'impar'}.`)
})