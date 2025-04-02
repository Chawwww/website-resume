document.addEventListener('DOMContentLoaded', function() {
    // Animated elements on scroll
    const animatedElements = document.querySelectorAll('.animate');
    const backgroundCards = document.querySelectorAll('.background-card');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const funFactsCards = document.querySelectorAll('.fun-facts-card');
    const contactInfo = document.querySelector('.contact-info');
    
    function checkIfInView() {
        const windowHeight = window.innerHeight;
        const windowTopPosition = window.scrollY;
        const windowBottomPosition = windowTopPosition + windowHeight;
        
        // Check animate elements
        animatedElements.forEach(function(element) {
            const elementHeight = element.offsetHeight;
            const elementTopPosition = element.getBoundingClientRect().top + windowTopPosition;
            const elementBottomPosition = elementTopPosition + elementHeight;
            
            if ((elementBottomPosition >= windowTopPosition) && 
                (elementTopPosition <= windowBottomPosition)) {
                element.style.opacity = '1';
            }
        });
        
        // Check background cards
        if (isElementInViewport(document.querySelector('.background'))) {
            setTimeout(() => {
                backgroundCards.forEach(card => card.classList.add('active'));
            }, 300);
        }
        
        // Check portfolio items
        if (isElementInViewport(document.querySelector('.portfolio'))) {
            setTimeout(() => {
                portfolioItems.forEach(item => item.classList.add('active'));
            }, 300);
        }
        
        // Check fun facts cards
        if (isElementInViewport(document.querySelector('.fun-facts'))) {
            setTimeout(() => {
                funFactsCards.forEach(card => card.classList.add('active'));
            }, 300);
        }
        
        // Check contact info
        if (isElementInViewport(document.querySelector('.contact'))) {
            setTimeout(() => {
                contactInfo.classList.add('active');
            }, 300);
        }
    }
    
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
        );
    }
    
    // Initialize the custom cursor
    const cursor = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Hover effects for interactive elements
    document.querySelectorAll('a, button, .portfolio-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            cursor.style.width = '50px';
            cursor.style.height = '50px';
            cursor.style.backgroundColor = 'rgba(13, 148, 136, 0.3)';
        });
        
        item.addEventListener('mouseleave', () => {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            cursor.style.backgroundColor = 'rgba(13, 148, 136, 0.5)';
        });
    });
    
    // Parallax effect
    document.addEventListener('mousemove', function(e) {
        const moveX = (e.clientX / window.innerWidth) - 0.5;
        const moveY = (e.clientY / window.innerHeight) - 0.5;
        
        document.querySelectorAll('.geometric-shape').forEach(shape => {
            const shapeX = moveX * 40;
            const shapeY = moveY * 40;
            shape.style.transform = `translate(${shapeX}px, ${shapeY}px)`;
        });
    });
    
    // Initial check
    checkIfInView();
    
    // Check on scroll
    window.addEventListener('scroll', checkIfInView);
    
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Typing animation
    function typeWriter(text, i, elementId) {
        if (i < text.length) {
            document.getElementById(elementId).innerHTML += text.charAt(i);
            i++;
            setTimeout(function() {
                typeWriter(text, i, elementId)
            }, 100);
        }
    }
    
    // Page load animation
    setTimeout(() => {
        document.body.style.overflow = 'visible';
        checkIfInView();
    }, 500);
});