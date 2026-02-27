document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;

            // Toggle active class
            item.classList.toggle('active');

            // Close other items (optional)
            /*
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            */
        });
    });

    // Smooth Scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for sticky header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple scroll animation for reveal
    const revealElements = document.querySelectorAll('.step-card, .project-card, .req-section');

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.8;

        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    /* Initial styles for reveal elements removed to stay visible if JS fails */
    revealElements.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    });

    // Image Toggler
    const toggleBtns = document.querySelectorAll('.toggle-view');

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.project-card');
            const images = card.querySelectorAll('.project-image img');
            const isShowingBuild = images[0].classList.contains('active');

            if (isShowingBuild) {
                images[0].classList.remove('active');
                images[1].classList.add('active');
                btn.textContent = 'View Build';
            } else {
                images[1].classList.remove('active');
                images[0].classList.add('active');
                btn.textContent = 'View Design';
            }
        });
    });
});
