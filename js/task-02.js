// Escriba un script que para cada elemento del array ingredients:

// Cree un elemento separado <li>. Asegúrese de usar el método document.createElement().
// Añada el nombre de un ingrediente como contenido de texto.
// Añada una clase item al elemento.
// Después, inserte todos los <li> en una sola operación en la lista ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Crear elemento lista para guardar los proximos elementos creados con 
// document.createElement().
const list = document.querySelector("#ingredients");
console.log(list);

//Crear el elemento en la lsta
const elementLi = document.createElement("li");
// elementLi.textContent = "Potatoes";
// list.append(elementLi);

// Crear una clase al elemento
elementLi.classList.add("item");

// Insertar todos los li en la lista de ingredients con su
// respectivo valor

for (let element of ingredients){
  const elementLi = document.createElement("li");
  elementLi.textContent = element;
  list.append(elementLi);
  elementLi.classList.add("item");
  
}
