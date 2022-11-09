const nombre = "Victor";
const apellido = "Lopez";

//constante nombreCompleto = nombre + "" + apellido;
const nombreCompleto = `${nombre} ${apellido} `;

console.log(nombreCompleto);

function getSaudo(nombre){
    return 'Hola Mundo soy'+nombre;
}

console.log(`Este es un texto:${getSaudo(nombre)}` )