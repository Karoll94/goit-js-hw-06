//El contador consta de un span y de botones que, al ser pulsados, deben aumentar y disminuir su valor en uno.
//Cree una variable counterValue para almacenar el valor actual e inicializarlo con el valor 0.
// Añada escuchas de clic a los botones, dentro de los cuales aumenta o disminuye el valor del contador.
// Actualice la interfaz con el nuevo valor de la variable counterValue.


//inicializar el contador en 0
let counterValue = 0;
//Obtener el valor del contador etiqueta span
let value = document.querySelector('#value');
console.log(value);
//Obtener el valor del boton decrementar
const decrement = document.querySelector('[data-action="decrement"]');
console.log(decrement);
//Obtener el valor del boton incrementar
const increment = document.querySelector('[data-action="increment"]');  
console.log(increment);

//Funcion para incrementar el contador
const incrementValue = () =>{
    value.textContent = counterValue ++;
}
console.log(incrementValue);
//Funcion para decrementar el contador
const decrementValue = () =>{
    value.textContent = counterValue --;
}

//Llamado a los eventos de click y las funciones callback
increment.addEventListener('click',incrementValue);
decrement.addEventListener('click',decrementValue);