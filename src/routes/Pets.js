const express = require('express')
// const { send } = require('process')
const router = express.Router()
const PetsManager = require('../Managers/pets')
const uploader = require('../services/uploader')

const petService = new PetsManager()

//ENVIO TODO MI ARRAY DE OBJETOS
router.get('/', (req,res)=>{
    petService.findAllPets().then(result=>res.send(result))
    petService.findAllPets().then(result=>console.log(result))
})

router.post('/', uploader.single('file') ,(req, res)=>{
    let user = req.body
    //este campo nos lo agrega multer cuando subimos una imagen
    let file = req.file
    //Si no se argo bien podria devolver un error
    if(!file) return res.status(500).send({error:"Couldn't upload file"})
    
    //req.protocol => desde que protocolo lo voy a mandar a llamar (htpp, htpps), + :// + host (google.com)=>req.hostname + puerto servidor +img+  el archivo que subio multer
    user.thumbnail = req.protocol + "://" + req.hostname + ":8080/img/"+file.filename
     petService.addPet(user).then(result=>res.send(result))
    console.log(user)
})

module.exports=router;