const deadpool = {
  nombre: "Wade",
  apellido: "Winston",
  poder: "Regeneracion",
  getNombre() {
    return `${this.nombre} ${this.apellido} ${this.poder}`;
  },
};

const { nombre, apellido, poder } = deadpool;

//console.log(nombre, apellido, poder);

//desestructuracion en funciones

function imprimirHeroe({ nombre, apellido, poder, edad = 0 }) {
  console.log(nombre, apellido, poder, edad);
}

//imprimirHeroe(deadpool);

//desestructuracion en arreglos

const heroes = ["deadpool", "superman", "batman"];

const [h1, h2, h3] = heroes; //const [ , , h3 ] = heroes

console.log(h1, h2, h3); //console.log(h3);
