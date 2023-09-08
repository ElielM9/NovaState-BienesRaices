// Variables Nav
const hamburguer = document.querySelector(`.hamburguer`);

// Variables formulario

const email = {
  nombre: ``,
  email: ``,
  telefono: ``,
};

const emailNewsletter = {
  emailNews: ``,
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

  closeNavOnClick(nav);
}

function closeNavOnClick(nav) {
  const navLinks = document.querySelectorAll(`.nav__link`);

  navLinks.forEach((eachLink, index) => {
    eachLink.addEventListener(`click`, (e) => {
      e.preventDefault();

      // Scroll al dar click en un elemento
      const section = document.querySelector(e.target.attributes.href.value);
      section.scrollIntoView({ behavior: `smooth` });

      // Cerrar el menu si se le da click a un enlace
      const anchor = `A`;
      if (e.target.tagName === anchor) {
        nav.classList.remove(`nav--activo`);
      }
    });
  });

  // Ejecuta el evento `click` en la ventana window del navegador
  window.addEventListener("click", (e) => {
    // Obtener el elemento padre del elemento en el que se hizo clic.
    const referencia = e.target.parentElement;

    /* 1. Comprobar si el elemento nav tiene la clase 'nav--activo'.
       2. Comprobar si el elemento padre del elemento en el que se hizo clic no es igual al elemento con la clase 'hamburguer'.
       Si todas las condiciones se cumplen, alternar la presencia de la clase 'nav--activo' en el elemento 'nav'.
    */
    if (nav.classList.contains(`nav--activo`) && referencia !== hamburguer) {
      nav.classList.remove(`nav--activo`);
    }
  });
}

function validar(e) {
  const empty = ``;
  const input = e.target;
  const reference = input.parentElement;
  const fieldName = input.name;
  const fieldValue = input.value.trim().toLowerCase();

  // Alerta si un field está vacio
  if (fieldValue === empty && fieldName !== `emailNews`) {
    showAlert(`El ${fieldName} es obligatorio`, reference);
    email[fieldName] = ``;
    checkEmail();

    return;
  }

  // Validar el email
  if (fieldName === `email` && !isValidEmail(fieldValue)) {
    showAlert(`El email es inválido`, reference);
    email[fieldName] = ``;
    checkEmail();

    return;
  }

  // Validar el telefono
  if (fieldName === `telefono` && !isValidTel(fieldValue)) {
    showAlert(`El teléfono es inválido`, reference);
    email[fieldName] = ``;
    checkEmail();

    return;
  }

  if (fieldName === `emailNews` && !isValidEmail(fieldValue)) {
    showAlert(`El email es invalido`, reference);
    delete email.emailNews;
    emailNewsletter[fieldName] = ``;
    checkEmailNewsletter();

    return;
  }

  cleanAlert(reference);

  // Llenar los objetos `Email` y `EmailNewsletter`
  if (reference.parentElement === formHeader) {
    email[fieldName] = fieldValue;
  }

  if (reference.parentElement === formNewsletter) {
    emailNewsletter[fieldName] = fieldValue;
  }

  // Revisar los objetos `Email` y `EmailNewsletter`
  checkEmail();
  checkEmailNewsletter();
}

function showAlert(mensaje, reference) {
  cleanAlert(reference);

  // Generar las alertas
  const error = reference.querySelector(`.form__field`);

  error.classList.add(`form__field--error`);
  error.placeholder = mensaje;
}

function cleanAlert(reference) {
  // Comprobar si existe la alerta
  const isActiveAlert = reference.querySelector(`.form__field--error`);

  if (isActiveAlert) {
    isActiveAlert.classList.remove(`form__field--error`);
    isActiveAlert.placeholder = `Ingresa tu ${isActiveAlert.name}`;
  }
}

function isValidEmail(email) {
  const regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const resultEmail = regexEmail.test(email);

  return resultEmail;
}

function isValidTel(tel) {
  const regexTel = /^(\+52|0052|52)?[ -]*[ -]*([0-9][ -]*){10}/;
  const resultTel = regexTel.test(tel);

  return resultTel;
}

function checkEmail() {
  const btnSubmit = document.querySelector(`#btnSubmit`);

  if (Object.values(email).includes(``)) {
    btnSubmit.disabled = true;

    return;
  }

  btnSubmit.disabled = false;
}

function checkEmailNewsletter() {
  const btnSubscribe = document.querySelector(`#btnSubscribe`);

  if (Object.values(emailNewsletter).includes(``)) {
    btnSubscribe.disabled = true;

    return;
  }
  btnSubscribe.disabled = false;
}

function sendEmail(e) {
  e.preventDefault();

  const input = e.target;

  if (input === formHeader) {
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

  if (input === formNewsletter) {
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
      alertaExito.classList.add(`form__exito--newsletter`);
      alertaExito.textContent = `Gracias por suscribirte`;

      formNewsletter.appendChild(alertaExito);

      // Eliminar la alerta despues de mostrarla
      setTimeout(() => {
        alertaExito.remove();
      }, 2000);
    }, 3000);

    return;
  }
}

function resetForm() {
  // Reiniciar los objetos
  email.nombre = ``;
  email.email = ``;
  email.telefono = ``;

  emailNewsletter.emailNews = ``;

  // Reiniciar los formularios
  formHeader.reset();
  formNewsletter.reset();

  // Comprobar el `Email` e `EmailNews`
  checkEmail();
  checkEmailNewsletter();
}
