
describe('pruebas en <DemoComponent />',() => {

test(' es ta prueba no debe fallar y lo sabes', () =>{
    // inicializacion
    const message1 = 'Hola Mundo';

    // estimulo
    const message2 = message1.trim();

    //observar comportamiento
   // expect( message1).toBe( message2);

    expect( message1).toBe( message2);


});

});