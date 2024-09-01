const bar = document.querySelector(".icon");
const nav = document.querySelector(".nav");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body")

bar.addEventListener("click",function(){
    nav.classList.add("active");
    overlay.classList.add("active");
    body.style.overflowY = "hidden"
    
})
close.addEventListener("click",function(){
    nav.classList.remove("active");
    
    overlay.classList.remove("active");
    body.style.overflowY = "visible"
})
overlay.addEventListener("click",function(){
    nav.classList.remove("active");
    this.classList.remove("active");
    body.style.overflowY = "visible" 
})