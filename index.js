let buttondedatos = document.getElementById("botondeentradas");
let input500 = document.getElementById("500");
let input400 = document.getElementById("400");
let input350 = document.getElementById("350");
let contenedordecantidad = document.getElementById("contenedordecantidad");

resgistrodeclick();
function resgistrodeclick() {
  buttondedatos.addEventListener("click", guardardatos1);
}
cantidaddeclick = 0;
function contadordeclick() {
  cantidaddeclick++;
}
function guardardatos1(e) {
  e.preventDefault();

  if (cantidaddeclick === 0) {
    let itemt500 = input500.value;
    let itemt400 = input400.value;
    let itemt350 = input350.value;

    creadordedatos(itemt500, itemt400, itemt350);
  }
  function creadordedatos(itemt500, itemt400, itemt350) {
    let datos = document.createElement("h3");
    let datos1 = document.createElement("h3");
    let datos2 = document.createElement("h3");
    let datos3 = document.createElement("h3");
    datos.innerHTML = `<h3 class= "h3dejs" >Total a pagar de entradas de adultos :$${
      itemt500 * 500
    } </h3>`;
    datos1.innerHTML = `<h3 class= "h3dejs" >Total a pagar de entradas de menores de 18 :$${
      itemt400 * 400
    } </h3>`;
    datos2.innerHTML = `<h3 class= "h3dejs" >Total a pagar de entradas de menores de 10:$${
      itemt350 * 350
    } </h3>`;
    datos3.innerHTML = `<h3 class= "h3dejs , totaldejs" >Total a pagar de entradas $${
      itemt500 * 500 + itemt400 * 400 + itemt350 * 350
    }</{h3>`;

    contenedordecantidad.appendChild(datos);
    contenedordecantidad.appendChild(datos1);
    contenedordecantidad.appendChild(datos2);
    contenedordecantidad.appendChild(datos3);

    contadordeclick();
  }
}
