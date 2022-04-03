// TO DO
//Открытие меню
const burgerBtn = document.querySelector('.menu-bar__burger-btn');
const menu = document.querySelector('.menu-bar__burgernav');

burgerBtn.addEventListener('click', openMenu);

function openMenu() {
  burgerBtn.classList.toggle('menu-bar__burger-btn_opened');
  menu.classList.toggle('menu-bar__burgernav_opened');
}
