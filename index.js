//requerimos al framework
const express = require("express")

//llamamos a su metodo
const app = express()

//Asignamos un puerto
app.listen("4000",()=>{
  console.log("Conexion en el puerto 4000")  
})

//creamos el metodo http -> le asignamos una ruta y una funcion flecha con (req,res) como parametros
app.get("/",(req,res) => {
    res.send("Mensaje de prueba con metodo GET")
})

app.get("/api-version",(req,res) => {
    res.send({
        author: "Maria Lujan Vaira",
        version: "1.0",
        tech: "Framewor Express"
    })
})