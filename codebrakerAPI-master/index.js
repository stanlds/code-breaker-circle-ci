'use strict'

var app = require('./app');
var port = 4200;

//Crear servidor y ponerme a escuchar peticiones http
app.listen(port, ()=>{
        console.log('Servidor corriendo en http://localhost:'+port);
})
