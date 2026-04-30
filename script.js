// ===========================
// MENU MOBILE (hamburger)
// ===========================
const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('mainNav');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    nav.classList.toggle('open');
});

// Fecha o menu ao clicar em um link
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        toggle.classList.remove('open');
        nav.classList.remove('open');
    });
});


// ===========================
// ACCORDION
// ===========================
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const btn = item.querySelector('.accordion-btn');

    btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        // Fecha todos
        accordionItems.forEach(i => i.classList.remove('open'));

        // Abre o clicado (se não estava aberto)
        if (!isOpen) {
            item.classList.add('open');
        }
    });
});


// ===========================
// BOTÃO VOLTAR AO TOPO
// ===========================
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
