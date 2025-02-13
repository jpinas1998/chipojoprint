// Animación de carga inicial
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Smooth scroll para la navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth', block: 'start'
        });
    });
});

// Animación al hacer scroll (Intersection Observer)
const observerOptions = {
    threshold: 0.1, rootMargin: '0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animación a elementos con data-animate
document.querySelectorAll('[data-animate]').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    animateOnScroll.observe(el);
});

// Hover effect para portfolio
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.querySelector('img').style.transform = 'scale(1.03)';
    });

    item.addEventListener('mouseout', () => {
        item.querySelector('img').style.transform = 'scale(1)';
    });
});

// Animación escalonada para servicios
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

