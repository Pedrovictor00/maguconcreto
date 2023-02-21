window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
    });

let menu = document.querySelector('#menu-bars');
let header = document.querySelector('aside');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}
 
windows.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 650}px)` ;
}

setInterval(carrossel, 3000);