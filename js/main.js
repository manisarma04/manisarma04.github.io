document.addEventListener('DOMContentLoaded', function() {
    // Typing Animation
    if (document.querySelector('.typing-text')) {
        const typed = new Typed('.typing-text', {
            strings: ['Junior Web Developer', 'Frontend Developer', 'UI Enthusiast'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true
        });
    }

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            }
        });
    });

    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });

    // Set current year in footer
    const currentYear = new Date().getFullYear();
    document.querySelector('.current-year').textContent = currentYear;

    // Download CV button effect
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
                // Here you would typically trigger the download
                // window.location.href = 'path-to-your-cv.pdf';
            }, 300);
        });
    }

    // Send button animation
    const sendBtn = document.querySelector('.send-btn');
    if (sendBtn) {
        sendBtn.addEventListener('click', function(e) {
            e.preventDefault();
            this.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';
            setTimeout(() => {
                this.innerHTML = 'Message Sent <i class="fas fa-check ms-2"></i>';
                this.classList.add('btn-success');
                this.classList.remove('btn-primary');
            }, 1500);
        });
    }
});

//disable right click
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('Right-click is disabled on this page.');
});