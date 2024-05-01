
//Función para crear una alerta interactiva
function rg(){
    Swal.fire("La lógica esta trabajando 👀!");
}



//obteniendo datos del formulario

 
function encontrarMayor() {
  // Obtener los valores de los tres números
  let num1 = parseFloat(document.getElementById("number").value);
  let num2 = parseFloat(document.getElementById("number2").value);
  let num3 = parseFloat(document.getElementById("number3").value);

  // Encontrar el mayor de los tres números usando Math.max()
  let mayor = Math.max(number, number2, number3);

  // Mostrar el resultado
  alert("El número mayor es: " + mayor);
}



