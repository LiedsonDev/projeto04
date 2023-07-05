document.addEventListener('DOMContentLoaded', function () {
    const logo = document.querySelector('.logo')
    const alturaLogo = logo.clientHeight;
    const buttons = document.querySelectorAll('[data-tab-button]');

    window.addEventListener('scroll', function () {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual > alturaLogo) {
            exibeHeader();
        } else {
            ocultaHeader();
        }
    })

    window.addEventListener('load', function () {
        const logoItem = document.querySelector('.logo__item')
        setTimeout(function() {
            logoItem.style.opacity = 1
            logoItem.style.transform = 'scale(1.05)'
        }, 500);
    })

    // Seção de movies, programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('movies__list__item--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('movies__tabs__button--is-active');
        });
    }
})

function exibeHeader() {
    const header = document.querySelector('.header');
    header.classList.remove('header--is-hidden');
    header.style = 'position: sticky;';
}

function ocultaHeader() {
    const header = document.querySelector('.header');
    header.classList.add('header--is-hidden');
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('movies__list__item--is-active');
    }
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('movies__tab__button--is-active');
    }
}