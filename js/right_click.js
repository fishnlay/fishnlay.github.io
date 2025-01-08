// Disable right-click for the image
const img = document.getElementById('myImage');
img.addEventListener('contextmenu', (e) => {
    e.preventDefault(); // Prevent the default context menu from appearing
    alert('Right-click is disabled on this image.');
});