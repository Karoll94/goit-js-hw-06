// Escriba un script que, si se pierde el enfoque en un input 
// (evento blur), el script comprobará el contenido del instupt 
// para ver si el número de símbolos introducidos es correcto.

// El número de símbolos que debe tener un input se especifica en su atributo data-length.
// Si se introduce el número correcto de símbolos, border del intuplet se convierte en verde, si no es correcto se vuelve rojo.
// Para añadir estilos, use las clases CSS valid e invalid, que ya tenemos añadido a los archivos de origen del trabajo.

//Obtener el valor del input
const validation = document.querySelector('input');
console.log(validation);


//Funcion 
function validateSymbol(){
    let quantitySymbol = this.value.length;
    let limitAmount = this.dataset.length;

    if (quantitySymbol == limitAmount){
        this.style.borderColor = '#4caf50';
    }else{
        this.style.borderColor = '#f44336';
    }

    console.log(quantitySymbol);
}

validation.addEventListener('blur',validateSymbol);