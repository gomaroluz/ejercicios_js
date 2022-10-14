let edadUno;
let edadDos;
//const resultado = document.querySelector(".resultado");
let  textoResultado;
textoResultado = resultado.textContent;


console.log(textoResultado);
console.log(typeof(textoResultado));

let longitudCadena;
longitudCadena = textoResultado.length;

let ultimoCaracter;
ultimoCaracter = textoResultado.charAt(longitudCadena-1);

edadUno = textoResultado.substring(0,2);
edadDos = textoResultado.substring(2,4);

edadUno = parseInt(edadUno);
edadDos = parseInt(edadDos);


const plantilla = `<div>La edad uno es ${edadUno}<div>
<div>La edad dos es ${edadDos}</div>`

resultado.innerHTML = plantilla;

