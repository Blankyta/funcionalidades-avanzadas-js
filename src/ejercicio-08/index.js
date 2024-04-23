// Escribe tu código aquí:
function sum(...num) {
    return num.reduce((total, numbe) => total + numbe, 0)
}
const result = sum(2,5,7,9)