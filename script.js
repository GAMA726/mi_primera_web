//alert("Hola este es mi Javascript");
let nombre = "Antonio";
var nombre1 = "Antonio";
const nombre2 = "Antonio";

console.log(nombre);
console.log(nombre1);
console.log(nombre2);

let menu_responsive = document.querySelector("checkbtn");

menu_responsive.onclick = function () {
    navbar = document.querySelector(".navbar");
    navbar.classlist.toggle("active");
};
const form = document.getElementById("form");
const nombre1 = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});