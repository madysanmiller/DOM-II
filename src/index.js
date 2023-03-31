import './less/index.less'

// Your code goes here!

// const headerNav = document.querySelector(".nav")
// const navLInk = document.querySelectorAll(".nav a")
// const button = document.querySelector(".btn")

// headerNav.addEventListener("mouseover", (event)=> {
//     event.target.style.color = "blue"
// })


// button.addEventListener('mouseenter', (event) => {
//     console.log(`changing container background color`)
//     event.target.style.backgroundColor = 'yellow'});
  


// navLInk.forEach(link => {
//     link.addEventListener("click", (event)=> {
//         event.preventDefault()
//     })
// })


// document.addEventListener("dblclick", (event)=> {
//     event.target.style.color = "pink"
//     })


// document.addEventListener("keydown", (event)=> {
// alert(event.key)
// })


// document.addEventListener("wheel", ()=>{
// navLInk.forEach(link => link.style.color = "green")
// })


// window.addEventListener("resize", ()=> {
//     alert("resizing")
// })


// document.addEventListener("select", (event)=> {
// event.target.style.color = "purple"
// })


// document.addEventListener("scroll", ()=>{
//     navLInk[0].style.color = "red"  
// })

// window.addEventListener("load", ()=> {
//     alert("window loading alert")
// })

window.onload = function (evt){
    console.log(`event ${evt.type} has fired. It has finished`);
    const heading = document.querySelector('h1')
    heading.textContent = 'Lets go'
    
    
    
    window.addEventListener('copy', () =>{
        navigator.clipboard.readText()
        .then(text =>{
            heading.textContent += text
        })
     })
     window.addEventListener('click', ()=>{
        const subHead = document.querySelector('h2')
        subHead.classList.add('off')
        subHead.style.fontFamily='italic'
        console.log(subHead)
     })
     window.addEventListener('dblclick', ()=>{
        const subHead = document.querySelector('h2')
        subHead.classList.remove('off')
        subHead.style.fontFamily = 'sans-serif'
     })
     window.addEventListener('keydown', evt => {
        if(evt.key === 'Escape'){
            document.body.innerHTML = 'YOU HAVE CALLED ORDER 66'
        }
     })
    //  Annoying one
    document.body.addEventListener('mousemove', evt => {
        const {clientx, xlienty} = evt
        // console.log(evt)
    })

    const destinations = document.querySelectorAll('.destination')
    console.log(destinations)
    for(let destination of destinations){
        destination.addEventListener('mouseenter', evt =>{
            destination.style.fontWeight = 'bold'
        })
        destination.addEventListener('mouseleave', evt =>{
            destination.style.fontWeight = 'intial'
        })
    }
}