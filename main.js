const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".botones");

botones.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    console.log(e.target);
  });
});
