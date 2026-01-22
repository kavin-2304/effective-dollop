// function saveToDb(success,failure){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed>=4){
//         success();
//     }else{
//         failure();
//     }
// }

// saveToDb(
//     ()=>{
//         console.log("Success : Data 1 Saved");
//         saveToDb(
//             ()=>{
//                 console.log("Success : Data 2 Saved");
//                 saveToDb(
//                     ()=>{
//                         console.log("Success : Data 3 Saved");
//                     },
//                     ()=>{
//                         console.log("weak connection");
//                     }
//                 )
//             },
//             ()=>{
//                 console.log("weak Connection");
//             }
//         )
//     },
//     ()=>{
//         console.log("Failure : Data not saved");
//     }
// )

//optimized verson uisng promises
function saveToDb(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve();
        }else{
            reject("Weak Connection");
        };
    })
}

saveToDb()
.then(()=>{
    console.log("Data 1 Saved");
    return saveToDb();
})
.then(()=>{
    console.log("Data 2 Saved");
    return saveToDb();
})
.then(()=>{
    console.log("Data 3 Saved");
})
.catch(()=>{
    console.log("Promise Not Resolved");
})

//async and await
async function greet(){
    return "Hello..!!";
}

greet()
.then((result)=>{
    console.log(result);
    console.log("Promise Resolved");
})
.catch((err)=>{
    console.log(err);
})

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
