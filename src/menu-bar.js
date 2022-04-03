//Поиск по DOM
const burgerBtn = document.querySelector('.menu-bar__burger-btn');
const menu = document.querySelector('.menu-bar__burgernav');
const menuBar = document.querySelector('.menu-bar');

//Развернуть / свернуть меню
function toggleMenu() {
  burgerBtn.classList.toggle('menu-bar__burger-btn_opened');
  menu.classList.toggle('menu-bar__burgernav_opened');
  menuBar.classList.toggle('menu-bar_opened');
}

//Слушатели
burgerBtn.addEventListener('click', toggleMenu);
menu.addEventListener('click', toggleMenu);
