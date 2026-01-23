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
})

list.addEventListener("click",(event)=>{
    if(event.target.nodeName=="BUTTON"){
        let listItem = event.target.parentElement
        listItem.remove();
    }
})
