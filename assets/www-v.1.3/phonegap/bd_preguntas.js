var db = window.openDatabase("bdIngresoUES.s3db", "1.0", "base de datos ingreso UES", 30 * 1024);
var ac = 1;
var acp = 0;
var aci = 0;
function CreaTablas(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS ciencia (idC INTEGER PRIMARY KEY, correctas INTEGER(3), Pregunta Varchar(500), R1 VARCHAR(100), R2 VARCHAR(100), R3 VARCHAR(100), R4 VARCHAR(100));');
    tx.executeSql('CREATE TABLE IF NOT EXISTS sociales (ids INTEGER PRIMARY KEY, correctas INTEGER(3), Pregunta Varchar(500), R1 VARCHAR(100), R2 VARCHAR(100), R3 VARCHAR(100), R4 VARCHAR(100));');
    tx.executeSql('CREATE TABLE IF NOT EXISTS lenguaje (idl INTEGER PRIMARY KEY, correctas INTEGER(3), Pregunta Varchar(500), R1 VARCHAR(100), R2 VARCHAR(100), R3 VARCHAR(100), R4 VARCHAR(100));');
    tx.executeSql('CREATE TABLE IF NOT EXISTS matematica (idm INTEGER PRIMARY KEY, correctas INTEGER(3), Pregunta Varchar(500), R1 VARCHAR(100), R2 VARCHAR(100), R3 VARCHAR(100), R4 VARCHAR(100));');
}

	function llenarCienciaBD(tx){
		tx.executeSql('INSERT INTO Ciencia (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "facil", "facil", "facil", "facil", "facil")');
		tx.executeSql('INSERT INTO Ciencia (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "Los metales se combinan con el oxígeno para formar:", "Óxidos ácidos", "Óxidos básicos", "Ácidos oxácidos", "Ninguna de las anteriores")');
		
	}
	function llenarSocialesBD(tx){
		tx.executeSql('INSERT INTO sociales (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "facil", "facil", "facil", "facil", "facil")');
		tx.executeSql('INSERT INTO sociales (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "El desarrollo de la informática, cibernética y las telecomunicaciones permitieron al final del Siglo XX el avance hacia:", "El neoliberalismo", "El imperialismo", "La globalización", "La industrialización")');
		

	}
	function llenarLenguajeD(tx){
		tx.executeSql('INSERT INTO lenguaje (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "facil", "facil", "facil", "facil", "facil")');
		tx.executeSql('INSERT INTO lenguaje (correctas, Pregunta, R1, R2, R3, R4) VALUES (4, "Seleccione la palabra escrita correctamente:", "Verenjena", "Berengena", "Verengena", "Berenjena")');
		
	}
	function llenarMatematicaBD(tx){
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "La siguiente diferencia de cubos x-cubo-3 – 10-cubo-3 está expresada correctamente en:", "(x – 10) (x2 + 10x + 100)", "(x – 10) (x + 5)2 + 75", "(x – 10) (x + 10)2", "(x – 10) (x2 – 10x – 100)")');
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "facil", "facil", "facil", "facil", "facil")');

	}
	
	
	
	//llena ingresa las preguntas de la materia **** CIENCIAS, SOCIALES, LENGUAJE Y MATEMATICA *****	
	function agregapreguntasBD(n) {
				switch(n){
					case: 1
					db.transaction(llenarCienciaBD, errorCB, successCB);
					break;
					case: 2
					db.transaction(llenarSocialesBD, errorCB, successCB);
					break;
					case: 2
					db.transaction(llenarLenguajeBD, errorCB, successCB);
					break;
					case: 2
					db.transaction(llenarMatematicaBD, errorCB, successCB);
					break;

				}
				
		
	}



function errorCB(err) {
	// Muestra si ha sucedido un error a procesar el codigo BD *****
    alert("Error processing SQL: Codigo: " + err.code + " Mensaje: "+err.message);
}

//Muestra si todo ha sucedido correctamente 
function successCB() {
		

}

//Crea las tablas para las preguntas, ciencias, sociales, lenguaje, matematica ----
function CreaTablasBD() {
	db.transaction(CreaTablas, errorCB, successCB);
}





	
	







function MostrarPreguntasBD(){

	db.transaction(ObtenerPreguntasBD, errorCB);
}

function ObtenerPreguntasBD(tx) {
    tx.executeSql('SELECT * FROM Ciencias', [], ImprimePreguntasBD);
}

 function ImprimePreguntasBD(tx, results) {
 	
 	
 	var sele = $("input:checked").val();
 	var len = results.rows.length;
 
 	if(sele !== undefined){
 			ac=ac+1;
 			if(ac < len && ac > 0){

 			$("#vi").html('<h5>'+ "Preg. # " +ac+ '</h5>');
	 		$(".preguntaP").html(results.rows.item(ac).Pregunta);
			$(".r1").html('1) ' + results.rows.item(ac).R1);
			$(".r2").html('2) ' + results.rows.item(ac).R2);
			$(".r3").html('3) ' + results.rows.item(ac).R3);
			$(".r4").html('4) ' + results.rows.item(ac).R4);
			
		
		}

	
	if(ac <= len && ac > 0){

		var seleccionada = $("input:checked").val();
 			var correcta = results.rows.item(ac - 1).correctas;
 			//alert('correcta es: ' + correcta + ' selecionada es: ' + seleccionada);
 			if(seleccionada !==  undefined){
 					if(seleccionada == correcta){
 					acp = acp + 1;
 					$("#correctas").html("Correctas: " + acp);
 					$('input').attr("checked",false).checkboxradio("refresh"); 
 				}else{
 					aci = aci + 1;
					$("#incorrectas").html("Incorrectas: " + aci);
					$('input').attr("checked",false).checkboxradio("refresh");
 				}

 			}
		}

	if(ac === len){
		var punto = 10 / len;
		var resultado = punto * (acp+1);

		$("#promedio").html("Nota: " + resultado );

	}
}else{

			if(ac === 1){	
			$("#vi").html('<h5>Preg.# 1</h5>');
	 		$(".preguntaP").html(results.rows.item(1).Pregunta);
			$(".r1").html('1) ' + results.rows.item(1).R1);
			$(".r2").html('2) ' + results.rows.item(1).R2);
			$(".r3").html('3) ' + results.rows.item(1).R3);
			$(".r4").html('4) ' + results.rows.item(1).R4);
			}else{
				alert("Seleciona una pregunta!!!");
			 //$("#Mensaje").html('<p>Selecciona una pregunta!!!</p>');
			
			}

}


}






