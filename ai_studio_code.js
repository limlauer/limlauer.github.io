/**
 * LUIS IMLAUER - PORTFOLIO ENGINE
 * Clean, vanilla JS for interactions and theme management.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- THEME MANAGEMENT ---
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    
    htmlElement.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // --- SCROLL REVEAL ANIMATION ---
    // Simple Intersection Observer to trigger fade-ins
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal, .case-study, .timeline-item').forEach(el => {
        el.classList.add('reveal'); // Ensure class is present
        revealObserver.observe(el);
    });

    // --- SMOOTH SCROLLING FOR NAV LINKS ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Offset for sticky nav
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- DYNAMIC NAVBAR STYLE ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '1rem 0';
            navbar.style.background = 'var(--bg)';
            navbar.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.1)';
        } else {
            navbar.style.padding = '1.5rem 0';
            navbar.style.background = 'transparent';
            navbar.style.boxShadow = 'none';
        }
    });

    // --- ACCESSIBILITY: LOG FOR CONSOLE ---
    console.log("%c Luis Imlauer | Technical Product, Operations & Integrations ", "color: #3b82f6; font-weight: bold; font-size: 14px;");
    console.log("Environment: Production ready. Built with vanilla JS/CSS.");
});