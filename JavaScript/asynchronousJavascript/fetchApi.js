const URL="https://dog.ceo/api/breeds/image/random";
let dogImg = document.getElementsByClassName("dogImage");

async function getImage(){
    try {
    const response = await fetch(URL);          
    const data = await response.json();          
    const imageURL = data.message;              

    dogImg.src = imageURL;                   
    dogImg.alt = "DOG IMAGE";
  } catch (err) {
    console.log(err);
  }
}

getImage();