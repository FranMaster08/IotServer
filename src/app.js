const express =require('express')
const app =express()
const path=require('path')

//Configurando el server para leer objetos Json desde el cliente
app.use(express.json())
//Exponemos la carpeta Public al Cliente
app.use(express.static(path.resolve(__dirname,'./public')))





module.exports=app