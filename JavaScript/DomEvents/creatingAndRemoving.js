let input = document.querySelector(".inp");
let btn=document.querySelector(".btn");
let list=document.querySelector(".list");

btn.addEventListener("click",()=>{
    const li=document.createElement("li");
    const button=document.createElement("button");
    button.innerText="Delete";
    button.classList.add("delBtn");
    li.innerText=input.value;
    list.appendChild(li);
    li.appendChild(button);

    button.addEventListener("click",()=>{
        li.remove();    
    })
})