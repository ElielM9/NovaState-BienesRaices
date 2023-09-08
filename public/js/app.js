const hamburguer=document.querySelector(".hamburguer"),email={nombre:"",email:"",telefono:""},emailNewsletter={emailNews:""},formHeader=document.querySelector("#formHeader"),inputName=document.querySelector("#name"),inputEmail=document.querySelector("#email"),inputTel=document.querySelector("#tel"),formNewsletter=document.querySelector("#formNewsletter"),inputEmailNews=document.querySelector("#emailNews");function eventListeners(){hamburguer.addEventListener("click",openCloseNav),inputName.addEventListener("input",validar),inputEmail.addEventListener("input",validar),inputTel.addEventListener("input",validar),inputEmailNews.addEventListener("input",validar),formHeader.addEventListener("submit",sendEmail),formNewsletter.addEventListener("submit",sendEmail)}function openCloseNav(){const e=document.querySelector(".nav");e.classList.toggle("nav--activo"),closeNavOnClick(e)}function closeNavOnClick(e){document.querySelectorAll(".nav__link").forEach((t,i)=>{t.addEventListener("click",t=>{t.preventDefault();document.querySelector(t.target.attributes.href.value).scrollIntoView({behavior:"smooth"});"A"===t.target.tagName&&e.classList.remove("nav--activo")})}),window.addEventListener("click",t=>{const i=t.target.parentElement;e.classList.contains("nav--activo")&&i!==hamburguer&&e.classList.remove("nav--activo")})}function validar(e){const t=e.target,i=t.parentElement,r=t.name,l=t.value.trim().toLowerCase();return""===l&&"emailNews"!==r?(showAlert(`El ${r} es obligatorio`,i),email[r]="",void checkEmail()):"email"!==r||isValidEmail(l)?"telefono"!==r||isValidTel(l)?"emailNews"!==r||isValidEmail(l)?(cleanAlert(i),email[r]=l,emailNewsletter[r]=l,console.log(email),checkEmail(),void checkEmailNewsletter()):(showAlert("El email es invalido",i),delete email.emailNews,emailNewsletter[r]="",void checkEmailNewsletter()):(showAlert("El teléfono es inválido",i),email[r]="",void checkEmail()):(showAlert("El email es inválido",i),email[r]="",void checkEmail())}function showAlert(e,t){cleanAlert(t);const i=t.querySelector(".form__field");i.classList.add("form__field--error"),i.placeholder=e}function cleanAlert(e){const t=e.querySelector(".form__field--error");t&&(t.classList.remove("form__field--error"),t.placeholder="Ingresa tu "+t.name)}function isValidEmail(e){return/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(e)}function isValidTel(e){return/^(\+52|0052|52)?[ -]*[ -]*([0-9][ -]*){10}/.test(e)}function checkEmail(){const e=document.querySelector("#btnSubmit");Object.values(email).includes("")?e.disabled=!0:e.disabled=!1}function checkEmailNewsletter(){const e=document.querySelector("#btnSubscribe");Object.values(emailNewsletter).includes("")?e.disabled=!0:e.disabled=!1}function sendEmail(e){e.preventDefault();const t=e.target;if("formHeader"===t.id){const e=document.querySelector("#spinner");return e.classList.add("form__spinner--activo"),e.classList.remove("form__spinner"),void setTimeout(()=>{e.classList.remove("form__spinner--activo"),e.classList.add("form__spinner"),resetForm();const t=document.createElement("P");t.classList.add("form__exito"),t.textContent="Mensaje envíado exitosamente",formHeader.appendChild(t),setTimeout(()=>{t.remove()},2e3)},3e3)}if("formNewsletter"===t.id){const e=document.querySelector("#spinnerNews");return e.classList.add("form__spinner--activo"),e.classList.remove("form__spinner"),void setTimeout(()=>{e.classList.remove("form__spinner--activo"),e.classList.add("form__spinner"),resetForm();const t=document.createElement("P");t.classList.add("form__exito"),t.textContent="Gracias por suscribirte",formNewsletter.appendChild(t),setTimeout(()=>{t.remove()},2e3)},3e3)}}function resetForm(){email.nombre="",email.email="",email.telefono="",emailNewsletter.emailNews="",formHeader.reset(),formNewsletter.reset(),checkEmail(),checkEmailNewsletter()}document.addEventListener("DOMContentLoaded",eventListeners);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJoYW1idXJndWVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZW1haWwiLCJub21icmUiLCJ0ZWxlZm9ubyIsImVtYWlsTmV3c2xldHRlciIsImVtYWlsTmV3cyIsImZvcm1IZWFkZXIiLCJpbnB1dE5hbWUiLCJpbnB1dEVtYWlsIiwiaW5wdXRUZWwiLCJmb3JtTmV3c2xldHRlciIsImlucHV0RW1haWxOZXdzIiwiZXZlbnRMaXN0ZW5lcnMiLCJhZGRFdmVudExpc3RlbmVyIiwib3BlbkNsb3NlTmF2IiwidmFsaWRhciIsInNlbmRFbWFpbCIsIm5hdiIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNsb3NlTmF2T25DbGljayIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWFjaExpbmsiLCJpbmRleCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImF0dHJpYnV0ZXMiLCJocmVmIiwidmFsdWUiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwidGFnTmFtZSIsInJlbW92ZSIsIndpbmRvdyIsInJlZmVyZW5jaWEiLCJwYXJlbnRFbGVtZW50IiwiY29udGFpbnMiLCJpbnB1dCIsInJlZmVyZW5jZSIsImZpZWxkTmFtZSIsIm5hbWUiLCJmaWVsZFZhbHVlIiwidHJpbSIsInRvTG93ZXJDYXNlIiwic2hvd0FsZXJ0IiwiY2hlY2tFbWFpbCIsImlzVmFsaWRFbWFpbCIsImlzVmFsaWRUZWwiLCJjbGVhbkFsZXJ0IiwiY29uc29sZSIsImxvZyIsImNoZWNrRW1haWxOZXdzbGV0dGVyIiwibWVuc2FqZSIsImVycm9yIiwiYWRkIiwicGxhY2Vob2xkZXIiLCJpc0FjdGl2ZUFsZXJ0IiwidGVzdCIsInRlbCIsImJ0blN1Ym1pdCIsIk9iamVjdCIsInZhbHVlcyIsImluY2x1ZGVzIiwiZGlzYWJsZWQiLCJidG5TdWJzY3JpYmUiLCJpZCIsInNwaW5uZXIiLCJzZXRUaW1lb3V0IiwicmVzZXRGb3JtIiwiYWxlcnRhRXhpdG8iLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsInNwaW5uZXJOZXdzIiwicmVzZXQiXSwibWFwcGluZ3MiOiJBQUNBLE1BQU1BLFdBQWFDLFNBQVNDLGNBQWMsZUFJcENDLE1BQVEsQ0FDWkMsT0FBUSxHQUNSRCxNQUFPLEdBQ1BFLFNBQVUsSUFHTkMsZ0JBQWtCLENBQ3RCQyxVQUFXLElBR1BDLFdBQWFQLFNBQVNDLGNBQWMsZUFDcENPLFVBQVlSLFNBQVNDLGNBQWMsU0FDbkNRLFdBQWFULFNBQVNDLGNBQWMsVUFDcENTLFNBQVdWLFNBQVNDLGNBQWMsUUFDbENVLGVBQWlCWCxTQUFTQyxjQUFjLG1CQUN4Q1csZUFBaUJaLFNBQVNDLGNBQWMsY0FNOUMsU0FBU1ksaUJBRVBkLFdBQVdlLGlCQUFpQixRQUFTQyxjQUdyQ1AsVUFBVU0saUJBQWlCLFFBQVNFLFNBQ3BDUCxXQUFXSyxpQkFBaUIsUUFBU0UsU0FDckNOLFNBQVNJLGlCQUFpQixRQUFTRSxTQUNuQ0osZUFBZUUsaUJBQWlCLFFBQVNFLFNBQ3pDVCxXQUFXTyxpQkFBaUIsU0FBVUcsV0FDdENOLGVBQWVHLGlCQUFpQixTQUFVRyxXQUs1QyxTQUFTRixlQUNQLE1BQU1HLEVBQU1sQixTQUFTQyxjQUFjLFFBRW5DaUIsRUFBSUMsVUFBVUMsT0FBTyxlQUVyQkMsZ0JBQWdCSCxHQUdsQixTQUFTRyxnQkFBZ0JILEdBQ05sQixTQUFTc0IsaUJBQWlCLGNBRWxDQyxRQUFRLENBQUNDLEVBQVVDLEtBQzFCRCxFQUFTVixpQkFBaUIsUUFBVVksSUFDbENBLEVBQUVDLGlCQUdjM0IsU0FBU0MsY0FBY3lCLEVBQUVFLE9BQU9DLFdBQVdDLEtBQUtDLE9BQ3hEQyxlQUFlLENBQUVDLFNBQVUsV0FHcEIsTUFDWFAsRUFBRUUsT0FBT00sU0FDWGhCLEVBQUlDLFVBQVVnQixPQUFPLG1CQU0zQkMsT0FBT3RCLGlCQUFpQixRQUFVWSxJQUVoQyxNQUFNVyxFQUFhWCxFQUFFRSxPQUFPVSxjQU14QnBCLEVBQUlD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QUFXLEtBQ1RFLEVBQVlyQyxVQUNYLE1BQ0YsTUFNUCxTQUFTb0MsWUFFUHJFLE1BQU1DLE9BQVMsR0FDZkQsTUFBTUEsTUFBUSxHQUNkQSxNQUFNRSxTQUFXLEdBRWpCQyxnQkFBZ0JDLFVBQVksR0FHNUJDLFdBQVdzRSxRQUNYbEUsZUFBZWtFLFFBR2Y3QixhQUNBTSx1QkE1UEZ0RCxTQUFTYyxpQkFBaUIsbUJBQW9CRCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBWYXJpYWJsZXMgTmF2XHJcbmNvbnN0IGhhbWJ1cmd1ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuaGFtYnVyZ3VlcmApO1xyXG5cclxuLy8gVmFyaWFibGVzIGZvcm11bGFyaW9cclxuXHJcbmNvbnN0IGVtYWlsID0ge1xyXG4gIG5vbWJyZTogYGAsXHJcbiAgZW1haWw6IGBgLFxyXG4gIHRlbGVmb25vOiBgYCxcclxufTtcclxuXHJcbmNvbnN0IGVtYWlsTmV3c2xldHRlciA9IHtcclxuICBlbWFpbE5ld3M6IGBgLFxyXG59O1xyXG5cclxuY29uc3QgZm9ybUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNmb3JtSGVhZGVyYCk7XHJcbmNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNuYW1lYCk7XHJcbmNvbnN0IGlucHV0RW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZW1haWxgKTtcclxuY29uc3QgaW5wdXRUZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGVsYCk7XHJcbmNvbnN0IGZvcm1OZXdzbGV0dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2Zvcm1OZXdzbGV0dGVyYCk7XHJcbmNvbnN0IGlucHV0RW1haWxOZXdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2VtYWlsTmV3c2ApO1xyXG5cclxuLy8gRXZlbnRvc1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihgRE9NQ29udGVudExvYWRlZGAsIGV2ZW50TGlzdGVuZXJzKTtcclxuXHJcbmZ1bmN0aW9uIGV2ZW50TGlzdGVuZXJzKCkge1xyXG4gIC8vIEFicmlyIHkgY2VycmFyIG5hdlxyXG4gIGhhbWJ1cmd1ZXIuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBvcGVuQ2xvc2VOYXYpO1xyXG5cclxuICAvLyBWYWxpZGFjaW9uIGZvcm11bGFyaW9cclxuICBpbnB1dE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihgaW5wdXRgLCB2YWxpZGFyKTtcclxuICBpbnB1dEVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoYGlucHV0YCwgdmFsaWRhcik7XHJcbiAgaW5wdXRUZWwuYWRkRXZlbnRMaXN0ZW5lcihgaW5wdXRgLCB2YWxpZGFyKTtcclxuICBpbnB1dEVtYWlsTmV3cy5hZGRFdmVudExpc3RlbmVyKGBpbnB1dGAsIHZhbGlkYXIpO1xyXG4gIGZvcm1IZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihgc3VibWl0YCwgc2VuZEVtYWlsKTtcclxuICBmb3JtTmV3c2xldHRlci5hZGRFdmVudExpc3RlbmVyKGBzdWJtaXRgLCBzZW5kRW1haWwpO1xyXG59XHJcblxyXG4vLyBGdW5jaW9uZXNcclxuXHJcbmZ1bmN0aW9uIG9wZW5DbG9zZU5hdigpIHtcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubmF2YCk7XHJcblxyXG4gIG5hdi5jbGFzc0xpc3QudG9nZ2xlKGBuYXYtLWFjdGl2b2ApO1xyXG5cclxuICBjbG9zZU5hdk9uQ2xpY2sobmF2KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VOYXZPbkNsaWNrKG5hdikge1xyXG4gIGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLm5hdl9fbGlua2ApO1xyXG5cclxuICBuYXZMaW5rcy5mb3JFYWNoKChlYWNoTGluaywgaW5kZXgpID0+IHtcclxuICAgIGVhY2hMaW5rLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgLy8gU2Nyb2xsIGFsIGRhciBjbGljayBlbiB1biBlbGVtZW50b1xyXG4gICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlLnRhcmdldC5hdHRyaWJ1dGVzLmhyZWYudmFsdWUpO1xyXG4gICAgICBzZWN0aW9uLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IGBzbW9vdGhgIH0pO1xyXG5cclxuICAgICAgLy8gQ2VycmFyIGVsIG1lbnUgc2kgc2UgbGUgZGEgY2xpY2sgYSB1biBlbmxhY2VcclxuICAgICAgY29uc3QgYW5jaG9yID0gYEFgO1xyXG4gICAgICBpZiAoZS50YXJnZXQudGFnTmFtZSA9PT0gYW5jaG9yKSB7XHJcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoYG5hdi0tYWN0aXZvYCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyBFamVjdXRhIGVsIGV2ZW50byBgY2xpY2tgIGVuIGxhIHZlbnRhbmEgd2luZG93IGRlbCBuYXZlZ2Fkb3JcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAvLyBPYnRlbmVyIGVsIGVsZW1lbnRvIHBhZHJlIGRlbCBlbGVtZW50byBlbiBlbCBxdWUgc2UgaGl6byBjbGljLlxyXG4gICAgY29uc3QgcmVmZXJlbmNpYSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgLyogMS4gQ29tcHJvYmFyIHNpIGVsIGVsZW1lbnRvIG5hdiB0aWVuZSBsYSBjbGFzZSAnbmF2LS1hY3Rpdm8nLlxyXG4gICAgICAgMi4gQ29tcHJvYmFyIHNpIGVsIGVsZW1lbnRvIHBhZHJlIGRlbCBlbGVtZW50byBlbiBlbCBxdWUgc2UgaGl6byBjbGljIG5vIGVzIGlndWFsIGFsIGVsZW1lbnRvIGNvbiBsYSBjbGFzZSAnaGFtYnVyZ3VlcicuXHJcbiAgICAgICBTaSB0b2RhcyBsYXMgY29uZGljaW9uZXMgc2UgY3VtcGxlbiwgYWx0ZXJuYXIgbGEgcHJlc2VuY2lhIGRlIGxhIGNsYXNlICduYXYtLWFjdGl2bycgZW4gZWwgZWxlbWVudG8gJ25hdicuXHJcbiAgICAqL1xyXG4gICAgaWYgKG5hdi5jbGFzc0xpc3QuY29udGFpbnMoYG5hdi0tYWN0aXZvYCkgJiYgcmVmZXJlbmNpYSAhPT0gaGFtYnVyZ3Vlcikge1xyXG4gICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZShgbmF2LS1hY3Rpdm9gKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhcihlKSB7XHJcbiAgY29uc3QgZW1wdHkgPSBgYDtcclxuICBjb25zdCBpbnB1dCA9IGUudGFyZ2V0O1xyXG4gIGNvbnN0IHJlZmVyZW5jZSA9IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcbiAgY29uc3QgZmllbGROYW1lID0gaW5wdXQubmFtZTtcclxuICBjb25zdCBmaWVsZFZhbHVlID0gaW5wdXQudmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gIC8vIEFsZXJ0YSBzaSB1biBmaWVsZCBlc3TDoSB2YWNpb1xyXG4gIGlmIChmaWVsZFZhbHVlID09PSBlbXB0eSAmJiBmaWVsZE5hbWUgIT09IGBlbWFpbE5ld3NgKSB7XHJcbiAgICBzaG93QWxlcnQoYEVsICR7ZmllbGROYW1lfSBlcyBvYmxpZ2F0b3Jpb2AsIHJlZmVyZW5jZSk7XHJcbiAgICBlbWFpbFtmaWVsZE5hbWVdID0gYGA7XHJcbiAgICBjaGVja0VtYWlsKCk7XHJcblxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gVmFsaWRhciBlbCBlbWFpbFxyXG4gIGlmIChmaWVsZE5hbWUgPT09IGBlbWFpbGAgJiYgIWlzVmFsaWRFbWFpbChmaWVsZFZhbHVlKSkge1xyXG4gICAgc2hvd0FsZXJ0KGBFbCBlbWFpbCBlcyBpbnbDoWxpZG9gLCByZWZlcmVuY2UpO1xyXG4gICAgZW1haWxbZmllbGROYW1lXSA9IGBgO1xyXG4gICAgY2hlY2tFbWFpbCgpO1xyXG5cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIFZhbGlkYXIgZWwgdGVsZWZvbm9cclxuICBpZiAoZmllbGROYW1lID09PSBgdGVsZWZvbm9gICYmICFpc1ZhbGlkVGVsKGZpZWxkVmFsdWUpKSB7XHJcbiAgICBzaG93QWxlcnQoYEVsIHRlbMOpZm9ubyBlcyBpbnbDoWxpZG9gLCByZWZlcmVuY2UpO1xyXG4gICAgZW1haWxbZmllbGROYW1lXSA9IGBgO1xyXG4gICAgY2hlY2tFbWFpbCgpO1xyXG5cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmIChmaWVsZE5hbWUgPT09IGBlbWFpbE5ld3NgICYmICFpc1ZhbGlkRW1haWwoZmllbGRWYWx1ZSkpIHtcclxuICAgIHNob3dBbGVydChgRWwgZW1haWwgZXMgaW52YWxpZG9gLCByZWZlcmVuY2UpO1xyXG4gICAgZGVsZXRlIGVtYWlsLmVtYWlsTmV3cztcclxuICAgIGVtYWlsTmV3c2xldHRlcltmaWVsZE5hbWVdID0gYGA7XHJcbiAgICBjaGVja0VtYWlsTmV3c2xldHRlcigpO1xyXG5cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNsZWFuQWxlcnQocmVmZXJlbmNlKTtcclxuXHJcbiAgLy8gTGxlbmFyIGxvcyBvYmpldG9zIGBFbWFpbGAgeSBgRW1haWxOZXdzbGV0dGVyYFxyXG4gIC8vIEVycm9yIGFxdcOtXHJcbiAgZW1haWxbZmllbGROYW1lXSA9IGZpZWxkVmFsdWU7XHJcbiAgZW1haWxOZXdzbGV0dGVyW2ZpZWxkTmFtZV0gPSBmaWVsZFZhbHVlO1xyXG5cclxuICBjb25zb2xlLmxvZyhlbWFpbCk7XHJcbiAgLy8gY29uc29sZS5sb2coZW1haWxOZXdzbGV0dGVyKTtcclxuXHJcbiAgLy8gUmV2aXNhciBsb3Mgb2JqZXRvcyBgRW1haWxgIHkgYEVtYWlsTmV3c2xldHRlcmBcclxuICBjaGVja0VtYWlsKCk7XHJcbiAgY2hlY2tFbWFpbE5ld3NsZXR0ZXIoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0FsZXJ0KG1lbnNhamUsIHJlZmVyZW5jZSkge1xyXG4gIGNsZWFuQWxlcnQocmVmZXJlbmNlKTtcclxuXHJcbiAgLy8gR2VuZXJhciBsYXMgYWxlcnRhc1xyXG4gIGNvbnN0IGVycm9yID0gcmVmZXJlbmNlLnF1ZXJ5U2VsZWN0b3IoYC5mb3JtX19maWVsZGApO1xyXG5cclxuICBlcnJvci5jbGFzc0xpc3QuYWRkKGBmb3JtX19maWVsZC0tZXJyb3JgKTtcclxuICBlcnJvci5wbGFjZWhvbGRlciA9IG1lbnNhamU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFuQWxlcnQocmVmZXJlbmNlKSB7XHJcbiAgLy8gQ29tcHJvYmFyIHNpIGV4aXN0ZSBsYSBhbGVydGFcclxuICBjb25zdCBpc0FjdGl2ZUFsZXJ0ID0gcmVmZXJlbmNlLnF1ZXJ5U2VsZWN0b3IoYC5mb3JtX19maWVsZC0tZXJyb3JgKTtcclxuXHJcbiAgaWYgKGlzQWN0aXZlQWxlcnQpIHtcclxuICAgIGlzQWN0aXZlQWxlcnQuY2xhc3NMaXN0LnJlbW92ZShgZm9ybV9fZmllbGQtLWVycm9yYCk7XHJcbiAgICBpc0FjdGl2ZUFsZXJ0LnBsYWNlaG9sZGVyID0gYEluZ3Jlc2EgdHUgJHtpc0FjdGl2ZUFsZXJ0Lm5hbWV9YDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzVmFsaWRFbWFpbChlbWFpbCkge1xyXG4gIGNvbnN0IHJlZ2V4RW1haWwgPSAvXlxcdysoWy4tXytdP1xcdyspKkBcXHcrKFsuLV0/XFx3KykqKFxcLlxcd3syLDEwfSkrJC87XHJcbiAgY29uc3QgcmVzdWx0RW1haWwgPSByZWdleEVtYWlsLnRlc3QoZW1haWwpO1xyXG5cclxuICByZXR1cm4gcmVzdWx0RW1haWw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzVmFsaWRUZWwodGVsKSB7XHJcbiAgY29uc3QgcmVnZXhUZWwgPSAvXihcXCs1MnwwMDUyfDUyKT9bIC1dKlsgLV0qKFswLTldWyAtXSopezEwfS87XHJcbiAgY29uc3QgcmVzdWx0VGVsID0gcmVnZXhUZWwudGVzdCh0ZWwpO1xyXG5cclxuICByZXR1cm4gcmVzdWx0VGVsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0VtYWlsKCkge1xyXG4gIGNvbnN0IGJ0blN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNidG5TdWJtaXRgKTtcclxuXHJcbiAgaWYgKE9iamVjdC52YWx1ZXMoZW1haWwpLmluY2x1ZGVzKGBgKSkge1xyXG4gICAgYnRuU3VibWl0LmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBidG5TdWJtaXQuZGlzYWJsZWQgPSBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tFbWFpbE5ld3NsZXR0ZXIoKSB7XHJcbiAgY29uc3QgYnRuU3Vic2NyaWJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2J0blN1YnNjcmliZWApO1xyXG5cclxuICBpZiAoT2JqZWN0LnZhbHVlcyhlbWFpbE5ld3NsZXR0ZXIpLmluY2x1ZGVzKGBgKSkge1xyXG4gICAgYnRuU3Vic2NyaWJlLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGJ0blN1YnNjcmliZS5kaXNhYmxlZCA9IGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZW5kRW1haWwoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgY29uc3QgaW5wdXQgPSBlLnRhcmdldDtcclxuXHJcbiAgaWYgKGlucHV0LmlkID09PSBgZm9ybUhlYWRlcmApIHtcclxuICAgIGNvbnN0IHNwaW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc3Bpbm5lcmApO1xyXG5cclxuICAgIHNwaW5uZXIuY2xhc3NMaXN0LmFkZChgZm9ybV9fc3Bpbm5lci0tYWN0aXZvYCk7XHJcbiAgICBzcGlubmVyLmNsYXNzTGlzdC5yZW1vdmUoYGZvcm1fX3NwaW5uZXJgKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc3Bpbm5lci5jbGFzc0xpc3QucmVtb3ZlKGBmb3JtX19zcGlubmVyLS1hY3Rpdm9gKTtcclxuICAgICAgc3Bpbm5lci5jbGFzc0xpc3QuYWRkKGBmb3JtX19zcGlubmVyYCk7XHJcblxyXG4gICAgICAvLyBSZWluaWNpYXIgZWwgZm9ybXVsYXJpb1xyXG4gICAgICByZXNldEZvcm0oKTtcclxuXHJcbiAgICAgIC8vIENyZWFyIGFsZXJ0YSBkZSBleGl0b1xyXG4gICAgICBjb25zdCBhbGVydGFFeGl0byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYFBgKTtcclxuICAgICAgYWxlcnRhRXhpdG8uY2xhc3NMaXN0LmFkZChgZm9ybV9fZXhpdG9gKTtcclxuICAgICAgYWxlcnRhRXhpdG8udGV4dENvbnRlbnQgPSBcIk1lbnNhamUgZW52w61hZG8gZXhpdG9zYW1lbnRlXCI7XHJcblxyXG4gICAgICBmb3JtSGVhZGVyLmFwcGVuZENoaWxkKGFsZXJ0YUV4aXRvKTtcclxuXHJcbiAgICAgIC8vIEVsaW1pbmFyIGxhIGFsZXJ0YSBkZXNwdWVzIGRlIG1vc3RyYXJsYVxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBhbGVydGFFeGl0by5yZW1vdmUoKTtcclxuICAgICAgfSwgMjAwMCk7XHJcbiAgICB9LCAzMDAwKTtcclxuXHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAoaW5wdXQuaWQgPT09IGBmb3JtTmV3c2xldHRlcmApIHtcclxuICAgIGNvbnN0IHNwaW5uZXJOZXdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NwaW5uZXJOZXdzYCk7XHJcblxyXG4gICAgc3Bpbm5lck5ld3MuY2xhc3NMaXN0LmFkZChgZm9ybV9fc3Bpbm5lci0tYWN0aXZvYCk7XHJcbiAgICBzcGlubmVyTmV3cy5jbGFzc0xpc3QucmVtb3ZlKGBmb3JtX19zcGlubmVyYCk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNwaW5uZXJOZXdzLmNsYXNzTGlzdC5yZW1vdmUoYGZvcm1fX3NwaW5uZXItLWFjdGl2b2ApO1xyXG4gICAgICBzcGlubmVyTmV3cy5jbGFzc0xpc3QuYWRkKGBmb3JtX19zcGlubmVyYCk7XHJcblxyXG4gICAgICAvLyBSZWluaWNpYXIgZWwgZm9ybXVsYXJpb1xyXG4gICAgICByZXNldEZvcm0oKTtcclxuXHJcbiAgICAgIC8vIENyZWFyIGFsZXJ0YSBkZSBleGl0b1xyXG4gICAgICBjb25zdCBhbGVydGFFeGl0byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYFBgKTtcclxuICAgICAgYWxlcnRhRXhpdG8uY2xhc3NMaXN0LmFkZChgZm9ybV9fZXhpdG9gKTtcclxuICAgICAgYWxlcnRhRXhpdG8udGV4dENvbnRlbnQgPSBgR3JhY2lhcyBwb3Igc3VzY3JpYmlydGVgO1xyXG5cclxuICAgICAgZm9ybU5ld3NsZXR0ZXIuYXBwZW5kQ2hpbGQoYWxlcnRhRXhpdG8pO1xyXG5cclxuICAgICAgLy8gRWxpbWluYXIgbGEgYWxlcnRhIGRlc3B1ZXMgZGUgbW9zdHJhcmxhXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGFsZXJ0YUV4aXRvLnJlbW92ZSgpO1xyXG4gICAgICB9LCAyMDAwKTtcclxuICAgIH0sIDMwMDApO1xyXG5cclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcclxuICAvLyBSZWluaWNpYXIgbG9zIG9iamV0b3NcclxuICBlbWFpbC5ub21icmUgPSBgYDtcclxuICBlbWFpbC5lbWFpbCA9IGBgO1xyXG4gIGVtYWlsLnRlbGVmb25vID0gYGA7XHJcblxyXG4gIGVtYWlsTmV3c2xldHRlci5lbWFpbE5ld3MgPSBgYDtcclxuXHJcbiAgLy8gUmVpbmljaWFyIGxvcyBmb3JtdWxhcmlvc1xyXG4gIGZvcm1IZWFkZXIucmVzZXQoKTtcclxuICBmb3JtTmV3c2xldHRlci5yZXNldCgpO1xyXG5cclxuICAvLyBDb21wcm9iYXIgZWwgYEVtYWlsYCBlIGBFbWFpbE5ld3NgXHJcbiAgY2hlY2tFbWFpbCgpO1xyXG4gIGNoZWNrRW1haWxOZXdzbGV0dGVyKCk7XHJcbn1cclxuIl19
