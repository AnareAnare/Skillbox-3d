(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const html = document.getElementsByTagName('html')[0];
    const burger = document.querySelector('.burger');
    const closeMenu = document.querySelector('.btn__close');
    const menu = document.querySelector('.header__nav');
    const menuLinks = menu.querySelectorAll('.nav__link');
    burger.addEventListener('click', () => {
      menu.classList.add('header__nav_active');
      document.body.classList.add('stop-scroll');
    });
    closeMenu.addEventListener('click', () => {
      menu.classList.remove('header__nav_active');
      document.body.classList.remove('stop-scroll');
    });
    menuLinks.forEach(el => {
      el.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
        document.body.classList.remove('stop-scroll');
      });
    });
  });
})();
