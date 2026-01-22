let URL='https://api.potterdb.com/'

async function getData(){
    try{
        let data =await fetch(URL);
        throw("Some error occured from the services");
    }catch(err){
        console.log(err);
    }
}

getData();