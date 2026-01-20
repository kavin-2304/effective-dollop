const URL='http://api.football-data.org/v4/competitions/'

async function getData(){
    try{
        let data=await fetch(URL);
        console.log(data);
    }catch(err){
        console.log(err);
    }
}