const express =require('express')
const path=require('path')
const nunjucks=require('nunjucks')
const app =express()


//Configurando el server para leer objetos Json desde el cliente
app.use(express.json())
//Exponemos la carpeta Public al Cliente
app.use(express.static(path.resolve(__dirname,'./public')))

//configuramos el motor de vistas
app.set('view engine')
nunjucks.configure(path.resolve(__dirname,'./views'),{
    autoescape:false,
    express:app
})

//Agregar las rutas

//ejemplo:
// http://localhost:4000/
app.use('/',require('./routes/index.routes'))




module.exports=app