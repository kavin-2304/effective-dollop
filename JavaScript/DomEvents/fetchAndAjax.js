async function getQuote() {
    let res = await fetch("https://dummyjson.com/quotes/1");
    let data = await res.json();
    return data.quote;
}
let p=document.querySelector(".text");
 async function showQuote(){
    let quote=await getQuote();
    p.innerText=quote;
 }

 showQuote();