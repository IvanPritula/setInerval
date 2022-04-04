/*
Используя setInterval и DOM сделать слайд-шоу картинок на странице.
Каждые 5 секунд сменят картинку на странице.

* менять картинки по кругу.
*/ 
let images = document.querySelectorAll('#slider img');
let i = 0;
function nextImg(){
    if(i === images.length - 1){
        images[1].style.display = 'none';
        i = 0;
        images[0].style.display = 'block';
    }else{
        simages[i].style.display = 'none';
        images[i+1].style.display = 'block';
        i++;
    }
}
setInterval(nextImg,2000);