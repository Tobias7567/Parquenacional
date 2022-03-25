const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const textarea = document.getElementById("consulta");
const Enviar = document.getElementById("button");

Enviar.addEventListener("click", mostrarcartel);

function mostrarcartel(e) {
  e.preventDefault();
  if ( 
    nombre.value != "" &&
    apellido.value != "" &&
    correo.value != "" &&
    telefono.value != "" &&
    textarea.value != ""
  ) {
    const btn = document.getElementById("button");

    document
      .getElementById("form")
      .addEventListener("submit", function (event) {
        event.preventDefault();

        btn.value = "Sending...";

        const serviceID = "default_service";
        const templateID = "template_jm55ecj";

        emailjs.sendForm(serviceID, templateID, this).then(
          () => {
            btn.value = "Send Email";
            alert("Sent!");
          },
          (err) => {
            btn.value = "Send Email";
            alert(JSON.stringify(err));
          }
        );
      });
  } else {
    alert("hola")
  }
}
