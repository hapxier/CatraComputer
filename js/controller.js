//Declaracion de variables globales
var acumulador= 0;
var val_ingresado= 0;
var cont="";
var pc= 0;

function compilar(){
	//Crear arreglo con todas las instrucciones
    var lmcc = $("#txt-inst").val().split("+");
    $("#btn-p").attr("disabled", "disabled");
    //Se declara el json que contendra la informacion

    obj = JSON.parse(str);

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


		        while (isNaN(val)){
				alert("Entrada no valida. Ingrese numeros");
				val=prompt("Ingrese el valor:");
			
			}

			if(val=="" || val==" "|| val==null){
				alert("No ingreso el valor");
					break;
						
			}else{			 
				var t_dir= obj.data[i-1].dir;
				for (var j = 1; j < obj.data.length; j++) {
					if (obj.data[j-1].ubicacion==t_dir) {
						obj.data[j-1].value= val;
					}
				}

			}
			
			document.getElementById("tabla-reg").innerHTML +=
					"<tr><td>"+'Se ingreso el valor: '+val+"</td></tr>";

	    }else if(obj.data[i-1].instruccion==11){
	        
	        var t_dir= obj.data[i-1].dir;
			for (var j = 1; j < obj.data.length; j++) {
				if (obj.data[j-1].ubicacion==t_dir) {
					document.getElementById("tabla-salida").innerHTML +=
					"<tr><td>"+obj.data[j-1].value+"</td></tr>";
				}
			}
			document.getElementById("tabla-reg").innerHTML +=
					"<tr><td>Muestra el contenido de: "+t_dir+"</td></tr>";   
	    }else if(obj.data[i-1].instruccion==20){
	    	var t_dir= obj.data[i-1].dir;
			for (var j = 1; j < obj.data.length; j++) {
				if (obj.data[j-1].ubicacion==t_dir) {
					acumulador= obj.data[j-1].value;
				}
			}
			document.getElementById("tabla-reg").innerHTML +=
					"<tr><td>Carga en el acumulador: "+acumulador+"</td></tr>";	
	        console.log("Acumulador: "+acumulador);
	    }else if(obj.data[i-1].instruccion==21){
	        var t_dir= obj.data[i-1].dir;
			for (var j = 1; j < obj.data.length; j++) {
				if (obj.data[j-1].ubicacion==t_dir) {
					obj.data[j-1].value= acumulador;
				}
			}
			document.getElementById("tabla-reg").innerHTML +=
					"<tr><td>Almacena el valor del acumulador a la direccion: "+t_dir+" </td></tr>";
	    }else if(obj.data[i-1].instruccion==30){
	        var t_dir= obj.data[i-1].dir;
			for (var j = 1; j < obj.data.length; j++) {
				if (obj.data[j-1].ubicacion==t_dir) {
					acumulador= parseInt(acumulador) + parseInt(obj.data[j-1].value);
				}
			}
			document.getElementById("tabla-reg").innerHTML +=
					"<tr><td>Suma el contenido de la dir. "+t_dir+" al acumulador </td></tr>";
	        console.log("Suma: "+acumulador);
	    }else if(obj.data[i-1].instruccion==31){
	        var t_dir= obj.data[i-1].dir;
			for (var j = 1; j < obj.data.length; j++) {
				if (obj.data[j-1].ubicacion==t_dir) {
					acumulador= parseInt(acumulador) - parseInt(obj.data[j-1].value);
				}
			}
			document.getElementById("tabla-reg").innerHTML +=
					"<tr><td>Resta el contenido de la dir. "+t_dir+" al acumulador </td></tr>";
	        console.log("Restar:"+acumulador);    
	    }else if(obj.data[i-1].instruccion==32){
	    	var t_dir= obj.data[i-1].dir;
			for (var j = 1; j < obj.data.length; j++) {
				if (obj.data[j-1].ubicacion==t_dir) {
					acumulador= parseInt(acumulador) / parseInt(obj.data[j-1].value);
				}
			}
			document.getElementById("tabla-reg").innerHTML +=
					"<tr><td>Divide el contenido de la dir. "+t_dir+" al acumulador </td></tr>";
	        console.log("Dividir: "+acumulador);
	    }else if(obj.data[i-1].instruccion==33){
	    	var t_dir= obj.data[i-1].dir;
			for (var j = 1; j < obj.data.length; j++) {
				if (obj.data[j-1].ubicacion==t_dir) {
					acumulador= parseInt(acumulador) * parseInt(obj.data[j-1].value);

				}
			}
			document.getElementById("tabla-reg").innerHTML +=
					"<tr><td>Multiplica el contenido de la dir. "+t_dir+" al acumulador </td></tr>";
	        console.log("Multiplicar: "+acumulador);
	    }else if(obj.data[i-1].instruccion==40){
	    	var t_dir= obj.data[i-1].dir;
				i= parseInt(t_dir);   		
	    	document.getElementById("tabla-reg").innerHTML +=
					"<tr><td>Bifurca</td></tr>";
	        console.log("Bifurca: "+parseInt(t_dir));
	        
	    }else if(obj.data[i-1].instruccion==41){
	        if(acumulador<0){
		    	var t_dir= obj.data[i-1].dir;
		    	i= parseInt(t_dir);
		    	document.getElementById("tabla-reg").innerHTML +=
					"<tr><td>Bifurca-neg</td></tr>";
		    	console.log("Bifurca-neg");
	    	}
	    }else if(obj.data[i-1].instruccion==42){
	    	if(acumulador==0){
		    	var t_dir= obj.data[i-1].dir;
		    	i= parseInt(t_dir);
		    	document.getElementById("tabla-reg").innerHTML +=
					"<tr><td>Bifurca-cero</td></tr>";
		    	console.log("Bifurca Cero");
	    	}
	    }else if(obj.data[i-1].instruccion==43){
	    	i=lmcc.length;
	    	document.getElementById("tabla-reg").innerHTML +=
					"<tr><td>Fin de programa</td></tr>";
	        alert("Instruccion Alto, El programa completó su tarea. :)");

	    }else{
	        alert("Instruccion Desconocida. :/");
	    }        
	}

 	console.log(obj);
    //Mostrar la tabla de memoria
    //$("#tbl").show();
	$("#btn-c").attr("disabled", "disabled");
}

function reiniciar(){
	location.reload();
	$("#btn-c").removeAttr("disabled");
	$("#btn-p").removeAttr("disabled");
}

//Ocultar la tabla de memoria
$(document).ready(function(){
	//$("#tbl").hide();
	//$("#tbl2").hide();

	document.getElementById("tabla-inst").innerHTML = "<tr><th>#</th><th>contenido</th><th>instruccion</th></tr>";
    if (cont==""){
	    document.getElementById("tabla-salida").innerHTML = "<tr><th>Salida</th></tr>";
	    cont="x";
	}
	document.getElementById("tabla-reg").innerHTML = "<tr><th>Registro de acciones</th></tr>";
	$("#btn-c").removeAttr("disabled");
});

var str = `{ "data" : [
	{ "ubicacion":"000" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"001" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"002" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"003" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"004" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"005" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"006" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"007" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"008" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"009" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"010" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"011" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"012" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"013" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"014" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"015" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"016" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"017" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"018" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"019" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"020" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"021" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"022" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"023" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"024" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"025" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"026" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"027" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"028" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"029" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"030" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"031" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"032" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"033" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"034" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"035" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"036" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"037" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"038" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"039" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"040" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"041" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"042" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"043" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"044" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"045" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"046" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"047" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"048" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"049" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"050" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"051" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"052" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"053" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"054" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"055" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"056" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"057" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"058" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"059" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"060" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"061" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"062" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"063" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"064" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"065" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"066" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"067" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"068" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"},
	{ "ubicacion":"069" , "contenido":"" , "instruccion":"" , "dir":"" , "value":"0"}
	]}`;

function Numeros(string){//Solo numeros
    var out = '';
    var filtro = '+1234567890\n';//Caracteres validos

    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) 
            
	     out += string.charAt(i);

    return out;
}

var i= 1;
var cont2= 1;
function compilarPaso(){
    var lmcc = $("#txt-inst").val().split("+");
    
    if (cont2==1) {
    	obj = JSON.parse(str);
    	cont2++;
    	ciclos= lmcc.length;
	}

    if (i <= lmcc.length) {
    	
    	pc++;
		console.log("PC= "+pc);
		obj.data[i-1].contenido= lmcc[i].trim();//contenido
		obj.data[i-1].instruccion= lmcc[i].substr(0,2).trim();//Instruccion
		obj.data[i-1].dir= lmcc[i].substr(2).trim();//direccion
		document.getElementById("tabla-inst").innerHTML += 
            "<tr><td>"+obj.data[i-1].ubicacion+"</td><td>"+obj.data[i-1].contenido+"</td><td>"+obj.data[i-1].instruccion+"</td></tr>";
        
        ///////////////////////////////////////////////////////////////////////////////
        //Control de las instrucciones
		if(obj.data[i-1].instruccion==10){
			var val = prompt("Ingrese el valor:");


		        while (isNaN(val)){
				alert("Entrada no valida. Ingrese numeros");
				val=prompt("Ingrese el valor:");

			
			}

			if(val=="" || val==" "|| val==null){
				alert("No ingreso el valor");
			 
				$("#btn-p").attr("disabled", "disabled");
			}else{			 
				var t_dir= obj.data[i-1].dir;
				for (var j = 1; j < obj.data.length; j++) {
					if (obj.data[j-1].ubicacion==t_dir) {
						obj.data[j-1].value= val;
					}
				}

		
		
				}
			
			document.getElementById("tabla-reg").innerHTML +=
					"<tr><td>"+'Se ingreso el valor: '+val+"</td></tr>";
		///////////////////////////////////////////////////////////////////////////////
	    }

	    else if(obj.data[i-1].instruccion==11){
	        
	        var t_dir= obj.data[i-1].dir;

			for (var j = 1; j < obj.data.length; j++) {
				if (obj.data[j-1].ubicacion==t_dir) {
					document.getElementById("tabla-salida").innerHTML +=
					"<tr><td>"+obj.data[j-1].value+"</td></tr>";
				}
			}
			console.log(obj);
			document.getElementById("tabla-reg").innerHTML +=
					"<tr><td>Muestra el contenido de: "+t_dir+"</td></tr>";     
	    }else if(obj.data[i-1].instruccion==20){
	    	var t_dir= obj.data[i-1].dir;
			for (var j = 1; j < obj.data.length; j++) {
				if (obj.data[j-1].ubicacion==t_dir) {
					acumulador= obj.data[j-1].value;
				}
			}
			document.getElementById("tabla-reg").innerHTML +=
					"<tr><td>Carga en el acumulador: "+acumulador+"</td></tr>";	
	        console.log("Acumulador: "+acumulador);
	    }else if(obj.data[i-1].instruccion==21){
	        var t_dir= obj.data[i-1].dir;
			for (var j = 1; j < obj.data.length; j++) {
				if (obj.data[j-1].ubicacion==t_dir) {
					obj.data[j-1].value= acumulador;
				}
			}
			document.getElementById("tabla-reg").innerHTML +=
					"<tr><td>Almacena el valor del acumulador a la direccion: "+t_dir+" </td></tr>";
	    }else if(obj.data[i-1].instruccion==30){
	        var t_dir= obj.data[i-1].dir;
			for (var j = 1; j < obj.data.length; j++) {
				if (obj.data[j-1].ubicacion==t_dir) {
					acumulador= parseInt(acumulador) + parseInt(obj.data[j-1].value);
				}
			}
			document.getElementById("tabla-reg").innerHTML +=
					"<tr><td>Suma el contenido de la dir. "+t_dir+" al acumulador </td></tr>";
	        console.log("Suma: "+acumulador);
	    }else if(obj.data[i-1].instruccion==31){
	        var t_dir= obj.data[i-1].dir;
			for (var j = 1; j < obj.data.length; j++) {
				if (obj.data[j-1].ubicacion==t_dir) {
					acumulador= parseInt(acumulador) - parseInt(obj.data[j-1].value);
				}
			}
			document.getElementById("tabla-reg").innerHTML +=
					"<tr><td>Resta el contenido de la dir. "+t_dir+" al acumulador </td></tr>";
	        console.log("Restar:"+acumulador);    
	    }else if(obj.data[i-1].instruccion==32){
	    	var t_dir= obj.data[i-1].dir;
			for (var j = 1; j < obj.data.length; j++) {
				if (obj.data[j-1].ubicacion==t_dir) {
					acumulador= parseInt(acumulador) / parseInt(obj.data[j-1].value);
				}
			}
			document.getElementById("tabla-reg").innerHTML +=
					"<tr><td>Divide el contenido de la dir. "+t_dir+" al acumulador </td></tr>";
	        console.log("Dividir: "+acumulador);
	    }else if(obj.data[i-1].instruccion==33){
	    	var t_dir= obj.data[i-1].dir;
			for (var j = 1; j < obj.data.length; j++) {
				if (obj.data[j-1].ubicacion==t_dir) {
					acumulador= parseInt(acumulador) * parseInt(obj.data[j-1].value);

				}
			}
			document.getElementById("tabla-reg").innerHTML +=
					"<tr><td>Multiplica el contenido de la dir. "+t_dir+" al acumulador </td></tr>";
	        console.log("Multiplicar: "+acumulador);
	    }else if(obj.data[i-1].instruccion==40){
	    	var t_dir= obj.data[i-1].dir;
	    	var salto= parseInt(t_dir)-parseInt(obj.data[i].ubicacion);
	    	i=i+salto;
	    	document.getElementById("tabla-reg").innerHTML +=
					"<tr><td>Bifurca</td></tr>";
	        console.log("Bifurca: "+salto);

	    }else if(obj.data[i-1].instruccion==41){
	        if(acumulador<0){
		    	var t_dir= obj.data[i-1].dir;
		    	var salto= parseInt(t_dir)-parseInt(obj.data[i].ubicacion);
		    	i=i+salto;
		    	document.getElementById("tabla-reg").innerHTML +=
					"<tr><td>Bifurca-neg</td></tr>";
		    	console.log("Bifurca-neg");
	    	}
	    }else if(obj.data[i-1].instruccion==42){
	    	if(acumulador==0){
		    	var t_dir= obj.data[i-1].dir;
		    	var salto= parseInt(t_dir)-parseInt(obj.data[i].ubicacion);
		    	i=i+salto;
		    	document.getElementById("tabla-reg").innerHTML +=
					"<tr><td>Bifurca-cero</td></tr>";
		    	console.log("Bifurca Cero");
	    	}
	    }else if(obj.data[i-1].instruccion==43){
	    	i=lmcc.length;
	    	document.getElementById("tabla-reg").innerHTML +=
					"<tr><td>Fin de programa</td></tr>";
			$("#btn-p").attr("disabled", "disabled");
	        alert("Instruccion Alto, El programa completó su tarea. :)");
	        alert('paso a paso, finalizo');
	    }else{
	        alert("Instruccion Desconocida. :/");
	    }
	    i++;
    }else{
    	alert('paso a paso, finalizo');
    	console.log(obj);
    	$("#btn-p").attr("disabled", "disabled");
    }
	$("#btn-c").attr("disabled", "disabled");
}
