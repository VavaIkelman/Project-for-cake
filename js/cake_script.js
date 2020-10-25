let header__burger = document.querySelector('.header__burger');
let nav_header = document.querySelector('.nav_header');
let back = document.querySelector('body');
let header_menu_list = document.querySelector('.header_menu_list');

header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    nav_header.classList.toggle('active');
    back.classList.toggle('lock');
}

header_menu_list.onclick = function () {
    header_menu_list.classList.remove('active');
    back.classList.toggle('lock');
}