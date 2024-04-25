// Escribe tu código aquí:
const personas = new Map()

personas.set('Blanca', 46)
personas.set('Angel', 45)
personas.set('Alejandro', 4)
personas.set('Daniela', 10)

console.log('Edad de Alejandro es: ', personas.get('Alejandro'))

const personToRemove = 'Angel'
personas.delete(personToRemove)

console.log('Personas en el Map despues de eliminar a Angel:', personas)