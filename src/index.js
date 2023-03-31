import './less/index.less'

// Your code goes here!

const headerNav = document.querySelector(".nav")
const navLInk = document.querySelectorAll(".nav a")
const button = document.querySelector(".btn")

headerNav.addEventListener("mouseover", (event)=> {
    event.target.style.color = "blue"
})


button.addEventListener('mouseenter', (event) => {
    console.log(`changing container background color`)
    event.target.style.backgroundColor = 'yellow'});
  


navLInk.forEach(link => {
    link.addEventListener("click", (event)=> {
        event.preventDefault()
    })
})


document.addEventListener("dblclick", (event)=> {
    event.target.style.color = "pink"
    })


document.addEventListener("keydown", (event)=> {
alert(event.key)
})


document.addEventListener("wheel", ()=>{
navLInk.forEach(link => link.style.color = "green")
})


window.addEventListener("resize", ()=> {
    alert("resizing")
})


document.addEventListener("select", (event)=> {
event.target.style.color = "purple"
})


window.addEventListener("load", ()=> {
    alert("window loading alert")
})


document.addEventListener("scroll", ()=>{
    navLInk[0].style.color = "red"  
})