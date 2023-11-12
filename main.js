const $pantalla = document.querySelector(".pantalla");
const $botones = document.querySelectorAll(".botones");
const $btnLimpiar = document.getElementById("limpiar");
const $btnBorrar = document.getElementById("borrar");
const $btnIgual = document.getElementById("btn-igual");

$btnLimpiar.addEventListener("click", limpiarPantalla);
$btnBorrar.addEventListener("click", borrar);

function agregarAPantalla(valor) {
  if ($pantalla.textContent === "0") {
    eliminarTodo();
  }
  $pantalla.textContent += valor;
}

function eliminarTodo() {
  $pantalla.textContent = "";
}

function limpiarPantalla() {
  $pantalla.textContent = "0";
}

function borrar() {
  $pantalla.textContent = $pantalla.textContent.toString().slice(0, -1);
}

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

// switch (operador) {
//   case "+":
//     return suma(a, b);
//   case "-":
//     return resta(a, b);
//   case "×":
//     return multiplicacion(a, b);
//   case "÷":
//     return division(a, b);
//   default:
//     return;
// }
