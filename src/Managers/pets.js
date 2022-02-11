//MODULO EXTERNO YA PRE PROGRAMADO
const fs = require('fs') 

//METODO MAS IMPORTANTE DE UNA BASE DE DATOS => ENCONTRAR A LOS USUARIOS

//Simulacro base de datos
// const user=[{
//     id:''                   (unique)  
//     name:'Alan Carrillo', (requiered)
//     speciality: 'Biologia', (requiered)
//     available:true,
//     telephone:1567245679
// }
// ]
const pathPets= __dirname + '/../files/pets'




//EL USERMANAGER VA A TENER TODOS LOS METODOS PARA GETIONAR USUARIOS  Y YO LOS VOY A LLAMAR DESDE EL IDNEX
class PetsManager{
    addPet = async (user) =>{
        //PRIMERO VOY A VALIDAR
        if(!user.name ) return {status:'error', error:'missing data'}

        try{
            if(fs.existsSync(pathPets)){
                //le pregunto a mi fs si existen usuarios en la ruta que le estoy pasando
                //En caso de que el archivo si existe, obtengo la informacion
                let data = await fs.promises.readFile(pathPets, 'utf-8', null, 3)
                let users= JSON.parse(data)
                //la sintaxis a continuacion, te trae el ultio elemento agregado del arreglo
                let id= users[users.length-1].id +1
                user.id=id
                users.push(user)
                await fs.promises.writeFile(pathPets, JSON.stringify(users, null, 3))
                return{status:'success', message:'New pet created',newUser:users}
                   
            }else{
                //Si no existen le voy a asignar el id N1 al primero usuario
                user.id=1
                await fs.promises.writeFile(pathPets, JSON.stringify([user], null, 3))
                return {status:'success' , message:'Pet created'}
            }

        }catch(error){
             console.log(error)
            return {status:'error', message:error}
            
        }
    }

    findAllPets= async ()=>{
        if(fs.existsSync(pathPets)){
            let data= await fs.promises.readFile(pathPets, 'utf-8', null, 3)
            let users= JSON.parse(data)

            return{
                message:'Succes',
                findUsers:users
            }
        }
    }


    findUser= async (id)=> {
        if(fs.existsSync(pathPets)){
            let data= await fs.promises.readFile(pathPets, 'utf-8', null, 3)
            let users= JSON.parse(data)
            let find=users.find(user=>user.id===id)
            return {
                message:'User find',
                user:find
            }
        }else{
            return{
                error:'error',
                message:'User not found'
            }
        }
    }


    updateUsers= async(id,updateNewUser)=>{
        if(fs.existsSync(pathPets)){
            let data= await fs.promises.readFile(pathPets,'utf-8',null,3)
            let users= JSON.parse(data)

            let newUser =users.map((user)=>{
                if(user.id === id){
                    return updateNewUser
                }else{
                    return user
                }
            })

            await fs.promises.writeFile(pathPets, JSON.stringify(newUser,null,3))
            return{ status:'succes',
                    message:'Update user'}

        }
    }

    deleteUser = async (id)=>{
        if(fs.existsSync(pathPets)){
            let data= await fs.promises.readFile(pathPets, 'utf-8', null, 3)
            let users= JSON.parse(data)

            let deleteUserFilter= users.filter((user => user.id!==id))

            await fs.promises.writeFile(pathPets, JSON.stringify(deleteUserFilter,null,3))
            return {
                status:'succes',
                message:'Delete User'
            }            
        }
    }


    

    randomUser= async()=>{
        let resultRandomUser;
        if(fs.existsSync(pathPets)){
            let data= await fs.promises.readFile(pathPets, 'utf-8', null, 3)
            let users= JSON.parse(data)
          
            let mathRandom = Math.floor(Math.random()*(users.length))
            // console.log(mathRandom)

            resultRandomUser=users[mathRandom-1]

            // console.log(resultRandomUser)
            // await fs.promises.writeFile(pathPets, JSON.stringify(resultRandomUser))

            
        }
        return resultRandomUser;
    }   
   

    createTXT= async ()=>{
        if(fs.existsSync(pathUsers)){
            let data= await fs.promises.readFile(pathUsers, 'utf-8', null, 3)
            let users= JSON.parse(data)
        let createTxt = await fs.promises.writeFile('productos.txt', JSON.stringify(users, null, 3) )
        console.log(createTxt)
      
        }
    }
}

module.exports = PetsManager;












































// const express = require('express')

// const router = express.Router()

// let pets=[]

// router.get('/',(req,res)=>{
//     res.send({pets:pets})
// })


// router.post('/', (req,res)=>{
//     let pet = req.body
//     pets.push(pet)
//     res.send({message:'succes, pet created'})
//     console.log(pet)
// })

// module.exports= router;