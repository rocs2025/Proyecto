
//Función para crear una alerta interactiva
function rg(){
    Swal.fire("La lógica esta trabajando 👀!");
}



//obteniendo datos del formulario
const get_form = document.forms.numbers;
 
const number = document.getElementById('number');
 
const number2 = document.getElementById('number2');
 
const number3 = document.getElementById('number3');
 
const result = document.getElementById('result');

/*función para crear un evento para detectar cuando se envie el formulario y luego
hacer condiciones para identificar el numero mayor y devolverlo en una etiqueta parrafo*/

get_form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (number.value > number2.value && number.value > number3.value){
        result.textContent = `${number.value} es el mayor`;
     } else if(number2.value > number.value && number2.value > number3.value){
      result.textContent = `${number2.value} es el mayor`;
     } else if(number3.value > number && number3>number2){
      result.textContent = `${number3.value} es el mayor`;
     }
     
});



