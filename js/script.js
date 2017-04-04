var contador=0 ;
var contadorLetras= 0 ;
function contadorClic(){
  document.getElementById("body").addEventListener("click",cuentaCaracteres);

  //document.getElementById("myBtn").addEventListener("click", displayDate);
}

function cuentaCaracteres(){

  contador++;
  console.log(contador);
  document.getElementById("contador").innerHTML = contador;
}
function cuentaTwit(){
  document.getElementById("cometwit").addEventListener("onkeypress",cuentaLetras);

}
function cuentaLetras(){

  contadorLetras++;
  console.log(contadorLetras);
  document.getElementById('contadorLetras').innerHTML = contadorLetras;

}
contadorClic();
