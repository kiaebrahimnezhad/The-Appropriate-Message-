let myName = window.prompt("سلام دوست من ، اسمت چیه!؟");
const date = new Date();
const myHour = date.getHours();

let nameBox = document.getElementById('nameOf');
let imageBox = document.getElementById('myImg');

if (myHour >= 5 && myHour <=11 ) {
    nameBox.innerText = myName + ', صبح شما بخیر'
    imageBox.setAttribute('src','assets/sobh.jpg')
} else if (myHour > 11 && myHour <16 ){
    nameBox.innerText = myName + ', ظهر شما بخیر'
    imageBox.setAttribute('src','assets/zohr.jpg')
} else if (myHour >= 16  && myHour <=19 ){
    nameBox.innerText = myName + ', عصر شما بخیر'
    imageBox.setAttribute('src','assets/asr.jpg')
} else {
    nameBox.innerText = myName + ', شب شما بخیر'
    imageBox.setAttribute('src','assets/shab.jpg')
}