import './less/index.less'

// Your code goes here!

const headerNav = document.querySelector(".nav")
const navLInk = document.querySelectorAll(".nav a")

headerNav.addEventListener("mouseover", (event)=> {
    event.target.style.color = "blue"
})


navLInk.forEach(link => {
    link.addEventListener("click", (e)=> {
        e.preventDefault()
    })
})


document.addEventListener("dblclick", (e)=> {
    e.target.style.color = "pink"
    })


document.addEventListener("keydown", (e)=> {
alert(e.key)
})


document.addEventListener("wheel", ()=>{
navLInk.forEach(link => link.style.color = "green")
})


window.addEventListener("resize", ()=> {
    alert("resizing")
})


document.addEventListener("select", (e)=> {
e.target.style.color = "purple"
})


window.addEventListener("load", ()=> {
    alert("window loading alert")
})


document.addEventListener("scroll", ()=>{
    navLInk[0].style.color = "red"  
})