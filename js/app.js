// Selecciona el botón de menú
const menuBtn = document.querySelector('.menu-btn');
// Selecciona el menú principal
const mainMenu = document.querySelector('.main-menu');
// Selecciona los elementos de menú
const menuItems = document.querySelectorAll('.menu-item');

// Define el estado inicial del menú
let menuOpen = false;

// Añade un evento de clic al botón de menú
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    mainMenu.classList.add('show');
    menuItems.forEach(item => item.classList.add('show'));
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    mainMenu.classList.remove('show');
    menuItems.forEach(item => item.classList.remove('show'));
    menuOpen = false;
  }
});
