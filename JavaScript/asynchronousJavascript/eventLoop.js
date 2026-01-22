console.log("Starting randomn Number");

function getList(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },2000);
    })
}

getList()
.then(()=>{
    console.log("Ending the random number");
}).catch((err)=>{
    console.log(err);
})