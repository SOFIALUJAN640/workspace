function suma(){
const elemento1 = document.getElementById("suma1");
const elemento2 = document.getElementById("suma2");
const resultado = document.getElementById("resultadoSuma");

resultado.innerHTML = parseFloat(elemento1.value) + parseFloat(elemento2.value);


}
function multiplicacion(){
const elemento1 = document.getElementById("multiplicacion1");
const elemento2 = document.getElementById("multiplicacion2");
const resultado = document.getElementById("resultadomultiplicacion");

resultado.innerHTML = parseFloat(elemento1.value) + parseFloat(elemento2.value);


}

function division(){
const elemento1 = document.getElementById("division1");
const elemento2 = document.getElementById("division2");
const resultado = document.getElementById("resultadodivision");

resultado.innerHTML = parseFloat(elemento1.value) / parseFloat(elemento2.value); 


}