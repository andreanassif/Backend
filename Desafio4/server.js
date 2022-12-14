const express = require("express")
const productsRouter = require("./productos");

const app = express();

app.listen(8080, ()=> console.log("server is listening on port 8080"));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use("/api/productos", productsRouter);
