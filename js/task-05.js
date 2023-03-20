// Escriba un script que, cuando se escriba el texto en el 
// input de input#nombre-input (evento input), sustituya su 
// valor actual en span#name-output. Si el input está vacío,
//  el span debería mostrar la secuencia "Anónimo".

//Obtener el valor de ingreso del input
const input = document.querySelector('#name-input');
console.log(input);

//Obtener el valor de salida 
const output = document.querySelector('#name-output');
console.log(output);

//Funcion para cambiar el texto en el input a travès 
// del evento input

input.addEventListener('input', (event) => {
    output.textContent = event.currentTarget.value;
    if(input.value == ""){
        output.textContent = "Anonymous";
    }
});
