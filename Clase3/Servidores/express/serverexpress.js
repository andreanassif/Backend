const express = require("express");

//crear el server

const app = express();

// configurar rutas
app.get("/", (request, response)=>{
    response.send("<h1 style='color: blue'>Bienvenidos al servidor express</h1>")
})

let visitas = 0;

app.get("/visitas", (req, res)=>{
    visitas++;
    res.send(`la cantidad de visitas es ${visitas}`)
})

app. get("/andrea", (req, res)=>{
    res.send("Hola Andrea")
})

//levantar el server

app.listen(8080, ()=>{
    console.log("server express activo on port 8080")
})