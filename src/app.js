
const express = require('express')
const petsRouter= require('./routes/Pets')

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(__dirname + '/public'))
app.use('/pets', petsRouter)

const PORT= 8080

const server = app.listen(PORT, ()=>{console.log(`Listening on ${PORT}`)})















// const express = require('express')
// const petsRoutes= require('../Managers/pets')
// const usersRoutes=require('../Managers/users')
// const multer = require('multer')
// //le vamos a decir a nuestra aplicacion que utilice un json

// const app = express()
// const PORT = 8080
// app.use(express.static('public'))

// const server = app.listen(PORT,()=>{console.log(`Listening on port ${PORT}`)})

// app.use(express.json())

// // app.use('/pets', petsRoutes)
// app.use('/users', usersRoutes)


// //STORAGE
// //Configuracion de almacenamiento
// let storage = multer.diskStorage({
//     destination:function(req, res, cb){
//         cb(null, '../public/img')
//     },
//     filename:function(req,file,cb){
//         cb(null, Date.now() + '-' + file.originalname)
//     }
// })


// let uploader = multer({storage:storage})

// app.post('/upload', uploader.single('file') , (res,req)=>{
//     // let file =req.file
//     res.send({message:'ok'})
// })