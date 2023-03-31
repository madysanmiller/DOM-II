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

window.onload = function (event) {
    console.log(`event ${event.type} fired! Ready To Go!`)
    const heading = document.querySelector('h1')
    heading.textContent= 'READY TO GO!'
    console.log(heading)
}

window.addEventListener('copy', () => {
    navigator.clipboard.readText()
    .then(text => {
        heading.textContent += text
    })
})

document.body.addEventListener('click', event => {
    event.target.classList.toggle('mirror')
})

document.body.addEventListener('dblclick', event => {
    event.target.innerHTML = ''
})

window.addEventListener('keydown', event => {
    if (event.key == 6) {
        document.body.innerHTML = '<h1>YOU RAN ORDER 66</h1>'
    }
})

document.body.addEventListener('mousemove', event => {
    const { clientX, clientY } = event
})

const destinations = document.querySelectorAll('.destination')
for (let destination of dsestinations) {
    destination.addEventListener('mouseenter', () => {
        destination.style.fontweight = 'bold'
    })
    destination.addEventListener('mouseleave', () => {
        setTimeout(() => {

        }, 500)
    })
}