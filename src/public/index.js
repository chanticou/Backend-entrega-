// fetch('/pets').then(result=>result.json()).then(json=>{
//     pets= json.payload;
//     let container = document.getElementById('pet-container')
//     pets.forEach(pet=>{
//         let card
//     })
// })



let form= document.getElementById('petForm')
// let petForms= document.getElementById('petsForm')


const handleSubmit=(evt, form, route)=>{
    evt.preventDefault()
    let formData = new FormData(form)
    fetch(route,{
        method:"POST",
        body:formData
    }).then(res=>res.json()).then(json=>console.log(json))
    form.reset()
}

form.addEventListener('submit',(e)=>handleSubmit(e,e.target,'/pets'))

