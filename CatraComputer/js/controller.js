function compilar(){
	//Crear arreglo con todas las instrucciones
    var lmcc = $("#txt-inst").val().split("+");
    
    //Se declara el json que contendra la informacion
    var str = `{ "data" : [
    	{ "ubicacion":"000" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"001" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"002" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"003" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"004" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"005" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"006" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"007" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"008" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"009" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"010" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"011" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"012" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"013" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"014" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"015" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"016" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"017" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"018" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"019" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"020" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"021" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"022" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"023" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"024" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"025" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"026" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"027" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"028" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"029" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"030" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"031" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"032" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"033" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"034" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"035" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"036" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"037" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"038" , "contenido":"" , "instruccion":"" , "dir":""},
    	{ "ubicacion":"039" , "contenido":"" , "instruccion":"" , "dir":""},
    	]}`;

    obj = JSON.parse(str);
    document.getElementById("tabla-inst").innerHTML = "<tr><th>ubicacion</th><th>contenido</th><th>instruccion</th></tr>";
	for (var i = 1; i < lmcc.length; i++) {
		//separar el contenido
		obj.data[i-1].contenido= lmcc[i].trim();
		obj.data[i-1].instruccion= lmcc[i].substr(0,2).trim();
		obj.data[i-1].dir= lmcc[i].substr(2).trim();

		document.getElementById("tabla-inst").innerHTML += 
            "<tr><td>"+obj.data[i-1].ubicacion+"</td><td>"+obj.data[i-1].contenido+"</td><td>"+obj.data[i-1].instruccion+"</td></tr>";
	}
 	//console.log(obj);
    $("#tbl").show();
}

$(document).ready(function(){
	$("#tbl").hide();
});

/*
Lista de instrucciones:
LEE = 10;
ESCRIBE = 11;

CARGA = 20;
ALMACENA = 21;

SUMA = 30;
RESTA = 31;
DIVIDE = 32;
MULTIPLICA = 33;

BIFURCA = 40;
BIFURCANEG = 41;
BIFURCACERO = 42;
ALTO = 43;

*/