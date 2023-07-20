var header = document.getElementById("Header");
var logobsrt = document.getElementById("Logo-bsrt");
var nav = document.getElementById("Nav");
var menu = document.getElementById("menu");
var inicio = document.getElementById("inicio");
var menuLinks = document.querySelectorAll('.menu-link');
var menuCheckbox = document.getElementById('nav');
var eduButton = document.querySelector('.edu');
var trabajoButton = document.querySelector('.trabajo');
var educacionContent = document.querySelector('.educacion_body');
var trabajoContent = document.querySelector('.trabajo_body');
var switc = document.getElementById("switch");

function adjustMenuPosition() {
    if (window.innerWidth >= 769) {
      menu.style.marginTop = "0"; 
    }
}
function toggleDarkMode() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      document.querySelector(".darksvg").style.display ="none";
      document.querySelector(".lightsvg").style.display ="inline";
      document.querySelector(".lightsvg").style.fill ="yellow"
      header.style.backgroundColor = "#353638";
    } else {
      document.querySelector(".darksvg").style.display ="inline";
      document.querySelector(".lightsvg").style.display ="none";
      header.style.backgroundColor = "transparent";
    }
}
switc.addEventListener("click", toggleDarkMode);

window.addEventListener("scroll",()=>{
    var scroll = window.scrollY
    if (scroll>10){
        nav.style.transition = "0.5s"
        nav.style.height = "55px"
        header.style.transition = "0.5s"
        header.style.backgroundColor = "#FFE8E8"
        logobsrt.style.transition="0.5s"
        logobsrt.style.width = "200px"
        logobsrt.style.height = "50px"
        logobsrt.style.marginTop = "5px"
        menu.style.transition = "0.5s"
        menu.style.marginTop = "54px"
        adjustMenuPosition();
        if (document.body.classList.contains("dark")) {
            header.style.backgroundColor = "#353638";
          }
        
    }else{
        header.style.backgroundColor = "transparent"
        if(window.innerWidth<=768){
            logobsrt.style.width = "220px"
            logobsrt.style.height = "70px"
        }else{
            logobsrt.style.width = "280px"
            logobsrt.style.height = "81.36px"
        }
        nav.style.height = "80px"
        nav.style.transition = "0.5s"
        menu.style.transition = "0.5s"
        menu.style.marginTop = "76px"
        adjustMenuPosition();
    }
})
function toggleInicio(){
    const scroll = window.scrollY;
    if (scroll > 300){
        inicio.style.display = "block";
    }else{
        inicio.style.display = "none";
    }
}
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
  
inicio.addEventListener('click', scrollToTop);
window.addEventListener('scroll', toggleInicio);

menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        menuCheckbox.checked = false; // Cierra el menú
        menu.classList.remove('menuactive'); // Quita la clase 'menuactive' para ocultar el menú
        linea1.classList.remove('activelinea1menu2'); // Restaura las animaciones de las barras del menú
        linea2.classList.remove('activelinea2menu2');
        linea3.classList.remove('activelinea3menu2');
    });
});

document.querySelector(".menu2").addEventListener("click", animateBars);
var linea1 = document.querySelector(".linea1");
var linea2 = document.querySelector(".linea2");
var linea3 = document.querySelector(".linea3");
var content = document.querySelector(".menu");

function animateBars(){
    linea1.classList.toggle("activelinea1menu2");
    linea2.classList.toggle("activelinea2menu2");
    linea3.classList.toggle("activelinea3menu2");
    content.classList.toggle("menuactive");
}
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
});
const imgsProyectos = document.querySelectorAll('.imgs_proyectos');
imgsProyectos.forEach((img) => {
    observer.observe(img);
});

eduButton.addEventListener('click', mostrarEducacion);
trabajoButton.addEventListener('click', mostrarTrabajo);
trabajoContent.style.display = "none";
// Función para mostrar el contenido de Educación
function mostrarEducacion() {
    educacionContent.style.display = 'block';
    trabajoContent.style.display = 'none';
    eduButton.style.borderColor = "#FD9681";
    trabajoButton.style.borderColor = "transparent";
}

// Función para mostrar el contenido de Trabajo
function mostrarTrabajo() {
    educacionContent.style.display = 'none';
    trabajoContent.style.display = 'block';
    eduButton.style.borderColor = "transparent";
    trabajoButton.style.borderColor = "#FD9681";
}

