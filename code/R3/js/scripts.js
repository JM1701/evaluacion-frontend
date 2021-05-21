/* Variables */
const body = document.querySelector("body");
const btnModal = document.querySelector("#btn-modal");
const btnModalClose = document.querySelector(".btn-modal-close");
const modal = document.querySelector(".modal");
const modalWrapper = document.querySelector(".modal-wrapper");
const video = document.querySelector("video");

/* Event Listeners */
btnModal.addEventListener("click", mostrarModal); //Evento click sobre el botón que abre el modal
btnModalClose.addEventListener("click", ocultarModal); //Evento click sobre el botón que cierra el modal

/* Función que muestra el modal */
function mostrarModal() {
  modal.style.display = "flex"; //Agrega el estilo display: flex al modal
  
  modalWrapper.classList.remove("hide-modal"); //Elimina la clase hide-modal al modal wrapper
  
  modalWrapper.classList.add("show-modal"); //Agrega la clase show-modal al modal wrapper
  
  body.style.overflowY = "hidden"; //Bloquea el scroll del body cuando el modal está activo

  // Contador que reproduce el video del modal 1 segundo después qye éste es llamado por el usuario
  setTimeout(() => {
    video.play(); //Reproduce el video luego que el modal está abierto
  }, 1000);
}

/* Función que oculta el modal */
function ocultarModal() {
  modalWrapper.classList.remove("show-modal"); //Elimina la clase show-modal del modal wrapper

  modalWrapper.classList.add("hide-modal"); //Agrega la clase hide-modal al modal wrapper

  body.style.overflowY = "auto"; //Desbloquea el scroll del body una vez que el modal se cierra

  video.pause(); //Pausa el video si se está reproduciendo y el modal es cerrado por el usuario

  // Contador que agrega el estilo display: none al modal luego de transcurrida la transición que oculta el modal
  setTimeout(() => {
    modal.style.display = "none";
  }, 250);
}

