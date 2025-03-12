const images = [
    
    'https://unsplash.com/photos/a-person-holding-a-blue-card-in-front-of-a-computer-ei910GcMqwM',
    'https://unsplash.com/photos/a-person-holding-a-blue-card-in-front-of-a-computer-ei910GcMqwM',
    'https://unsplash.com/photos/a-person-holding-a-blue-card-in-front-of-a-computer-ei910GcMqwM',
    'https://unsplash.com/photos/a-person-holding-a-blue-card-in-front-of-a-computer-ei910GcMqwM',
    'https://unsplash.com/photos/a-person-holding-a-blue-card-in-front-of-a-computer-ei910GcMqwM',
];

let currentIndex = 0;

const imgElement = document.getElementById('slider-image');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

function updateImage() {
    imgElement.src = images[currentIndex];
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

// Initialize the slider with the first image
updateImage();