/*Creamos la funcion valoración y le pedimos que elija el elemento "rango" y su valor y lo muestre en un mensaje de alerta.*/
function valoracion() {
    const elementValue = document.querySelector("#rango").value;
  
    alert(`Has valorado con ${elementValue} puntos.`)
  }
  /*Creamos la funcion para mostrar la cuenta, cada constante guarda la información del formulario asociada a esos elementos y la muestra en un mensaje de alerta*/
  function ShowAccount() {
    const country = document.querySelector("#country").value;
    const iban = document.querySelector("#iban").value;
    const entity = document.querySelector("#entity").value;
    const branch = document.querySelector("#branch").value;
    const dc = document.querySelector("#dc").value;
    const account = document.querySelector("#account").value;
  
    alert(`Le informamos que su cuenta bancaria es: ${country}${iban}-${entity}-${branch}-${dc}-${account}.`)
  }
  /*Creamos la función para mostrar la fecha, la primera constante guarda el valor de la fecha seleccionada en el formulario y la segunda constante la convierte en un string para que salga en español y que después se muestra en el alert*/
  function fecha() {
    const date = new Date(document.querySelector("#fecha").value);
    const formattedDate = date.toLocaleString('es-es', {  weekday: 'long' });
  
    alert(`La fecha seleccionada en el elemento fecha es ${formattedDate}.`)
  }