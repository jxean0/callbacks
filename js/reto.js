//ejercicio 1
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function operar(a, b, callback) {
  return callback(a, b);
}

console.log(operar(5, 3, sumar));  
console.log(operar(5, 3, restar));    
console.log(operar(5, 3, multiplicar)); 

//ejercicio 2
const nombres = ["Ana", "Luis", "Sofía", "Carlos"];

nombres.forEach((nombre, index) => {
  console.log((index + 1) + ". " + nombre);
});

//ejercicio 3
const precios = [100, 200, 300];

const preciosConIVA = precios.map(precio => precio * 1.19);

console.log(preciosConIVA);

//ejercicio 4
const edades = [12, 18, 20, 15, 30, 8];

const mayores = edades.filter(edad => edad >= 18);

console.log(mayores); 

//ejercicio 5
const productos = [
  { id: 1, nombre: "mouse", precio: 50000 },
  { id: 2, nombre: "teclado", precio: 150000 },
  { id: 3, nombre: "monitor", precio: 900000 }
];

const teclado = productos.find(p => p.nombre === "teclado");
const caro = productos.find(p => p.precio > 100000);

console.log(teclado);
console.log(caro);

//reto final
const estudiantes = [
  { nombre: "Ana", nota: 4.5 },
  { nombre: "Luis", nota: 3.2 },
  { nombre: "Carlos", nota: 2.8 },
  { nombre: "Sofía", nota: 4.8 },
  { nombre: "María", nota: 3.9 }
];

const nombres1 = estudiantes.map(est => est.nombre);

console.log(nombres1);
const aprobados = estudiantes.filter(est => est.nota >= 3);
console.log(aprobados);
const excelente = estudiantes.find(est => est.nota >= 4.5);
console.log(excelente);
