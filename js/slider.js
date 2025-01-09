const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const closeModal = document.getElementById('closeModal');

    // Add click event to all images in the galleries
    document.querySelectorAll('.gallery img').forEach(img => {
      img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = img.src;
      });
    });

    // Close the modal when the close button is clicked
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    // Close the modal when clicking outside the image
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });