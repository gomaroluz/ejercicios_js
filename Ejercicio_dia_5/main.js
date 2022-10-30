
let valorIngresado;
let arrayDatosIngresados = [];

do {
    valorIngresado = prompt('Ingresa un valor (escribe 0 para salir)', "" );
    console.log(typeof(valorIngresado));
    arrayDatosIngresados.push(parseInt(valorIngresado));}
 while (valorIngresado !=0) 
    arrayDatosIngresados.pop();
    
    console.log(arrayDatosIngresados);

let suma= 0;

for (let i = 0; i < arrayDatosIngresados.length; i++){
    console.log(arrayDatosIngresados[i]);
    suma = suma + arrayDatosIngresados[i]
    console.log(suma);
}
console.log(suma);

//promedio numeroMayor numeroMenor

let promedio = suma / arrayDatosIngresados.length
console.log(promedio);
let numeroMayor = 0;

for (let i = 0; i < arrayDatosIngresados.length; i++){
    if (arrayDatosIngresados[i] > numeroMayor) {
        numeroMayor = arrayDatosIngresados[i];
    }
}

console.log(numeroMayor);

let numeroMenor = arrayDatosIngresados[0];
for (let i = 0; i < arrayDatosIngresados.length; i++){
    if (arrayDatosIngresados[i] < numeroMenor) {
        numeroMenor = arrayDatosIngresados[i];
    }
}

console.log(numeroMenor);
