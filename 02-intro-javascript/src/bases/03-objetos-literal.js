const persona ={
    nombre:"Victor",
    apellido:"López",
    edad:"20",
    direccion:{
        ciudad:"Coatzacoalcos",
        zip:12324,
        lat:1913,
        lng: 2345
    }
};

//console.table( persona );
console.log( persona );

const persona2={...persona } ;
persona2.nombre ="Liam";

console.log( persona2 );