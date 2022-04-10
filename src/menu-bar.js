//Поиск по DOM
const burgerBtn = document.querySelector(".menu-bar__burger-btn");
const menu = document.querySelector(".menu-bar__burgernav");
const menuBar = document.querySelector(".menu-bar");
const aspBtn = document.querySelector(".menu-bar__dropdown-link-asp");
const magBtn = document.querySelector(".menu-bar__dropdown-link-mag");
const sectionEducation = document.getElementById("education");
const radioAsp = document.getElementById("education__tab-input-asp");
const radioMag = document.getElementById("education__tab-input-mag");

//Развернуть / свернуть меню
function toggleMenu() {
  burgerBtn.classList.toggle("menu-bar__burger-btn_opened");
  menu.classList.toggle("menu-bar__burgernav_opened");
  menuBar.classList.toggle("menu-bar_opened");
}

//Слушатели
// 1. Кнопка бургера
burgerBtn.addEventListener("click", toggleMenu);

// 2. Сворачивание меню после клика на ссылке
menu.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("menu-bar__burgernav-link")) {
    toggleMenu();
  }
});

// 3. Выпадающее меню
aspBtn.addEventListener("click", () => {
  sectionEducation.scrollIntoView();
  radioAsp.checked = true;
});

magBtn.addEventListener("click", () => {
  sectionEducation.scrollIntoView();
  radioMag.checked = true;
});
