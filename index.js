
const list = document.querySelectorAll('.card')
list.forEach((list)=>{
    list.addEventListener('click',(e)=>{
        console.log(e.target)
        e.target.remove()
    })
})