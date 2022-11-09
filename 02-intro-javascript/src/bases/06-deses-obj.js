const persona = {
    nombre: "Victor",
    edad: 20,
    clave: "Viclpz",
    rango: "Teniente"
}

// const { edad, clave, nombre } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const context = ({ clave, nombre, edad, rango = 'capitan'}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: 12.3232
        }
    }
}

const {nombreClave, anios, latlng} = context(persona);
const { lat, lng } = latlng;

console.log(nombreClave, anios);
console.log( lat, lng );