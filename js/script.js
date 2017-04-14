var contador=0 ;
var contadorLetras= 0 ;
document.addEventListener("click",cuentaClicks);
var contadorCaracteres= document.getElementById("cometwit");
contadorCaracteres.addEventListener("keydown",cuentaLetras);
var btnComentario=document.getElementById("enviarComentario");
btnComentario.addEventListener("click",twitNuevo);
function cuentaClicks(){
  contador++;
  var contadorClicks= document.getElementById("contador");
  contadorClicks.innerText= contador;
}
function cuentaLetras(){
  contadorLetras++;
  var contadorCaracteres= document.getElementById("contadorLetras");
  if(contadorLetras >=140)
  {
    btnComentario.disabled=true;
    contadorCaracteres.style.color="red";
  }
  contadorCaracteres.innerHTML=contadorLetras;
}
function twitNuevo(){
  var nodoPadre= document.getElementById("listaComentarios");
  var nuevoTwit=document.createElement("div");
  nodoPadre.appendChild(nuevoTwit);

  var seccionTwit= document.createElement("span");
  nodoPadre.appendChild(seccionTwit);
  var tuitStar= document.createElement("span");
  nodoPadre.appendChild(tuitStar);
  var comentario= document.getElementById("cometwit").value;
  var duenoTwit= document.getElementById("deQuien").value;
  seccionTwit.innerText=comentario;
  tuitStar.innerText="De: "+duenoTwit;


}
// function creaComentario(){
//   var nodoPadre = document.getElementById("listaComentarios");
//   var creaComentario= document.createElement("div");
//
//   var texto = document.getElementById("cometwit").value;
//   var deQuien = document.getElementById("deQuien").value;
//
//   document.createTextNode(deQuien);
//   var nodoTexto = document.createTextNode(texto);
//
//   nodoPadre.appendChild(creaComentario);
//   creaComentario.appendChild(nodoTexto);
//   creaComentario.appendChild(twitstar);
// }
// //contadorClic();
