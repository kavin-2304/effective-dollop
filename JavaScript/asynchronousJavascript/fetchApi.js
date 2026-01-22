const URL="https://dog.ceo/api/breeds/image/random";
let dogImg = document.getElementsByClassName("dogImage");

async function getImage(){
    try{
        let image=await fetch(URL);
        console.log(image);
        return image.url;
    }catch(err){
        console.log(err);
    }
}

let imageURL=getImage();
console.log(imageURL)

dogImg.src=imageURL;
dogImg.alt="DOG IMAGE";