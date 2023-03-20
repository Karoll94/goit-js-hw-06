// Escriba un script que:

// Cuente y muestre en la consola el número de categorías en ul#categories, 
// es decir. los artículos li.item.
// Para cada elemento li.item en la lista ul#categories, encuentre y envíe a 
// la consola el texto del título del artículo (tag <h2>) y el número de 
// artículos en la categoría (todo anidado <li>).
// Como resultado, se mostrarán los siguientes mensajes en la consola.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5



const categoriesLi = document.querySelectorAll('.item')
const categoriesUL = document.querySelectorAll('#categories')

console.log(`Number of categories: ${categoriesLi.length}`);
//console.log(categoriesUL.length);


  for(let element of categoriesLi){
     console.log(`Category: ${element.querySelector('h2').textContent}`)
     console.log(`Elements: ${element.querySelectorAll('li').length}`)
  }
