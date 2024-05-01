
//Función para crear una alerta interactiva
function rg(){
    Swal.fire("La lógica esta trabajando 👀!");
}



//obteniendo datos del formulario

 
function encontrarMayor() {
  // Obtener los valores de los tres números
  var num1 = parseFloat(document.getElementById("number").value);
  var num2 = parseFloat(document.getElementById("number2").value);
  var num3 = parseFloat(document.getElementById("number3").value);

  // Encontrar el mayor de los tres números usando Math.max()
  var mayor = Math.max(number, number2, number3);

  // Mostrar el resultado
  alert("El número mayor es: " + mayor);
}



