// Escribe tu código aquí:
const person = {
    name : 'Jhon',
    greet : function () {
      console.log(`Hola, soy ${this.name}`)
    }
} 
person.greet()

const person1= {
    name:'Marta',
    greet: () => { 
        console.log(`Hola, soy ${this.name}`)
    }
}
person1.greet()