const colors = new Set()

colors.add('Rojo')
colors.add('Verde')
colors.add('Azul')
colors.add('Rojo')

console.log('Colores en el Set:', colors)

const colorToCheck = 'Verde'
console.log(`¿${colorToCheck} existe en el Set?${colors.has(colorToCheck)}`)