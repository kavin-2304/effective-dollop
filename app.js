const URL='https://cataas.com'

async function getData(){
    try{
        let data=await fetch(URL);
        console.log(data);
    }catch(err){
        console.log(err);
    }
}