const images = [
    "./images/slider-1.jpg",
    "./images/slider-2.jpg",
    "./images/slider-3.jpg"
];

let img = document.querySelector('.home-slider img');
let num = 0;

img.src = images[num]; // Initial image
img.classList.add('active'); // Make the first image active

setInterval(() => {
    // Fade out the current image
    img.classList.remove('active');

    // Wait for the fade-out effect to complete (1 second)
    setTimeout(() => {
        if (num < images.length - 1) {
            num++;
        } else {
            num = 0;
        }

        // Change the image source
        img.src = images[num];

        // Fade in the new image
        img.classList.add('active');
    }, 1500); // This delay matches the transition duration in the CSS
}, 5000); // Change image every 5 seconds
