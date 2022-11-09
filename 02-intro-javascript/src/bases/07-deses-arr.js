const personajes = ["Gohan", "Vegueta","Trunks"];

const [ , , p3 ] = personajes;
console.log( p3 );

const retornarArreglo =  () => {
    return ["ABC", 123];
}

const [ letras, numeros ] = retornarArreglo();
console.log( letras, numeros );

const useState = ( valor ) => {
    return [valor, () => {console.log("Hola mundo")}];
}

const [ nombre, setNombre ] = usestate( 'Gohan' );

console.log( nombre );
setNombre();