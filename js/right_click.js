document.addEventListener('DOMContentLoaded', () => {
    const img = document.getElementById('myImage');
    img.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      alert('Right-click is disabled on this image.');
    });
  });
  