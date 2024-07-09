var pop=document.querySelector(".pop")
var lay=document.querySelector(".lay")
var plus=document.querySelector(".plus")

plus.addEventListener("click",function(){
    pop.style.display="block"
    lay.style.display="block"
})


var bookdelete=document.querySelector(".book-delete")

bookdelete.addEventListener("click",function(event){
    event.preventDefault()
     pop.style.display="none"
    lay.style.display="none"
})


var main=document.querySelector(".main")
var title=document.querySelector(".title")
var author=document.querySelector(".author")
var des=document.querySelector(".des")
var bookadd=document.querySelector(".book-add")

bookadd.addEventListener("click",function(event){
    event.preventDefault()

    var div=document.createElement("div")
    div.setAttribute("class", "book")
    div.innerHTML=`<h2> ${title.value} </h2>
        <h3>${author.value}</h3>
        <p>${des.value}</p>
        <button onclick=final(event) class="main-delete">Delete</button>`
        main.append(div)

         pop.style.display="none"
         lay.style.display="none"
})
function final(event){
    event.target.parentElement.remove()
}


