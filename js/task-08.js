// //Escriba un script para controlar el formulario de acceso.
// El procesamiento de form.login-form debe ser por el evento 
// submit.
// La página no debe recargarse cuando se envía el formulario.
// Si hay espacios en blanco en el formulario, aparecerá 
// alert con una advertencia diciendo que todos los espacios
//  deben ser rellenados.
// Si el usuario ha rellenado todos los espacios y ha enviado 
// el formulario, reúne los valores de los espacios en donde 
// el nombre del espacio es el nombre de la propiedad y el 
// valor del espacio es la propiedad. Use la propiedad 
// elements para acceder a los elementos del formulario.
// Muestre el objeto con los datos introducidos en la 
// consola y borre los valores de los camposespacio del
//  formulario usando el método reset.

//obtener los valores del formulario
const form = document.querySelector('.login-form');
console.log(form);
//Generar el evento y la funciòn
form.addEventListener('submit', event => {
  event.preventDefault();
  const datos = {};
  for (const element of form.elements) {
    
    if (element.name) {
      datos[element.name] = element.value;
    }
  }
  if (datos.email && datos.password) {
    console.log(datos);
    form.reset();
  } else {
    alert('No deje campos vacíos');
  }
});



