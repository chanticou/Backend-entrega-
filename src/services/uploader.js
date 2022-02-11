const multer = require('multer')


//STORAGE
//Configuracion de almacenamiento
let storage = multer.diskStorage({
    destination:function(req, res, cb){
        cb(null , __dirname + '/../public/img' )
    },
    filename:function(req,file,cb){
        cb(null, Date.now() + '-' + file.originalname)
    }
})


let uploader = multer({storage:storage})

module.exports = uploader


// app.post('/upload', uploader.single('file') , (res,req)=>{
//     // let file =req.file
//     res.send({message:'ok'})
// })