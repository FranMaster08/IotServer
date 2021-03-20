const express=require('express')
const Route=express.Router()

Route.get('/',(req,res)=>{
    res.render('index.html')
})


Route.get('/home',(req,res)=>{
    res.status(200).json({})
})


module.exports=Route

