const express=require('express')

const Route=express.Router()
const rutaNavegacion=require('./navigation.routes')
const rutaUsuarios=require('./usuarios.routes')


Route.use('/',require('./home.routes'))
Route.use('/api',rutaUsuarios)
Route.use('/navigation',rutaNavegacion)

module.exports=Route