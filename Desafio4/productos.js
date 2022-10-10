const express = require("express");
const Contenedor = require("../Desafio4/contenedorProductos"); //DB
const productsRouter = express.Router();

//DB
const contenedorProductos = new Contenedor("products.txt");

//rutas
//muestra todos los productos
productsRouter.get("/", async(req, res)=>{
    try {
        const products = await contenedorProductos.getAll();
        console.log(products)
        res.send(products)
    } catch (error) {
        res.status(500).send("Hubo error en el servidor")
    }
})

//muestra el producto segun su id
productsRouter.get("/:id", async(req, res)=>{
    const {id} = req.params;
    const product = await contenedorProductos.getById(parseInt(id));
    if(product){
        res.json({
            message: "producto encontrado",
            product: product
        })
    } else {
        res.json({
            message: "producto no encontrado"
        })
    }
})

//guarda un elemento
productsRouter.post("/", async(req,res)=>{
    //console.log("body", req.body);
    const newProduct = req.body;
    await contenedorProductos.save(newProduct);
    res.json({
        message: `El producto fue guardado`,
        response: products
    })
 })

 //actualiza un elemento
productsRouter.put("/:id", async(req,res)=>{
    const {id} = req.params;
    const actualizacion = req.body;
    const productosAct = await contenedorProductos.putById(parseInt(id),actualizacion);
    res.json({
        message:`El producto con el id ${id} fue actualizado`,
        response: productosAct
    })
})

//elimina el elemento
productsRouter.delete("/:id", async(req,res)=>{
    const {id} = req.params;
    const data = await contenedorProductos.deleteById(parseInt(id))
    //const prod = await contenedorProductos.getById(parseInt(id));
    //console.log(prod);
    //if(prod.length>=0){
    //    const data = await contenedorProductos.deleteById(parseInt(id))
    //    return res.status(202).send(data)
    //} else {
    //    return res.status(404).send("El producto no existe")
   // }
   res.json({
    message:`El producto fue eliminado`,
    response: data
    })
})



//peticion home
productsRouter.get("/home",(req,res)=>{
    res.send("peticion home")
})

module.exports = productsRouter;