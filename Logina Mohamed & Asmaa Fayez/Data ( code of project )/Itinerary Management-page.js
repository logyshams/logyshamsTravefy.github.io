let currentImageIndex = 0;
const images = document.querySelectorAll('.image-container img');
const totalImages = images.length;
const imageContainer = document.querySelector('.image-container');

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    const offset = -currentImageIndex * 100;
    imageContainer.style.transform = `translateX(${offset}%)`;
}

setInterval(changeImage, 3000);
