class Check extends Error{
    constructor(message,field){
        super(message);
        this.name='check';
        this.field=field;
    }
}

function checkNum(){
    let num=Math.floor(Math.random()*100)+1
    if(num<=10){
        throw new Check("The number is less than 4","num");
    }
    console.log(num);
    return "The number is greater than 10";
}

try{
    console.log(checkNum());
}catch(err){
    if(err instanceof Check){
        console.log(`The error is :${err.message}, ${err.field}`);
    }else{
        console.log("Some randomn error occured");
    }    
}