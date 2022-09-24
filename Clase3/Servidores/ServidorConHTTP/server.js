const http = require('http');

//crear servidor con modulo http

const server = http.createServer((request, response)=>{
    console.log("el cliente solicito algo");
    response.end("Hola desde el servidor, su peticion se recibio")

})

//levantar o ejecutar el servidor: (ponerlo en linea para que todos puedan usarlo)

server.listen(8080, ()=>{
    console.log("server listening on port 8080")
})