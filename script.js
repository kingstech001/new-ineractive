const container = document.querySelector(".container")
const thankscontainer = document.querySelector(".thankscontainer")
const submit = document.getElementById("send")
const number = document.querySelectorAll(".number")
const rating = document.getElementById("rates")

submit.addEventListener("click",() => {
    thankscontainer.classList.remove("hidden")
    container.style.display="none"
})
number.forEach((rate) =>{
    rate.addEventListener("click",()=>{
        rating.innerHTML =rate.innerHTML
    })
})