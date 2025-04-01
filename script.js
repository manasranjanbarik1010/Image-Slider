const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg"
];

let index = 0;

const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function showImage(index) {
    slider.src = images[index];
}

// Show the previous image
prevBtn.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
});

// Show the next image
nextBtn.addEventListener("click", () => {
    index = (index + 1) % images.length;
    showImage(index);
});

// Initial image display
showImage(index);
