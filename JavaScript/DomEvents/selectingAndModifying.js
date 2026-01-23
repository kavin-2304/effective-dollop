let btn=document.querySelector(".btn");
let box=document.querySelector(".box");

btn.addEventListener("click",()=>{
    let red=Math.floor(Math.random()*255)+1;
    let blue=Math.floor(Math.random()*255)+1;
    let green=Math.floor(Math.random()*255)+1;
    box.setAttribute("style",`background-color:rgb(${red},${green},${blue}`);
})