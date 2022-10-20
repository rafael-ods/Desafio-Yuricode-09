const botaoMenu = document.querySelector(".cabecalho__menu")
const menu = document.querySelector(".menu__lista")

botaoMenu.addEventListener('click', ()=> {
    menu.classList.toggle("menu__lista--ativa")
})