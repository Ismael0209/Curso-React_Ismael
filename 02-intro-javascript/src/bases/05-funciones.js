//FUNCIONES EN JS

//const saludar = function saludar(nombre) {
//    return `Hola, ${ nombre }`;

//}


const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => 'Hola mundo';

//saludar = 30;

//console.log(saludar('Victor'));

console.log(saludar2("Victor"));
console.log(saludar3("Liam"));
console.log(saludar4());

const getUser = () => ({
    
        uid: 'ABC123',
        username: 'Viclpz01'
    });

const user = getUser();
console.log(user);


//Tarea
//1. Transforma a una funcion flecha, retornar un objeto implicito

const getUsuarioActivo = (nombre) => ({
        uid: 'abcde',
        username: nombre,
    });
        


const usuarioActivo = getUsuarioActivo('Viclpz01');
console.log( usuarioActivo )