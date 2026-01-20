const URL='https://api.api-ninjas.com/v2/randomquotes'

async function getData(){
    try{
        let data=await fetch(URL);
        console.log(data);
    }catch(err){
        console.log(err);
    }
}