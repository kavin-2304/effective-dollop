setTimeout(()=>{
    console.log("Hi there how are you");
},4000);


//set Interval
let id = setInterval(()=>{
    console.log("hello world");
},3000);


setTimeout(()=>{
    clearInterval(id);
},7000);