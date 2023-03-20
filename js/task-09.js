function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//Obtener el valor del body
const body = document.querySelector("body");
console.log(body);
//Obtener el valor del span
const span = document.querySelector(".color");
console.log(span);
//Obtener el valor del boton
const button = document.querySelector(".change-color");
console.log(button);

//Generar el evento click y crear la función flecha
button.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
})
