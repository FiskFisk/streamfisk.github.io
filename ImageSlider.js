let slideIndex = 1;
let slideshowSpeed = 5000; // Default speed in milliseconds (5 seconds)

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
}

function changeSpeed() {
    const speedInput = document.getElementById("speed");
    const newSpeed = speedInput.value;
    slideshowSpeed = newSpeed * 1000; // Convert seconds to milliseconds
    clearInterval(slideshowInterval);
    slideshowInterval = setInterval(showSlides, slideshowSpeed);
}

let slideshowInterval = setInterval(showSlides, slideshowSpeed);

document.addEventListener("DOMContentLoaded", function () {
    showSlides();

    document.querySelector(".speed-controls button").addEventListener("click", function () {
        changeSpeed();
    });
});
