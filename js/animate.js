// Scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Initialize scroll animations
    const scrollElements = document.querySelectorAll('.js-scroll');
    
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= 
            (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };
    
    const elementOutofView = (el) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop > (window.innerHeight || document.documentElement.clientHeight)
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
    };
    
    const hideScrollElement = (element) => {
        element.classList.remove('scrolled');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else if (elementOutofView(el)) {
                hideScrollElement(el);
            }
        });
    };
    
    // Initialize on load
    scrollElements.forEach((el) => {
        el.classList.add('opacity-0');
    });
    
    // Listen for scroll events
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // Initial check in case elements are already in view
    handleScrollAnimation();
    
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate__animated');
                
                if (element.classList.contains('fade-in-left')) {
                    element.classList.add('animate__fadeInLeft');
                } else if (element.classList.contains('fade-in-right')) {
                    element.classList.add('animate__fadeInRight');
                } else if (element.classList.contains('fade-in-up')) {
                    element.classList.add('animate__fadeInUp');
                } else if (element.classList.contains('fade-in-down')) {
                    element.classList.add('animate__fadeInDown');
                } else {
                    element.classList.add('animate__fadeIn');
                }
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});