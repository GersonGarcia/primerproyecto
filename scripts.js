function GenerarVector() {
  var textoArreglo = document.getElementById('cadena').value;  
  if(textoArreglo==""){
      alert("Debe ingresar una cadena de texto!");
      document.getElementById('cadena').focus();
  }else{
    var s="";
    for(var x=0; x<textoArreglo.length; x++){
        s+="["+x+"] = "+textoArreglo[x]+"\n";  
    }      
    document.getElementById('vector').value=s;  
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

//FUNCION QUE REALIZA E IMPRIME LA SERIE DE FIBONACCI
function fibonacci(){
    var n1 = 1;
    var n2 = 1;
    var serieConcatenada = "";
    var limite_valor = 100;
    limite_valor = document.getElementById('limite_valor').value;

    if((limite_valor == "") || (limite_valor <= 2)){
        alert("Debe Ingresar un numero entero mayor a 2");        
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
function Suma(a,b){
  var r=0;  
    r=parseInt(a)+parseInt(b);
    if(isNaN(r)){      
      alert("Los campos ingresados no son numeros");
    }else{
      document.getElementById('resultado').value=r;  
    }        
}


//funciones auxliliares que no fueron las solicitadas en el proyecto
//pero que sirvieron para realizar algunas tareas
function limpiarCajasFibonacci(){
    document.getElementById('limite_valor').value = "";
    document.getElementById('serieSalida').value = "";
    document.getElementById('limite_valor').focus();
}

function limpiarParametros(){
    document.getElementById('resultado').value="";
    document.getElementById('resultado').focus();
    document.getElementById('numero1').value="";
    document.getElementById('numero1').focus();
    document.getElementById('numero2').value="";
    document.getElementById('numero2').focus();
}

function limpiarCajaConteo(){
    document.getElementById('cadenaContar').value = "";
    document.getElementById('cadenaContar').focus();
}


function limpiarCajaArreglo(){
    document.getElementById('cadena').value = "";
    document.getElementById('cadena').focus();
    document.getElementById('vector').value = "";
    document.getElementById('vector').focus();
}
//Alertas
function alerta1(){	
	alert("Tipo de alerta 1");                  
}

function alerta2(){	
	if (confirm("Desea entrar a esta página, presione ACEPTAR, si no presione CANCELAR")){
		history.go(-1);return " "			
	}	
}

function hora(){
	var fecha= new Date();
	var horas= fecha.getHours();
	var minutos = fecha.getMinutes();
	var segundos = fecha.getSeconds();
	var dia = fecha.getDate();
	var mes = fecha.getMonth()+1;
	var ani= fecha.getYear();
	var anio= (ani<1000)? ani+1900:ani;
	var enviarDatos='Fecha: '+dia+'/'+mes+'/'+anio+'<br>'+'Hora: '+horas+':'+minutos+':'+segundos+'';
	document.getElementById('contenedorHora').innerHTML=enviarDatos;
	setTimeout('hora()',1000);
}