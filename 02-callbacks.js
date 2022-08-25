const getUsuarioById = (id, callback) => {
    const user = {
        id,
        nombre: 'Juan'
    }

    setTimeout( () => {
        callback(user);
    }, 1500);
};

getUsuarioById(1, ( usuario ) => {
    console.log( usuario.nombre.toUpperCase() );
});

console.log("==============================");

getUsuarioById(2, (usuario) => {
    console.log(`Bienvenido ${usuario.nombre}`);
}) 


