const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

//A) nombre separado por comas

/* const numeros = [1, 2, 3];

const numerosPor2 = numeros.map((item)=>item*2)
console.log(numeros)
console.log(numerosPor2) */

const nombres = productos.map((producto)=>producto.nombre);
console.log(nombres)
const nombresProductos = nombres.join(", ")
console.log(nombresProductos)

//B) El precio total

const total = productos.reduce((acc, el)=>acc+el.precio, 0);

console.log(total)

//C) El precio promedio

const promedio = total/productos.length;
console.log(promedio)

//D) El producto con menor precio
//E) El producto con mayor precio
const productosAsc = productos.sort((a,b)=>a.precio>b.precio ? 1 : -1);
const min = productosAsc[0];
const max = productosAsc[productosAsc.length-1];
console.log(min);
console.log(max);

//F) Con los datos de los puntos 1 al 5 crear un objeto y representarlo por consola

