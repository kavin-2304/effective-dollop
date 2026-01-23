async function getQuote() {
    let res = await fetch("https://dummyjson.com/quotes/1");
    let data = await res.json();
    return data.quote;
}
let quote = getQuote();
console.log(quote);     

let p=document.querySelector(".text");
p.innerText=quote;