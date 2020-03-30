var menuBtn = document.getElementById('menu-boton');
var menu = document.getElementById('menu');
var bienvenido = document.getElementById('bienvenido');

function headerScroll() {
    var cuerpo = document.querySelector('.cuerpo')
    var header = document.getElementById('header');
    var logo = document.getElementById('logo');
    var menuBtn = document.getElementById('menu-boton')
    var menu = document.getElementById('menu');
    var menuLi = document.querySelectorAll('.menu-li');
    var posCuerpo = cuerpo.getBoundingClientRect().bottom;
    var posPantalla = window.innerHeight;



    if (posCuerpo + 5 < posPantalla) {
        header.classList.add('scroll-header');
        logo.classList.add('scroll-logo');
        logo.classList.remove('no-scroll');
        menuBtn.classList.add('scroll-menu-boton');
        menu.classList.add('scroll-menu');
        menuLi.forEach(function(elem) {
            elem.classList.add('scroll-li');
        });
    }
    if (posCuerpo + 5 > posPantalla) {
        header.classList.remove('scroll-header');
        logo.classList.remove('scroll-logo');
        logo.classList.add('no-scroll');
        menuBtn.classList.remove('scroll-menu-boton');
        menu.classList.remove('scroll-menu');
        menuLi.forEach(function(elem) {
            elem.classList.remove('scroll-li');
        });
    }

}

function smoothScroll(target, duration) {
    var target = document.getElementById(target);
}

function mostrarMenu() {
    var menu = document.getElementById('menu');
    this.classList.toggle('menu-click');
    menu.classList.toggle('mostrar-menu');
    window.addEventListener('scroll', cerrarMenu);
}

function cerrarMenu() {
    var menu = document.getElementById('menu');
    menuBtn.classList.remove('menu-click');
    menu.classList.remove('mostrar-menu');
}

function irOfsset() {

}

menuBtn.addEventListener('click', mostrarMenu);
window.addEventListener('scroll', headerScroll);
bienvenido.addEventListener('click', function() {
    window.scrollTo(0, 200);
});