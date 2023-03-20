// Cree una función createBoxes(amount) que tome un parámetro, 
// un número. La función crea tantos <div> como se especifique 
// en amount y los añade a div#boxes.

// El tamaño del primer <div> es de 30px por 30px.
// Cada elemento después del primero, debe ser 
// 10px más ancho y alto que el anterior.
// Todos los elementos deben tener un color de fondo aleatorio 
// en formato HEX. Use la función getRandomHexColor lista para Acceder el color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//Acceder el valor del div
const controls = document.querySelector('#controls');
console.log(controls);
//Acceder el valor del input
const input = document.querySelector('input');
console.log(input);
//Acceder el valor del boton de crear
const create = document.querySelector('[data-create]');
console.log(create);
//Acceder el valor del boton de destruir
const destroy = document.querySelector('[data-destroy]');
console.log(destroy);
// Accder al valor de el div cajas
const boxes = document.querySelector('#boxes');
console.log(boxes);

//Crar función de crear cajas

const createBoxes = amount =>{
    for (let i = 1; i <= amount; i++){
      const newBox = document.createElement('div');
      const divIdName = i;

      newBox.style.height = 20 + i*10 + 'px';
      newBox.style.width = 20 + i*10 + 'px';

      newBox.setAttribute('id', divIdName);
      newBox.style.background = getRandomHexColor();
      
      boxes.append(newBox);
    }
}

//Crear función de eliminar cajas
const destroyBoxes = () =>{
  boxes.innerHTML = "";
}

//Crear los eventos y llamar las funciones crear y eliminar
create.addEventListener('click', () =>{
  createBoxes(input.value);
})

destroy.addEventListener('click', () =>{
  destroyBoxes();
})