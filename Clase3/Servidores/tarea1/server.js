const http = require('http');

const server = http.createServer((request, response)=>{
    const fechaActual = new Date();
    const hours = fechaActual.getHours();
    console.log(hours)
    if(hours>6 && hours<12){
        response.end("Buen dia")
    } else if(hours>12 && hours<20){
        response.end("buenas tardes")
    } else {
        response.end("buenas noches")
    }
})

server.listen(8080, ()=>{
    console.log("server listening on port 8080")
})