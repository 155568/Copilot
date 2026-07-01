document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
Cloud_StorageAQAAABUAAAABABAAAgMAEAA8AAAABAAQAAoAAAA=Cloud_Storage
    mobileMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            formStatus.textContent = 'Please fill in all fields.';
            formStatus.style.color = 'red';
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            formStatus.textContent = 'Please enter a valid email address.';
            formStatus.style.color = 'red';
            return;
        }

        formStatus.textContent = 'Sending...';
        formStatus.style.color = 'blue';

        setTimeout(() => {
            formStatus.textContent = 'Message sent successfully!';
            formStatus.style.color = 'green';
            contactForm.reset();
        }, 1500);
    });
});
