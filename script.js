/**
 * Luis Imlauer portfolio interactions.
 * Content remains visible without JavaScript.
 */

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const navbar = document.querySelector('.navbar');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const savedTheme = localStorage.getItem('theme');
    htmlElement.setAttribute('data-theme', savedTheme || 'light');

    themeToggle?.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
            const targetId = anchor.getAttribute('href');
            const target = targetId ? document.querySelector(targetId) : null;

            if (!target) return;

            event.preventDefault();
            const top = target.getBoundingClientRect().top + window.scrollY - 72;
            window.scrollTo({
                top,
                behavior: prefersReducedMotion.matches ? 'auto' : 'smooth'
            });
        });
    });

    const updateNavbar = () => {
        navbar?.classList.toggle('is-scrolled', window.scrollY > 40);
    };

    updateNavbar();
    window.addEventListener('scroll', updateNavbar, { passive: true });
});
