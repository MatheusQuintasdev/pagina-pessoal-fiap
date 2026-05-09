// ===========================
// MENU MOBILE (hamburger)
// ===========================
const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('mainNav');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    nav.classList.toggle('open');
});

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

        accordionItems.forEach(i => i.classList.remove('open'));

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


// ===========================
// VALIDAÇÃO DO FORMULÁRIO
// ===========================
const formSubmitBtn = document.getElementById('formSubmit');

function validarCampo(campo, mensagemErro, condicao) {
    const erroEl = document.getElementById('erro-' + campo.id);

    if (condicao) {
        campo.classList.add('campo-erro');
        erroEl.textContent = mensagemErro;
        erroEl.style.display = 'block';
        return false;
    } else {
        campo.classList.remove('campo-erro');
        erroEl.style.display = 'none';
        return true;
    }
}

formSubmitBtn.addEventListener('click', () => {
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const mensagem = document.getElementById('mensagem');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const nomeValido     = validarCampo(nome,     'Nome deve ter pelo menos 3 caracteres', nome.value.trim().length < 3);
    const emailValido    = validarCampo(email,    'Digite um e-mail válido (exemplo@dominio.com)', !emailRegex.test(email.value.trim()));
    const mensagemValida = validarCampo(mensagem, 'Mensagem deve ter pelo menos 10 caracteres', mensagem.value.trim().length < 10);

    if (nomeValido && emailValido && mensagemValida) {

        console.log('Dados do formulário a serem enviados:', {
            nome: nome.value.trim(),
            email: email.value.trim(),
            mensagem: mensagem.value.trim()
        });

        const formWrapper = document.getElementById('formWrapper');
        const sucessoMsg  = document.getElementById('formSucesso');
        const nomeUsuario = nome.value.trim();

        formWrapper.style.display = 'none';
        document.getElementById('formSucessoNome').textContent =
            'Obrigado por entrar em contato, ' + nomeUsuario + '! Retornarei em breve.';
        sucessoMsg.style.display = 'block';

        nome.value     = '';
        email.value    = '';
        mensagem.value = '';
        nome.classList.remove('campo-erro');
        email.classList.remove('campo-erro');
        mensagem.classList.remove('campo-erro');
    }
});
