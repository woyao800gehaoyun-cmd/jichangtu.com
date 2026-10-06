const menuButton = document.querySelector('[data-menu-button]');
const mobileMenu = document.querySelector('[data-mobile-nav]');

menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  mobileMenu?.classList.toggle('hidden', expanded);
  menuButton.querySelector('.menu-open')?.classList.toggle('hidden', !expanded);
  menuButton.querySelector('.menu-close')?.classList.toggle('hidden', expanded);
});
