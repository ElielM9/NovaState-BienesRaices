// Variables Nav
const hamburguer = document.querySelector(`.hamburguer`);

// Variables formulario

const email = {
  nombre: ``,
  email: ``,
  telefono: ``,
};

const form = document.querySelector(`#form`);
const inputName = document.querySelector(`#name`);
const inputEmail = document.querySelector(`#email`);
const inputTel = document.querySelector(`#tel`);

// Eventos

document.addEventListener(`DOMContentLoaded`, eventListeners);

function eventListeners() {
  // Abrir y cerrar nav
  hamburguer.addEventListener(`click`, openCloseNav);

  // Validacion formulario
  inputName.addEventListener(`input`, validar);
  inputEmail.addEventListener(`input`, validar);
  inputTel.addEventListener(`input`, validar);
  form.addEventListener(`submit`, sendEmail);
}

// Funciones

function openCloseNav() {
  const nav = document.querySelector(`.nav`);

  nav.classList.toggle(`nav--activo`);

  closeNav(nav);
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

function validar(e) {
  const vacio = ``;
  const referencia = e.target.parentElement;

  // Alerta si un field está vacio
  if (e.target.value.trim() === vacio) {
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

  cleanAlert(referencia);

  // Llenar el objeto email
  email[e.target.name] = e.target.value.trim().toLowerCase();

  // Revisar el objeto email
  comprobarEmail();
}

function showAlert(mensaje, referencia) {
  cleanAlert(referencia);

  // Generar las alertas
  const errorBorde = referencia.querySelector(`.form__field`);
  const error = referencia.querySelector(`.form__field`);

  errorBorde.classList.add(`form__field--error`);
  error.placeholder = mensaje;
}

function cleanAlert(referencia) {
  // Comprobar si existe la alerta
  const alerta = referencia.querySelector(`.form__field--error`);

  if (alerta) {
    alerta.classList.remove(`form__field--error`);
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

function sendEmail(e) {
  e.preventDefault();

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
    form.appendChild(alertaExito);

    // Eliminar la alerta despues de mostrarla
    setTimeout(() => {
      alertaExito.remove();
    }, 2000);
  }, 3000);
}

function resetForm() {
  // Reiniciar el objeto
  email.nombre = ``;
  email.email = ``;
  email.telefono = ``;

  form.reset();

  comprobarEmail();
}
