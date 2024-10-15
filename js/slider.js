const images = [
    "./images/slider-1.jpg",
    "./images/slider-2.jpg",
    "./images/slider-3.jpg"
];

let img = document.querySelector('.home-slider img');
let num = 0;

img.src = images[num]; 
img.classList.add('active'); 

setInterval(() => {
    img.classList.remove('active');

    setTimeout(() => {
        if (num < images.length - 1) {
            num++;
        } else {
            num = 0;
        }

        img.src = images[num];
        img.classList.add('active');
    }, 1500); 
}, 7000);
