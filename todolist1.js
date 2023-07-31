function todoPush(input){
    let div=document.createElement('div')
    let teks=`<h3 class='judul'> ${input}</h3> <p onclick='deleteTodo()' class='delete'> hapus </p>
    <p onclick='upTodo()' class='up'>Selesai</p>`
    div.setAttribute('class','items')
    div.innerHTML=teks
    document.querySelector('.contentTodo').appendChild(div)
}

let button=document.querySelector('.pushTodo')
button.addEventListener('click',function(){
    let todoValue=document.querySelector('.valueTodo')
    todoPush(todoValue.value)
})

function deleteTodo(){
    let p=document.querySelectorAll('.items .delete')
    p.forEach(tagP=>{
        tagP.addEventListener('click',function(){
            let parent=tagP.parentElement
            parent.remove()
        })
    })
}

function upTodo(){
    let p=document.querySelectorAll('.items .up')
    p.forEach(tagP=>{
        tagP.addEventListener('click',function(){
            let parent=tagP.parentElement
            document.querySelector('.listTodo').appendChild(parent)
        })
    })
}