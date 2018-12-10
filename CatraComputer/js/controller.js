//Declaracion de variables globales
var acumulador= 0;
var val_ingresado= 0;
var cont="";
var pc= 0;

function compilar(){
	//Crear arreglo con todas las instrucciones
    var lmcc = $("#txt-inst").val().split("+");
    
    //Se declara el json que contendra la informacion
    var str = `{ "data" : [
    	{ "ubicacion":"000" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"001" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"002" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"003" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"004" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"005" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"006" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"007" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"008" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"009" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"010" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"011" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"012" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"013" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"014" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"015" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"016" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"017" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"018" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"019" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"020" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"021" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"022" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"023" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"024" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"025" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"026" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"027" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"028" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"029" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"030" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"031" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"032" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"033" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"034" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"035" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"036" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"037" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"038" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""},
    	{ "ubicacion":"039" , "contenido":"" , "instruccion":"" , "dir":"" , "value":""}
    	]}`;

    obj = JSON.parse(str);
    document.getElementById("tabla-inst").innerHTML = "<tr><th>#</th><th>contenido</th><th>instruccion</th></tr>";
	for (var i = 1; i < lmcc.length; i++) {
		pc++;
		console.log("PC= "+pc);
		obj.data[i-1].contenido= lmcc[i].trim();//contenido
		obj.data[i-1].instruccion= lmcc[i].substr(0,2).trim();//Instruccion
		obj.data[i-1].dir= lmcc[i].substr(2).trim();//direccion

		document.getElementById("tabla-inst").innerHTML += 
            "<tr><td>"+obj.data[i-1].ubicacion+"</td><td>"+obj.data[i-1].contenido+"</td><td>"+obj.data[i-1].instruccion+"</td></tr>";

        
        //Control de las instrucciones
		if(obj.data[i-1].instruccion==10){
			var val = prompt("Ingrese el valor:");
			if (val == null || val == "" ) {
			val_ingresado = "Valor no valido, Se cancelo el ingreso.";
			alert(val_ingresado);
			} else {
			val_ingresado = val;
				var t_dir= obj.data[i-1].dir;
				for (var j = 1; j < obj.data.length; j++) {
					if (obj.data[j-1].ubicacion==t_dir) {
						obj.data[j-1].value= val_ingresado;
					}
				}
			}
	    }else if(obj.data[i-1].instruccion==11){
	        if (cont==""){
	        	document.getElementById("tabla-salida").innerHTML = "<tr><th>Salida</th></tr>";
	        	cont="x";
	        }

	        var t_dir= obj.data[i-1].dir;
			for (var j = 1; j < obj.data.length; j++) {
				if (obj.data[j-1].ubicacion==t_dir) {
					document.getElementById("tabla-salida").innerHTML +=
					"<tr><td>"+obj.data[j-1].value+"</td></tr>";
				}
			}
	        $("#tbl2").show();    
	    }else if(obj.data[i-1].instruccion==20){
	    	var t_dir= obj.data[i-1].dir;
			for (var j = 1; j < obj.data.length; j++) {
				if (obj.data[j-1].ubicacion==t_dir) {
					acumulador= obj.data[j-1].value;
				}
			}
	        console.log("Acumulador: "+acumulador);
	    }else if(obj.data[i-1].instruccion==21){
	        var t_dir= obj.data[i-1].dir;
			for (var j = 1; j < obj.data.length; j++) {
				if (obj.data[j-1].ubicacion==t_dir) {
					obj.data[j-1].value= acumulador;
				}
			}
	    }else if(obj.data[i-1].instruccion==30){
	        var t_dir= obj.data[i-1].dir;
			for (var j = 1; j < obj.data.length; j++) {
				if (obj.data[j-1].ubicacion==t_dir) {
					acumulador= parseInt(acumulador) + parseInt(obj.data[j-1].value);
				}
			}
	        //console.log("Suma: "+acumulador);
	    }else if(obj.data[i-1].instruccion==31){
	        var t_dir= obj.data[i-1].dir;
			for (var j = 1; j < obj.data.length; j++) {
				if (obj.data[j-1].ubicacion==t_dir) {
					acumulador= parseInt(acumulador) - parseInt(obj.data[j-1].value);
				}
			}
	        //console.log("Restar:"+acumulador);    
	    }else if(obj.data[i-1].instruccion==32){
	    	var t_dir= obj.data[i-1].dir;
			for (var j = 1; j < obj.data.length; j++) {
				if (obj.data[j-1].ubicacion==t_dir) {
					acumulador= parseInt(acumulador) / parseInt(obj.data[j-1].value);
				}
			}
	        //console.log("Dividir: "+acumulador);
	    }else if(obj.data[i-1].instruccion==33){
	    	var t_dir= obj.data[i-1].dir;
			for (var j = 1; j < obj.data.length; j++) {
				if (obj.data[j-1].ubicacion==t_dir) {
					acumulador= parseInt(acumulador) * parseInt(obj.data[j-1].value);

				}
			}
	        //console.log("Multiplicar: "+acumulador);
	    }else if(obj.data[i-1].instruccion==40){
	    	var t_dir= obj.data[i-1].dir;
	    	var salto= parseInt(t_dir)-parseInt(obj.data[i].ubicacion);
	    	i=i+salto;
	        console.log("Bifurca");
	    }else if(obj.data[i-1].instruccion==41){
	        if(acumulador<0){
		    	var t_dir= obj.data[i-1].dir;
		    	var salto= parseInt(t_dir)-parseInt(obj.data[i].ubicacion);
		    	i=i+salto;
		    	console.log("Bifurca");
	    	}
	    }else if(obj.data[i-1].instruccion==42){
	    	if(acumulador==0){
		    	var t_dir= obj.data[i-1].dir;
		    	var salto= parseInt(t_dir)-parseInt(obj.data[i].ubicacion);
		    	i=i+salto;
		    	console.log("Bifurca");
	    	}
	    }else if(obj.data[i-1].instruccion==43){
	        alert("Instruccion Alto, El programa completó su tarea. :)");
	    }else{
	        alert("Instruccion Desconocida. :/");
	    }        
	}
 	console.log(obj);
    //Mostrar la tabla de memoria
    $("#tbl").show();
	$("#btn-c").attr("disabled", "disabled");
}

//Ocultar la tabla de memoria
$(document).ready(function(){
	$("#tbl").hide();
	$("#tbl2").hide();

	$("#btn-c").removeAttr("disabled");
});


function reiniciar(){
	location.reload();
	$("#btn-c").removeAttr("disabled");
}

/*
Lista de instrucciones:
LEE = 10
ESCRIBE = 11

CARGA = 20
ALMACENA = 21

SUMA = 3
RESTA = 31
DIVIDE = 32
MULTIPLICA = 33

BIFURCA = 40
BIFURCANEG = 41
BIFURCACERO = 42
ALTO = 43

*/
function Numeros(string){//Solo numeros
    var out = '';
    var filtro = '+1234567890\n';//Caracteres validos

    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) 
            
	     out += string.charAt(i);
	
  
    return out;
} 
