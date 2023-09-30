export const initMenu = () => {

  const BURGER_ADDRESS = 'img/sprite.svg#burger';
  const CLOSE_ADDRESS = 'img/sprite.svg#icon-close';
  const html = document.querySelector('html');
  const button = document.querySelector('.menu-button');
  const buttonImage = document.querySelector('.burger__image');
  const overlay = document.querySelector('.overlay');
  const menu = document.querySelector('.navigation__list');
  const links = document.querySelectorAll('.navigation__link');

  if (window.matchMedia('(max-width: 767px)').matches) {
    if (button.classList.contains('visually-hidden')) {
      button.classList.remove('visually-hidden');
    }
    links.forEach((e) => {
      e.classList.add('icon-font-arrow');
    });
    if (menu.classList.contains('navigation__list--active')) {
      menu.classList.remove('navigation__list--active');
    }
  }

  const showMenu = () => {
    if (!overlay.classList.contains('visually-hidden')) {
      menu.classList.add('navigation__list--active');
    } else {
      menu.classList.remove('navigation__list--active');
    }
  };

  const initOverlay = () => {
    overlay.classList.toggle('visually-hidden');
    html.classList.toggle('scroll-lock');
  };

  const changeImageButton = () => {
    if (buttonImage.href.baseVal === BURGER_ADDRESS) {
      buttonImage.href.baseVal = CLOSE_ADDRESS;
    } else if (buttonImage.href.baseVal === CLOSE_ADDRESS) {
      buttonImage.href.baseVal = BURGER_ADDRESS;
    }
    initOverlay();
    showMenu();
  };

  button.addEventListener('pointerdown', changeImageButton);
};
