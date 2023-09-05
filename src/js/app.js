// Variables Nav
const hamburguer = document.querySelector(`.hamburguer`);

// Variables formulario 

// Eventos
document.addEventListener(`DOMContentLoaded`, eventListeners);

function eventListeners() {
  hamburguer.addEventListener(`click`, openCloseNav);
}

// Funciones

function openCloseNav() {
  const nav = document.querySelector(`.nav`);
  
  nav.classList.toggle(`nav--activo`);

  closeNav(nav)
}

function closeNav(nav) {
  const links = document.querySelectorAll(`.nav__link`);

  links.forEach((link) => {
    link.addEventListener(`click`, (e) => {
      e.preventDefault();

      // Scroll al dar click en enlace
      const section = document.querySelector(e.target.attributes.href.value);
      section.scrollIntoView({ behavior: `smooth` });

      // Cerrar el menu al dar click en enlace
      const anchor = `A`;
      if (e.target.tagName === anchor) {
        nav.classList.remove(`nav--activo`);
      }
    });
  });
}
