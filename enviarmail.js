




    const btn = document.getElementById("button");

    document
      .getElementById("form")
      .addEventListener("submit", function (event) {
        event.preventDefault();

        btn.value = "Enviando...";

        const serviceID = "default_service";
        const templateID = "template_jm55ecj";

        emailjs.sendForm(serviceID, templateID, this).then(
          () => {
            btn.value = "Send Email";
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Su consulta fue enviada!",
              showConfirmButton: false,
              timer: 1500,
            });
          },
          (err) => {
            btn.value = "Send Email";
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Surgio un problema!",
            });
          }
        );
      });
 
