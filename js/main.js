const navigation = document.getElementById('menu-icon');

document.addEventListener('DOMContentLoaded', () => {
  toggleMenu();
});

window.addEventListener('resize', () => {
  toggleMenu();
});

navigation.addEventListener('click', () => {
  toggleShowMenu();
});

const toggleMenu = () => {
  let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const navList = document.querySelector('#nav-list');
  const menuIcon = document.querySelector('#menu-icon');
  width <= 768
    ? navList.classList.add('nav__list--mobile') || menuIcon.classList.add('nav__icon-container--display')
    : navList.classList.remove('nav__list--mobile')
    || menuIcon.classList.remove('nav__icon-container--display')
    || navList.classList.remove('nav__list--mobile--display');
};

const toggleShowMenu = () => {
  const navList = document.querySelector('#nav-list');
  navList.classList.toggle('nav__list--mobile--display');
};