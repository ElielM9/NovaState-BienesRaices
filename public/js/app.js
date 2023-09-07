const hamburguer=document.querySelector(".hamburguer"),email={nombre:"",email:"",telefono:""},form=document.querySelector("#form"),inputName=document.querySelector("#name"),inputEmail=document.querySelector("#email"),inputTel=document.querySelector("#tel");function eventListeners(){hamburguer.addEventListener("click",openCloseNav),inputName.addEventListener("input",validar),inputEmail.addEventListener("input",validar),inputTel.addEventListener("input",validar),form.addEventListener("submit",sendEmail)}function openCloseNav(){const e=document.querySelector(".nav");e.classList.toggle("nav--activo"),closeNav(e)}function closeNav(e){document.querySelectorAll(".nav__link").forEach(t=>{t.addEventListener("click",t=>{t.preventDefault();document.querySelector(t.target.attributes.href.value).scrollIntoView({behavior:"smooth"});"A"===t.target.tagName&&e.classList.remove("nav--activo")})})}function validar(e){const t=e.target.parentElement;return""===e.target.value.trim()?(showAlert(`El ${e.target.name} es obligatorio`,t),email[e.target.name]="",void comprobarEmail()):"email"!==e.target.name||validarEmail(e.target.value)?"telefono"!==e.target.name||validarTel(e.target.value)?(cleanAlert(t),email[e.target.name]=e.target.value.trim().toLowerCase(),void comprobarEmail()):(showAlert("El teléfono es inválido",t),email[e.target.name]="",void comprobarEmail()):(showAlert("El email es inválido",t),email[e.target.name]="",void comprobarEmail())}function showAlert(e,t){cleanAlert(t);const r=t.querySelector(".form__field");r.classList.add("form__field--error"),r.placeholder=e}function cleanAlert(e){const t=e.querySelector(".form__field--error");t&&(t.classList.remove("form__field--error"),t.placeholder="Ingresa tu "+t.name)}function validarEmail(e){return/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(e)}function validarTel(e){return/^(\+52|0052|52)?[ -]*[ -]*([0-9][ -]*){10}/.test(e)}function comprobarEmail(){const e=document.querySelector("#btnSubmit");Object.values(email).includes("")?e.disabled=!0:e.disabled=!1}function sendEmail(e){e.preventDefault();const t=document.querySelector("#spinner");t.classList.add("form__spinner--activo"),t.classList.remove("form__spinner"),setTimeout(()=>{t.classList.remove("form__spinner--activo"),t.classList.add("form__spinner"),resetForm();const e=document.createElement("P");e.classList.add("form__exito"),e.textContent="Mensaje envíado exitosamente",form.appendChild(e),setTimeout(()=>{e.remove()},2e3)},3e3)}function resetForm(){email.nombre="",email.email="",email.telefono="",form.reset(),comprobarEmail()}document.addEventListener("DOMContentLoaded",eventListeners);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJoYW1idXJndWVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZW1haWwiLCJub21icmUiLCJ0ZWxlZm9ubyIsImZvcm0iLCJpbnB1dE5hbWUiLCJpbnB1dEVtYWlsIiwiaW5wdXRUZWwiLCJldmVudExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvcGVuQ2xvc2VOYXYiLCJ2YWxpZGFyIiwic2VuZEVtYWlsIiwibmF2IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiY2xvc2VOYXYiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImxpbmsiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJhdHRyaWJ1dGVzIiwiaHJlZiIsInZhbHVlIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsInRhZ05hbWUiLCJyZW1vdmUiLCJyZWZlcmVuY2lhIiwicGFyZW50RWxlbWVudCIsInRyaW0iLCJzaG93QWxlcnQiLCJuYW1lIiwiY29tcHJvYmFyRW1haWwiLCJ2YWxpZGFyRW1haWwiLCJ2YWxpZGFyVGVsIiwiY2xlYW5BbGVydCIsInRvTG93ZXJDYXNlIiwibWVuc2FqZSIsImVycm9yIiwiYWRkIiwicGxhY2Vob2xkZXIiLCJhbGVydGEiLCJ0ZXN0IiwidGVsIiwiYnRuU3VibWl0IiwiT2JqZWN0IiwidmFsdWVzIiwiaW5jbHVkZXMiLCJkaXNhYmxlZCIsInNwaW5uZXIiLCJzZXRUaW1lb3V0IiwicmVzZXRGb3JtIiwiYWxlcnRhRXhpdG8iLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsInJlc2V0Il0sIm1hcHBpbmdzIjoiQUFDQSxNQUFNQSxXQUFhQyxTQUFTQyxjQUFjLGVBSXBDQyxNQUFRLENBQ1pDLE9BQVEsR0FDUkQsTUFBTyxHQUNQRSxTQUFVLElBR05DLEtBQU9MLFNBQVNDLGNBQWMsU0FDOUJLLFVBQVlOLFNBQVNDLGNBQWMsU0FDbkNNLFdBQWFQLFNBQVNDLGNB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dGVudCI6WyIvLyBWYXJpYWJsZXMgTmF2XHJcbmNvbnN0IGhhbWJ1cmd1ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuaGFtYnVyZ3VlcmApO1xyXG5cclxuLy8gVmFyaWFibGVzIGZvcm11bGFyaW9cclxuXHJcbmNvbnN0IGVtYWlsID0ge1xyXG4gIG5vbWJyZTogYGAsXHJcbiAgZW1haWw6IGBgLFxyXG4gIHRlbGVmb25vOiBgYCxcclxufTtcclxuXHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZm9ybWApO1xyXG5jb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbmFtZWApO1xyXG5jb25zdCBpbnB1dEVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2VtYWlsYCk7XHJcbmNvbnN0IGlucHV0VGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RlbGApO1xyXG5cclxuLy8gRXZlbnRvc1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihgRE9NQ29udGVudExvYWRlZGAsIGV2ZW50TGlzdGVuZXJzKTtcclxuXHJcbmZ1bmN0aW9uIGV2ZW50TGlzdGVuZXJzKCkge1xyXG4gIC8vIEFicmlyIHkgY2VycmFyIG5hdlxyXG4gIGhhbWJ1cmd1ZXIuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBvcGVuQ2xvc2VOYXYpO1xyXG5cclxuICAvLyBWYWxpZGFjaW9uIGZvcm11bGFyaW9cclxuICBpbnB1dE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihgaW5wdXRgLCB2YWxpZGFyKTtcclxuICBpbnB1dEVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoYGlucHV0YCwgdmFsaWRhcik7XHJcbiAgaW5wdXRUZWwuYWRkRXZlbnRMaXN0ZW5lcihgaW5wdXRgLCB2YWxpZGFyKTtcclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoYHN1Ym1pdGAsIHNlbmRFbWFpbCk7XHJcbn1cclxuXHJcbi8vIEZ1bmNpb25lc1xyXG5cclxuZnVuY3Rpb24gb3BlbkNsb3NlTmF2KCkge1xyXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5uYXZgKTtcclxuXHJcbiAgbmF2LmNsYXNzTGlzdC50b2dnbGUoYG5hdi0tYWN0aXZvYCk7XHJcblxyXG4gIGNsb3NlTmF2KG5hdik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlTmF2KG5hdikge1xyXG4gIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLm5hdl9fbGlua2ApO1xyXG5cclxuICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgLy8gU2Nyb2xsIGFsIGRhciBjbGljayBlbiBlbmxhY2VcclxuICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZS50YXJnZXQuYXR0cmlidXRlcy5ocmVmLnZhbHVlKTtcclxuICAgICAgc2VjdGlvbi5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBgc21vb3RoYCB9KTtcclxuXHJcbiAgICAgIC8vIENlcnJhciBlbCBtZW51IGFsIGRhciBjbGljayBlbiBlbmxhY2VcclxuICAgICAgY29uc3QgYW5jaG9yID0gYEFgO1xyXG4gICAgICBpZiAoZS50YXJnZXQudGFnTmFtZSA9PT0gYW5jaG9yKSB7XHJcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoYG5hdi0tYWN0aXZvYCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGFyKGUpIHtcclxuICBjb25zdCB2YWNpbyA9IGBgO1xyXG4gIGNvbnN0IHJlZmVyZW5jaWEgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAvLyBBbGVydGEgc2kgdW4gZmllbGQgZXN0w6EgdmFjaW9cclxuICBpZiAoZS50YXJnZXQudmFsdWUudHJpbSgpID09PSB2YWNpbykge1xyXG4gICAgc2hvd0FsZXJ0KGBFbCAke2UudGFyZ2V0Lm5hbWV9IGVzIG9ibGlnYXRvcmlvYCwgcmVmZXJlbmNpYSk7XHJcbiAgICBlbWFpbFtlLnRhcmdldC5uYW1lXSA9IGBgO1xyXG4gICAgY29tcHJvYmFyRW1haWwoKTtcclxuXHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBWYWxpZGFyIGVsIGVtYWlsXHJcbiAgaWYgKGUudGFyZ2V0Lm5hbWUgPT09IGBlbWFpbGAgJiYgIXZhbGlkYXJFbWFpbChlLnRhcmdldC52YWx1ZSkpIHtcclxuICAgIHNob3dBbGVydChgRWwgZW1haWwgZXMgaW52w6FsaWRvYCwgcmVmZXJlbmNpYSk7XHJcbiAgICBlbWFpbFtlLnRhcmdldC5uYW1lXSA9IGBgO1xyXG4gICAgY29tcHJvYmFyRW1haWwoKTtcclxuXHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBWYWxpZGFyIGVsIHRlbGVmb25vXHJcbiAgaWYgKGUudGFyZ2V0Lm5hbWUgPT09IGB0ZWxlZm9ub2AgJiYgIXZhbGlkYXJUZWwoZS50YXJnZXQudmFsdWUpKSB7XHJcbiAgICBzaG93QWxlcnQoYEVsIHRlbMOpZm9ubyBlcyBpbnbDoWxpZG9gLCByZWZlcmVuY2lhKTtcclxuICAgIGVtYWlsW2UudGFyZ2V0Lm5hbWVdID0gYGA7XHJcbiAgICBjb21wcm9iYXJFbWFpbCgpO1xyXG5cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNsZWFuQWxlcnQocmVmZXJlbmNpYSk7XHJcblxyXG4gIC8vIExsZW5hciBlbCBvYmpldG8gZW1haWxcclxuICBlbWFpbFtlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LnZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAvLyBSZXZpc2FyIGVsIG9iamV0byBlbWFpbFxyXG4gIGNvbXByb2JhckVtYWlsKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dBbGVydChtZW5zYWplLCByZWZlcmVuY2lhKSB7XHJcbiAgY2xlYW5BbGVydChyZWZlcmVuY2lhKTtcclxuXHJcbiAgLy8gR2VuZXJhciBsYXMgYWxlcnRhc1xyXG4gIGNvbnN0IGVycm9yID0gcmVmZXJlbmNpYS5xdWVyeVNlbGVjdG9yKGAuZm9ybV9fZmllbGRgKTtcclxuXHJcbiAgZXJyb3IuY2xhc3NMaXN0LmFkZChgZm9ybV9fZmllbGQtLWVycm9yYCk7XHJcbiAgZXJyb3IucGxhY2Vob2xkZXIgPSBtZW5zYWplO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhbkFsZXJ0KHJlZmVyZW5jaWEpIHtcclxuICAvLyBDb21wcm9iYXIgc2kgZXhpc3RlIGxhIGFsZXJ0YVxyXG4gIGNvbnN0IGFsZXJ0YSA9IHJlZmVyZW5jaWEucXVlcnlTZWxlY3RvcihgLmZvcm1fX2ZpZWxkLS1lcnJvcmApO1xyXG5cclxuICBpZiAoYWxlcnRhKSB7XHJcbiAgICBhbGVydGEuY2xhc3NMaXN0LnJlbW92ZShgZm9ybV9fZmllbGQtLWVycm9yYCk7XHJcbiAgICBhbGVydGEucGxhY2Vob2xkZXIgPSBgSW5ncmVzYSB0dSAke2FsZXJ0YS5uYW1lfWA7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGFyRW1haWwoZW1haWwpIHtcclxuICBjb25zdCByZWdleEVtYWlsID0gL15cXHcrKFsuLV8rXT9cXHcrKSpAXFx3KyhbLi1dP1xcdyspKihcXC5cXHd7MiwxMH0pKyQvO1xyXG4gIGNvbnN0IHJlc3VsdGFkb0VtYWlsID0gcmVnZXhFbWFpbC50ZXN0KGVtYWlsKTtcclxuXHJcbiAgcmV0dXJuIHJlc3VsdGFkb0VtYWlsO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGFyVGVsKHRlbCkge1xyXG4gIGNvbnN0IHJlZ2V4VGVsID0gL14oXFwrNTJ8MDA1Mnw1Mik/WyAtXSpbIC1dKihbMC05XVsgLV0qKXsxMH0vO1xyXG4gIGNvbnN0IHJlc3VsdGFkb1RlbCA9IHJlZ2V4VGVsLnRlc3QodGVsKTtcclxuXHJcbiAgcmV0dXJuIHJlc3VsdGFkb1RlbDtcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcHJvYmFyRW1haWwoKSB7XHJcbiAgY29uc3QgYnRuU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2J0blN1Ym1pdGApO1xyXG5cclxuICBpZiAoT2JqZWN0LnZhbHVlcyhlbWFpbCkuaW5jbHVkZXMoYGApKSB7XHJcbiAgICBidG5TdWJtaXQuZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGJ0blN1Ym1pdC5kaXNhYmxlZCA9IGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZW5kRW1haWwoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgY29uc3Qgc3Bpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzcGlubmVyYCk7XHJcblxyXG4gIHNwaW5uZXIuY2xhc3NMaXN0LmFkZChgZm9ybV9fc3Bpbm5lci0tYWN0aXZvYCk7XHJcbiAgc3Bpbm5lci5jbGFzc0xpc3QucmVtb3ZlKGBmb3JtX19zcGlubmVyYCk7XHJcblxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgc3Bpbm5lci5jbGFzc0xpc3QucmVtb3ZlKGBmb3JtX19zcGlubmVyLS1hY3Rpdm9gKTtcclxuICAgIHNwaW5uZXIuY2xhc3NMaXN0LmFkZChgZm9ybV9fc3Bpbm5lcmApO1xyXG5cclxuICAgIC8vIFJlaW5pY2lhciBlbCBmb3JtdWxhcmlvXHJcbiAgICByZXNldEZvcm0oKTtcclxuXHJcbiAgICAvLyBDcmVhciBhbGVydGEgZGUgZXhpdG9cclxuICAgIGNvbnN0IGFsZXJ0YUV4aXRvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgUGApO1xyXG4gICAgYWxlcnRhRXhpdG8uY2xhc3NMaXN0LmFkZChgZm9ybV9fZXhpdG9gKTtcclxuICAgIGFsZXJ0YUV4aXRvLnRleHRDb250ZW50ID0gXCJNZW5zYWplIGVudsOtYWRvIGV4aXRvc2FtZW50ZVwiO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChhbGVydGFFeGl0byk7XHJcblxyXG4gICAgLy8gRWxpbWluYXIgbGEgYWxlcnRhIGRlc3B1ZXMgZGUgbW9zdHJhcmxhXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgYWxlcnRhRXhpdG8ucmVtb3ZlKCk7XHJcbiAgICB9LCAyMDAwKTtcclxuICB9LCAzMDAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xyXG4gIC8vIFJlaW5pY2lhciBlbCBvYmpldG9cclxuICBlbWFpbC5ub21icmUgPSBgYDtcclxuICBlbWFpbC5lbWFpbCA9IGBgO1xyXG4gIGVtYWlsLnRlbGVmb25vID0gYGA7XHJcblxyXG4gIGZvcm0ucmVzZXQoKTtcclxuXHJcbiAgY29tcHJvYmFyRW1haWwoKTtcclxufVxyXG4iXX0=
