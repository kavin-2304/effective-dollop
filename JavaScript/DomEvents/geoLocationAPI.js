let btn=document.querySelector(".btn");
let p=document.querySelector(".text");

function getLocation(){
    if(!navigator.geolocation){
        p.innerText="your browser dosent support geolocation"
    }
    return ;
}

navigator.geolocation.getCurrentPosition((position)=>{
    let lat=position.coords.latitude;
    let lng=position.coords.longitude;

    p.innerText=`your latitude is :${lat} and you longitutde is :${lng}`;
})

btn.addEventListener("click",()=>{
    getLocation();
})