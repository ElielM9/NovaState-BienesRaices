// Variables Nav
const hamburguer = document.querySelector(`.hamburguer`);

// Variables formulario

const email = {
  nombre: ``,
  email: ``,
  telefono: ``,
};

const emailNewsletter = {
  email: ``,
};

const formHeader = document.querySelector(`#formHeader`);
const inputName = document.querySelector(`#name`);
const inputEmail = document.querySelector(`#email`);
const inputTel = document.querySelector(`#tel`);
const formNewsletter = document.querySelector(`#formNewsletter`);
const inputEmailNewsletter = document.querySelector(`#emailNews`);

// Eventos

document.addEventListener(`DOMContentLoaded`, eventListeners);

function eventListeners() {
  // Abrir y cerrar nav
  hamburguer.addEventListener(`click`, openCloseNav);

  // Validacion formulario
  inputName.addEventListener(`input`, validar);
  inputEmail.addEventListener(`input`, validar);
  inputTel.addEventListener(`input`, validar);
  inputEmailNewsletter.addEventListener(`input`, validar);
  formHeader.addEventListener(`submit`, sendEmail);
  formNewsletter.addEventListener(`submit`, sendEmail);
}

// Funciones

/**
 * La función `openCloseNav` activa la clase `nav--activo` en el elemento `nav` y
  llama a la función `closeNavOnClick` pasando el elemento `nav` como argumento.
 */
function openCloseNav() {
  const nav = document.querySelector(`.nav`);

  nav.classList.toggle(`nav--activo`);

  closeNavOnClick(nav);
}

/**
 * la función `closeNavOnClick` se usa para cerrar la navegación cuando se le da click a un link o cuando
 * ocurre un click fuera del menú.
 * @param nav - El parámetro `nav` es una referencia al elemento de nav en el documento HTML
 */
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

/**
 * La función `validate` se usa para validar los campos de entrada del formulario, incluyendo la comprobación de campos vacíos,
 * validar direcciones de correo electrónico, y validar números de teléfono.
 * @param e - El parámetro `e` es un objeto evento que se pasa a la función `validate`.
 * Representa el evento que activa la función, como un clic en un botón o el envío de un formulario.
 * @returns nada.
 */
function validar(e) {
  const empty = ``;
  const input = e.target;
  const reference = input.parentElement;
  const fieldId = input.id;
  const fieldName = input.name;
  const fieldValue = input.value.trim().toLowerCase();

  // Alerta si un field está vacio
  if (fieldValue === empty && fieldId !== `emailNews`) {
    showAlert(`El ${fieldName} es obligatorio`, reference);
    email[fieldName] = ``;
    checkEmail();

    return;
  }

  // Validar el email
  if (fieldId === `email` && !isValidEmail(fieldValue)) {
    showAlert(`El email es inválido`, reference);
    email[fieldName] = ``;
    checkEmail();

    return;
  }

  // Validar el telefono
  if (fieldId === `telefono` && !isValidTel(fieldValue)) {
    showAlert(`El teléfono es inválido`, reference);
    email[fieldName] = ``;
    checkEmail();

    return;
  }

  if (fieldId === `emailNews` && !isValidEmail(fieldValue)) {
    showAlert(`El email es invalido`, reference);
    emailNewsletter[fieldName] = ``;
    checkEmailNewsletter();

    return;
  }

  cleanAlert(reference);

  // Llenar los objetos `Email` y `EmailNewsletter`
  fillObjects(reference, fieldName, fieldValue);

  // Revisar los objetos `Email` y `EmailNewsletter`
  checkEmail();
  checkEmailNewsletter();
}

/**
 * La función `showAlert` muestra un mensaje de error en un elemento de referencia especifico.
 * @param mensaje - El parámetro "mensaje" es un string que representa el mensaje de error que se mostrará en la alerta.
 * @param reference - El parámetro `reference` es la referencia del elemento donde se mostrará la alerta
 * Se espera que sea un elemento DOM.
 */
function showAlert(mensaje, reference) {
  cleanAlert(reference);

  // Generar las alertas
  const error = reference.querySelector(`.form__field`);

  error.classList.add(`form__field--error`);
  error.placeholder = mensaje;
}

/**
 * la función cleanAlert elimina la clase de error de un campo de formulario y reinicia el texto del placeholder.
 * @param reference - El parámetro `reference` es el elemento que contiene la alerta. Se utiliza para
 * encontrar el elemento de alerta dentro de los hijos.
 */
function cleanAlert(reference) {
  // Comprobar si existe la alerta
  const isActiveAlert = reference.querySelector(`.form__field--error`);

  if (isActiveAlert) {
    isActiveAlert.classList.remove(`form__field--error`);
    isActiveAlert.placeholder = `Ingresa tu ${isActiveAlert.name}`;
  }
}

/**
 * La función `isValidEmail` revisa si el email recibido es válido de acuerdo a una expresión regular.
 * @param email - El parámetro `email` es un string que representa una dirección de correo electrónico.
 * @returns - Un valor booleano que indica si el correo electrónico recibido es válido o no.
 */
function isValidEmail(email) {
  const regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const resultEmail = regexEmail.test(email);

  return resultEmail;
}

/**
 * La función `isValidTel` revisa si el teléfono recibido es válido de acuerdo a una expresión regular.
 * @param tel - El parámetro `tel` es un string que representa un número de teléfono.
 * @returns - Un valor booleano que indica si el teléfono recibido es válido o no.
 */
function isValidTel(tel) {
  const regexTel = /^(\+52|0052|52)?[ -]*[ -]*([0-9][ -]*){10}/;
  const resultTel = regexTel.test(tel);

  return resultTel;
}

/**
 * La función `fillObjects` rellena los objetos `email` y `emailNewsletter` basándose en el elemento padre
 * de la referencia dada.
 * @param reference - El parámetro reference es el elemento que disparó el evento o el elemento
 * que quieres usar como referencia para determinar qué objeto rellenar.
 * @param fieldName - El nombre del campo que se está rellenando en los objetos. Por ejemplo, si el
 * campo es para la dirección de correo electrónico, el fieldName sería "email".
 * @param fieldValue - El parámetro `fieldValue` es el valor que debe asignarse al campo especificado en los objetos 
 * Email` y `EmailNewsletter`.
 */
function fillObjects(reference, fieldName, fieldValue) {
  // Llenar los objetos `Email` y `EmailNewsletter`
  if (reference.parentElement === formHeader) {
    email[fieldName] = fieldValue;
  }

  if (reference.parentElement === formNewsletter) {
    emailNewsletter[fieldName] = fieldValue;
  }
}

/**
 * La función comprueba si algún valor del objeto email está vacío y desactiva el botón de envío si es así.
 * @return Nada.
 */
function checkEmail() {
  const btnSubmit = document.querySelector(`#btnSubmit`);

  if (Object.values(email).includes(``)) {
    btnSubmit.disabled = true;

    return;
  }

  btnSubmit.disabled = false;
}

/**
 * La función comprueba si algún valor del objeto emailNewsletter está vacío y desactiva el botón
 * btnSubscribe si es así.
 * @return Nada.
 */
function checkEmailNewsletter() {
  const btnSubscribe = document.querySelector(`#btnSubscribe`);

  if (Object.values(emailNewsletter).includes(``)) {
    btnSubscribe.disabled = true;

    return;
  }
  btnSubscribe.disabled = false;
}


/**
 * La función `sendEmail` es una función javascript que maneja los envíos de formularios, muestra un
 * Spinner, reinicia el formulario, y muestra un mensaje de éxito después de un cierto retraso.
 * @param e - El parámetro `e` es un objeto de evento que se pasa a la función `sendEmail`.
 * Normalmente se desencadena por un receptor de eventos, como el envío de un formulario o la pulsación de un botón. El objeto
 * contiene información sobre el evento que se ha producido, como el elemento de destino que desencadenó el evento..
 * @returns Nada.
 */
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
      resetForm(input);

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
      resetForm(input);

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

/**
 * La funcion`resetForm` reinicia los valores de los input en dos formularios diferentes y comprueba la
 validez de las direcciones de correo electrónico. 
 * @param input - El parámetro input se usa para determinar qué formulario reiniciar. Puede ser
 * formHeader o formNewsletter.
 * @returns nada.
 */
function resetForm(input) {
  if (input === formHeader) {
    // Reiniciar objetos
    email.nombre = ``;
    email.email = ``;
    email.telefono = ``;

    // Reiniciar los formularios
    formHeader.reset();

    // Revisar el objeto
    checkEmail();

    return;
  }

  if (input === formNewsletter) {
    // Reiniciar el objeto
    emailNewsletter.email = ``;

    // Reiniciar el formulario
    formNewsletter.reset();

    // Revisar el objeto emailnewsletter
    checkEmailNewsletter();

    return;
  }
}
