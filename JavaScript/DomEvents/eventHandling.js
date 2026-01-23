let url="https://sv443.net/jokeapi/v2/joke/Any";
let joketext=document.querySelector(".joke")
let btn=document.querySelector(".btn");
let box=document.querySelector(".box");
async function getJoke(){
    try{
        let res=await axios.get(url);
        return {
            j1:res.data.setup,
            j2:res.data.delivery,
        }
    }catch(err){
        console.log(err);
    }
}

btn.addEventListener("click", async () => {
    let joke = await getJoke();   
    console.log(joke);
    joketext.innerText = joke.j1 + " " + joke.j2;
});

box.addEventListener("mouseover",()=>{
    box.classList.add("changeColor");
})