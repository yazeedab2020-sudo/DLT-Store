document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Logic
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('close-menu-btn');

    if (menuBtn && mobileMenu && closeBtn) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden'); // Show menu
            mobileMenu.classList.add('flex'); // Ensure it uses flex layout
        });

        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.add('hidden'); // Hide menu
            mobileMenu.classList.remove('flex');
        });
    }
});
