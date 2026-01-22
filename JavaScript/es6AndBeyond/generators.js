function* getNum(){
    let num=Math.floor(Math.random()*100)+1;
    let num1=Math.floor(Math.random()*100)+1;
    let num2=Math.floor(Math.random()*100)+1;
    yield new Promise((resolve,reject)=>{
        if(num<10){
            reject();
        }
        setTimeout(()=>{
            console.log(num)
            resolve();
        },1000)
    })
    yield new Promise((resolve,reject)=>{
        if(num1<10){
            reject();
        }
        setTimeout(()=>{
            console.log(num1)
            resolve();
        },2000)
    })
    yield new Promise((resolve,reject)=>{
        if(num2<10){
            reject();
        }
        setTimeout(()=>{
            console.log(num2)
            resolve();
        },3000)
    })
}

let num=getNum();

num.next();
num.next();
num.next();
