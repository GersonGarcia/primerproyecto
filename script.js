/*Pagina creada por Cristian Lopez/ 0900-14-693 */
function genera_tabla() {

  var textoArreglo = document.getElementById('cadena').value;
  
  if(textoArreglo==""){
      alert("Debe ingresar una cadena de texto!");
      document.getElementById('cadena').focus();
  }
  else{
      var textoCelda ="";
      var body = document.getElementsByTagName("body")[0];

      var tabla   = document.createElement("table");
      var tblBody = document.createElement("tbody");
 
      // Creacion de celdas
      for (var i = 0; i < textoArreglo.length; i++) {
          // Creacion de hileras        
          var hilera = document.createElement("tr");
 
          for (var j = 0; j < 2; j++) {    
              celda = document.createElement("td");            
              if(j==0){
                  textoCelda = document.createTextNode(i+1);                
              }
              else if(j==1){
                  textoCelda = document.createTextNode("_   "+textoArreglo[i]+"   _");
              }        
              celda.appendChild(textoCelda);
              hilera.appendChild(celda);
          }   
          tblBody.appendChild(hilera);
      }
  }   
  tabla.appendChild(tblBody); 
  body.appendChild(tabla);
  tabla.setAttribute("border", "7");
}

function calculadora(operando1,operando2){
    console.log(operando1 + operando2);
    console.log(operando1 - operando2);
    console.log(operando1 * operando2);
    if(operando2 == 0){
        console.log("Error: Division en 0");
    }
    else{
        console.log(operando1 /  operando2);
    }
}

//FUNCION QUE REALIZA E IMPRIME LA SERIE DE FIBONACCI
function fibonacci()
{
    var n1 = 1;
    var n2 = 1;
    var serieConcatenada = "";
    var limite_valor = 100;
    limite_valor = document.getElementById('limite_valor').value;

    if((limite_valor == "") || (limite_valor <= 2)){
        alert("Debe Ingresar un numero entero mayor a 2");        
    }
    else if(review(limite_valor) == 1){
        alert("Debe Ingresar una cadena de digitos solamente!");        
    }
    else{
        console.log("Serie de Fibonacci: "+limite_valor);
        console.log(n1);
        serieConcatenada += (n1);        
        document.getElementById('serieSalida').value = serieConcatenada;
        while(n2 <= limite_valor)
        {
            console.log(" "+n2);
            serieConcatenada += (" , "+n2);            
            document.getElementById('serieSalida').value = serieConcatenada;
            n2 = n2 + n1;
            n1 = n2 - n1;
        }
    }
    
}

//FUNCION QUE REALIZA UN CONTEO DE CARACTERES A PARTIR DE UN TEXTO INGRESADO
function contarCaracteres(){    
    texto = document.getElementById('cadenaContar').value;
    if(texto == ""){
        alert("Debe ingresar un dato para el conteo!");
        document.getElementById('cadenaContar').focus();
    }else{
        alert("SU CADENA CONTIENE: "+texto.length+" CARACTERES");
        document.getElementById('cadenaContar').focus();
    }
    
}

//funciones auxliliares que no fueron las solicitadas en el proyecto
//pero que sirvieron para realizar algunas tareas
function limpiarCajasFibonacci(){
    document.getElementById('limite_valor').value = "";
    document.getElementById('serieSalida').value = "";
    document.getElementById('limite_valor').focus();
}

function limpiarCajaConteo(){
    document.getElementById('cadenaContar').value = "";
    document.getElementById('cadenaContar').focus();
}

function limpiarCajaArreglo(){
    document.getElementById('cadena').value = "";
    document.getElementById('cadena').focus();
}

function review(cadenaRevisar){
    var numeros = [1,2,3,4,5,6,7,8,9,0];
    var tieneTexto = 0;
    var contador = 0;
    for(var i=0;i<cadenaRevisar.length;i++){
        for(var j=0;j<numeros.length;j++){
            if(cadenaRevisar[i] != numeros[j]){
                contador++;
            }
        }
        if(contador == numeros.length){
            tieneTexto=1;
            break;
        }
        contador = 0;
    }
    return tieneTexto;
}