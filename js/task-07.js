// Escriba un script que reaccione a un cambio en el valor de 
// input#font-size-control. (evento input) y cambie el estilo
// inline de span#text actualizando el font-size. Por lo tanto,
// al arrastrar el deslizador cambiará el tamaño del texto.


//Obtener el valor del input
const input = document.querySelector('#font-size-control');
console.log(input);

//Obtener el valor del text del span
const span = document.querySelector('#text');
console.log(span);

//Generar el evento input
input.addEventListener('input', (event) =>{
    span.style.fontSize = `${event.currentTarget.value}px`;
});

