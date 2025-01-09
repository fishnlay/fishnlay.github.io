// Select all images and the full-screen container
const images = document.querySelectorAll('.column img');
const fullscreen = document.getElementById('fullscreen');
const fullscreenImg = fullscreen.querySelector('img');
const closeBtn = document.getElementById('close');

// Add click event to each image
images.forEach(img => {
    img.addEventListener('click', () => {
        fullscreenImg.src = img.src; // Set the full-screen image source
        fullscreen.style.display = 'flex'; // Show the full-screen container
    });
});

// Add click event to the close button
closeBtn.addEventListener('click', () => {
    fullscreen.style.display = 'none'; // Hide the full-screen container
});

// Close the full-screen view when clicking outside the image
fullscreen.addEventListener('click', (e) => {
    if (e.target === fullscreen) {
        fullscreen.style.display = 'none';
    }
});