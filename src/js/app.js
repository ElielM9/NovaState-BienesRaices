// Variables Nav
const hamburguer = document.querySelector(`.hamburguer`);

// Variables formulario

const email = {
  nombre: ``,
  email: ``,
  telefono: ``,
};

const emailNews = {
  email: ``,
};

const formHeader = document.querySelector(`#formHeader`);
const inputName = document.querySelector(`#name`);
const inputEmail = document.querySelector(`#email`);
const inputTel = document.querySelector(`#tel`);
const formNewsletter = document.querySelector(`#formNewsletter`);
const inputEmailNews = document.querySelector(`#emailNews`);

// Eventos

document.addEventListener(`DOMContentLoaded`, eventListeners);

function eventListeners() {
  // Abrir y cerrar nav
  hamburguer.addEventListener(`click`, openCloseNav);

  // Validacion formulario
  inputName.addEventListener(`input`, validar);
  inputEmail.addEventListener(`input`, validar);
  inputTel.addEventListener(`input`, validar);
  inputEmailNews.addEventListener(`input`, validar);
  formHeader.addEventListener(`submit`, sendEmail);
  formNewsletter.addEventListener(`submit`, sendEmail);
}

// Funciones

function openCloseNav() {
  const nav = document.querySelector(`.nav`);

  nav.classList.toggle(`nav--activo`);

  closeNav(nav);
}

function closeNav(nav) {
  const navLinks = document.querySelectorAll(`.nav__link`);

  navLinks.forEach((eachLink, index) => {
    eachLink.addEventListener(`click`, (e) => {
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

  // Escuchar el evento `click` en la ventana window del navegador
  window.addEventListener("click", (e) => {
    // Obtener el elemento padre del elemento en el que se hizo clic.
    const referencia = e.target.parentElement;

    /* Verificar tres condiciones antes de ejecutar el código dentro del if:
     1. Comprobar si el elemento nav tiene la clase 'nav--activo'.
     2. Comprobar si el elemento padre del elemento en el que se hizo clic no es igual al elemento con la clase 'hamburguer'.
    Si todas las condiciones se cumplen, alternar la presencia de la clase 'nav--activo' en el elemento 'nav'.
    */
    if (nav.classList.contains(`nav--activo`) && referencia !== hamburguer) {
      nav.classList.remove(`nav--activo`);
    }
  });
}

function validar(e) {
  const vacio = ``;
  const referencia = e.target.parentElement;

  // Alerta si un field está vacio
  if (e.target.value.trim() === vacio && e.target.id !== `emailNews`) {
    showAlert(`El ${e.target.name} es obligatorio`, referencia);
    email[e.target.name] = ``;
    comprobarEmail();

    return;
  }

  // Validar el email
  if (e.target.name === `email` && !validarEmail(e.target.value)) {
    showAlert(`El email es inválido`, referencia);
    email[e.target.name] = ``;
    comprobarEmail();

    return;
  }

  // Validar el telefono
  if (e.target.name === `telefono` && !validarTel(e.target.value)) {
    showAlert(`El teléfono es inválido`, referencia);
    email[e.target.name] = ``;
    comprobarEmail();

    return;
  }

  if (e.target.id === `emailNews` && !validarEmail(e.target.value)) {
    showAlert(`El email es invalido`, referencia);
    emailNews[e.target.name] = ``;
    comprobarEmailNews();

    return;
  }

  cleanAlert(referencia);

  // Llenar el objeto email
  email[e.target.name] = e.target.value.trim().toLowerCase();

  // Llenar el email news
  emailNews[e.target.name] = e.target.value.trim().toLowerCase();

  // Revisar el objeto email
  comprobarEmail();
  comprobarEmailNews();
}

function showAlert(mensaje, referencia) {
  cleanAlert(referencia);

  // Generar las alertas
  const error = referencia.querySelector(`.form__field`);

  error.classList.add(`form__field--error`);
  error.placeholder = mensaje;
}

function cleanAlert(referencia) {
  // Comprobar si existe la alerta
  const alerta = referencia.querySelector(`.form__field--error`);

  if (alerta) {
    alerta.classList.remove(`form__field--error`);
    alerta.placeholder = `Ingresa tu ${alerta.name}`;
  }
}

function validarEmail(email) {
  const regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const resultadoEmail = regexEmail.test(email);

  return resultadoEmail;
}

function validarTel(tel) {
  const regexTel = /^(\+52|0052|52)?[ -]*[ -]*([0-9][ -]*){10}/;
  const resultadoTel = regexTel.test(tel);

  return resultadoTel;
}

function comprobarEmail() {
  const btnSubmit = document.querySelector(`#btnSubmit`);

  if (Object.values(email).includes(``)) {
    btnSubmit.disabled = true;

    return;
  }

  btnSubmit.disabled = false;
}

function comprobarEmailNews() {
  const btnSubscribe = document.querySelector(`#btnSubscribe`);

  if (Object.values(emailNews).includes(``)) {
    btnSubscribe.disabled = true;

    return;
  }
  btnSubscribe.disabled = false;
}

function sendEmail(e) {
  e.preventDefault();

  if (e.target.id === `formNewsletter`) {
    const spinnerNews = document.querySelector(`#spinnerNews`);

    spinnerNews.classList.add(`form__spinner--activo`);
    spinnerNews.classList.remove(`form__spinner`);

    setTimeout(() => {
      spinnerNews.classList.remove(`form__spinner--activo`);
      spinnerNews.classList.add(`form__spinner`);

      // Reiniciar el formulario
      resetForm();

      // Crear alerta de exito
      const alertaExito = document.createElement(`P`);
      alertaExito.classList.add(`form__exito`);
      alertaExito.textContent = `Gracias por suscribirte`;

      formNewsletter.appendChild(alertaExito);

      // Eliminar la alerta despues de mostrarla
      setTimeout(() => {
        alertaExito.remove();
      }, 2000);
    }, 3000);

    return;
  }

  if (e.target.id === `formHeader`) {
    const spinner = document.querySelector(`#spinner`);

    spinner.classList.add(`form__spinner--activo`);
    spinner.classList.remove(`form__spinner`);

    setTimeout(() => {
      spinner.classList.remove(`form__spinner--activo`);
      spinner.classList.add(`form__spinner`);

      // Reiniciar el formulario
      resetForm();

      // Crear alerta de exito
      const alertaExito = document.createElement(`P`);
      alertaExito.classList.add(`form__exito`);
      alertaExito.textContent = "Mensaje envíado exitosamente";

      formHeader.appendChild(alertaExito);

      // Eliminar la alerta despues de mostrarla
      setTimeout(() => {
        alertaExito.remove();
      }, 2000);
    }, 3000);

    return;
  }
}

function resetForm() {
  // Reiniciar el objeto
  email.nombre = ``;
  email.email = ``;
  email.telefono = ``;

  emailNews.email = ``;

  formHeader.reset();
  formNewsletter.reset();

  comprobarEmail();
  comprobarEmailNews();
}
