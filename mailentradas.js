const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const Enviar = document.getElementById('button');






    const btn = document.getElementById('button');

    document.getElementById('form')
     .addEventListener('submit', function(event) {
       event.preventDefault();
    
       btn.value = 'Enviando solicitud...';
    
       const serviceID = 'default_service';
       const templateID = 'template_f46vb4a';
    
       emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = 'Send Email';
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Un miembro de nuestro equipo se comunicara con usted!",
            showConfirmButton: false,
            timer: 1500,
          });
        }, (err) => {
          btn.value = 'Send Email';
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Surgio un problema!",
          });
        });
    });
  
 