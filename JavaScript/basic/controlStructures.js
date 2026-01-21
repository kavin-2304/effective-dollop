let num1=102;
let num2=200;

if(num1>num2){
    console.log(`${num1} is greater than ${num2}`);
}else{
    console.log(`${num1} is not greater than ${num2}`);
}

for(let i=0;i<=5;i++){
    console.log(`This is iteration number :${i}`);
}

let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = "Unknown day";
}
console.log(day); 
