'use strict'

var app = require('./app');
var port = 3900;

//crear servidor y escuchar peticiones http
app.listen(port, () => {
console.log('servidor corriendo en http://localhost:' + port);
})
