async function getNum(){
    return new Promise((resolve,reject)=>{
        let num=Math.floor(Math.random()*10)+1;
        setTimeout(()=>{
            if(num<3){
                reject("promise Rejected");
            }
            console.log(num);
            resolve();
        },1000);
    })
}


async function demo(){
    await getNum();
    await getNum();
    getNum();
}

demo();