function saveToDb(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("Good Internet Speed");
        }else{
            reject("Weak Connection");
        };
    })
}

saveToDb("HelloWorld")
.then(()=>{
    console.log("Data Saved");
}).catch(()=>{
    console.log("Network Time out");
})