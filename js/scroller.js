document.addEventListener('DOMContentLoaded', () => {
    let lastScrollTop = 0; // Stores the last scroll position
    const nav = document.querySelector('nav'); // Select the nav element

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Get current scroll position

        // If scrolling down, hide the nav
        if (scrollTop > lastScrollTop) {
            nav.classList.add('hidden');
        } 
        // If scrolling up, show the nav
        else {
            nav.classList.remove('hidden');
        }

        // Update the last scroll position
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative values
    });
});