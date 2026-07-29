// Select all gallery images
const galleryImages = document.querySelectorAll(".gallery .image");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

let currentIndex = 0;

// Open Lightbox
function openLightbox(image) {
    lightbox.style.display = "flex";
    lightboxImg.src = image.src;

    galleryImages.forEach((item, index) => {
        if (item.querySelector("img").src === image.src) {
            currentIndex = index;
        }
    });
}

// Close Lightbox
function closeLightbox() {
    lightbox.style.display = "none";
}

// Next / Previous Image
function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1;
    }

    if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }

    lightboxImg.src = galleryImages[currentIndex].querySelector("img").src;
}

// Filter Images
function filterImages(category) {

    const images = document.querySelectorAll(".gallery .image");
    const buttons = document.querySelectorAll(".filter-buttons button");

    // Active button
    buttons.forEach(button => {
        button.classList.remove("active");
    });

    event.target.classList.add("active");

    // Show/Hide images
    images.forEach(image => {

        if (category === "all") {
            image.style.display = "block";
        }
        else if (image.classList.contains(category)) {
            image.style.display = "block";
        }
        else {
            image.style.display = "none";
        }

    });
}

// Close lightbox when clicking outside the image
lightbox.addEventListener("click", function (e) {

    if (e.target === lightbox) {
        closeLightbox();
    }

});

// Keyboard Support
document.addEventListener("keydown", function (e) {

    if (lightbox.style.display === "flex") {

        if (e.key === "ArrowRight") {
            changeImage(1);
        }

        if (e.key === "ArrowLeft") {
            changeImage(-1);
        }

        if (e.key === "Escape") {
            closeLightbox();
        }

    }

});