var db = window.openDatabase("bdIngresoUES.s3db", "1.0", "base de datos ingreso UES", 200 * 1024);
var UserId=0;
var ac = 0;
var acp = 0;
var aci = 0;
var acS = 0;
var acC = 0;
//preguntas aleatorias
var ale1, ale2, ale3, ale4;
var aleC;
function CreaTablas(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS Users (userId INTEGER PRIMARY KEY, Nombre Varchar(100), Apellido VARCHAR(100));');
    tx.executeSql('CREATE TABLE IF NOT EXISTS Ciencias (idC INTEGER PRIMARY KEY, correctas INTEGER(3), Pregunta Varchar(500), R1 VARCHAR(100), R2 VARCHAR(100), R3 VARCHAR(100), R4 VARCHAR(100));');
    tx.executeSql('CREATE TABLE IF NOT EXISTS ciencia (idc INTEGER PRIMARY KEY, correctas INTEGER(3), Pregunta Varchar(500), R1 VARCHAR(100), R2 VARCHAR(100), R3 VARCHAR(100), R4 VARCHAR(100));');
    tx.executeSql('CREATE TABLE IF NOT EXISTS sociales (ids INTEGER PRIMARY KEY, correctas INTEGER(3), Pregunta Varchar(500), R1 VARCHAR(100), R2 VARCHAR(100), R3 VARCHAR(100), R4 VARCHAR(100));');
    tx.executeSql('CREATE TABLE IF NOT EXISTS lenguaje (idl INTEGER PRIMARY KEY, correctas INTEGER(3), Pregunta Varchar(500), R1 VARCHAR(100), R2 VARCHAR(100), R3 VARCHAR(100), R4 VARCHAR(100));');
    tx.executeSql('CREATE TABLE IF NOT EXISTS matematica (idm INTEGER PRIMARY KEY, correctas INTEGER(3), Pregunta Varchar(500), R1 VARCHAR(100), R2 VARCHAR(100), R3 VARCHAR(100), R4 VARCHAR(100));');
}


	function IngresarPreguntas(tx){
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "De Acuerdo con la teoria bioquimica o evolutiva sobre el origen y evolucion de la vida la atmosfera primitiva carecia de: ", "Oxigeno", "Agua", "Hidrogeno", "Nitrogeno")');
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "La Ciencia se caracteriza por ser: ", "Racional y objetiva", "Objetiva y fantastica", "Racional y Subjetiva", "Subjetiva y Acumulativa")');
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (4, "Nombre de los organelos que transforman la energia quimica en energia biologicamente util: ", "Lisosoma", "Vacuola", "Reticulo", "Mitocondria")');
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (4, "Grupo de organismos procariontes, capaces de sobrevivir en lugares con alta temperatura y ph extremo:", "Eubacterias", "Bacterias", "Cianobacterias", "Arqueobacterias")');
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (4, "Periodo en el cual ocurre la mayor actividad enzimatica:", "Profase", "Anafase", "Metafase", "Interfase")');
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "Componentes bioticos de un ecosistema:", "Productores, consumidores y desintegradores", "Aire, agua, oxigeno", "Hidrogeno, consumidores, agua", "Desintegradores, oxigeno, agua")');
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (4, "Una forma de representar el flujo de energia entre los distintos organismos que constituyen un ecosistema es:", "Escalones ecologicos", "Productividad ecologica", "Productividad energetica", "Piramides ecologicas")');
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "Tipo de division celular que se da en seres vivos con reproduccion sexual, se lleva acabo en celulas gonadales, da como resultado celulas sexuales y permite la variabilidad genetica de las especies:", "Mitosis", "Meiosis", "Endomitosis", "Pleuromitosis")');
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "El area o lugar donde habita un ser vivo se llama:", "Nicho", "Habitat", "Madriguera", "Comunidad")');
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "La ecuacion quimica: CH4(g)+2O2(g)  CO2(g) + 2H2O(g) . Representa una reaccion de:", "Combustion", "Desplazamiento", "Neutralizacion", "Precipitacion")');
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "En la molecula de anhidrido carbonico (CO2), la relacion de pesos atomicos es:", "2 veces el peso del carbono por peso de oxigeno", "1 peso de carbono por peso de oxigeno", "2 veces el peso del oxigeno por peso de carbono", "1 peso de carbono por 1/2 peso de oxigeno")');
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (4, "Encontrar la masa en gramos de 1.69 moles de acido fosforico (H3PO4) sabiendo que el peso atomico del hidrogeno (H) es 1, el del fosforo (P) es 31 y el del oxigeno (O) es 16.", "98 g", "48g", "50 g", "166 g")');
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "De las siguientes sustancias I) Plata, II) Sal de mesa, III) Aire, IV) Leche, V) Dioxido de carbono, VI) Azufre, VII) Azucar, VIII) Sangre. Cual de los siguientes conjuntos de numeros romanos describe en el orden: una mezcla, un elemento y un compuesto?", "I,III,V", "IV,I,VI", "VIII,VI,VII", "VIII,IV,I")');
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "Marque la respuesta correcta. Se dice que ha ocurrido un cambio quimico cuando:", "Una sustancia se funde", "Una sustancia se reduce a pequnos pedazos", "Cambian las propiedades de una sustancia, por ejemplo el color", "Se calienta una sustancia mediante una fuente de calor")');
	}

	function IngresarCienciaBD(tx){
		tx.executeSql('INSERT INTO ciencia (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "Indica cuál es la afirmación correcta. Movimiento mecánico en el espacio es:", "un cambio de lugar", "un cambio de lugar sólo si el cuerpo que se mueve es un punto material", "cambio de punto de vista", "la aplicación de una fuerza")');
		tx.executeSql('INSERT INTO ciencia (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "Un coche pasa de 90 km/h a 126 km/h en 8 segundos. La aceleración media del coche ha sido:", "4.5 m/s2", "2.25 m/s2", "1.25 m/s2", "1.5 m/s2")');
		tx.executeSql('INSERT INTO ciencia (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "Una piedra se arroja hacia arriba y alcanza una altura H antes de caer de nuevo al piso, T segundos después de ser lanzada. Su velocidad media durante el intervalo de tiempo T es:", "0 m/s", "H/2T", "H/T", "2H/T")');
		tx.executeSql('INSERT INTO ciencia (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "La línea que un móvil describe en su movimiento se llama:", "Geodésica", "Trayectoria", "Línea adiabática", "Vector desplazamiento")');
		tx.executeSql('INSERT INTO ciencia (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "Dos fuerzas de 3 N y 7 N de dirección horizontal y sentido hacia la derecha dan una resultante:", "10 N horizontal hacia la izquierda", "4 N horizontal hacia la derecha", "10 N horizontal hacia la derecha", "Nada de lo dicho en A, B y C")');
		tx.executeSql('INSERT INTO ciencia (correctas, Pregunta, R1, R2, R3, R4) VALUES (4, "De las siguientes aseveraciones seleccione la correcta:", "La carga eléctrica no se crea ni se destruye solo se transforma.", "Un cuerpo eléctricamente neutro tiene igual número de protones y neutrones.", "Un cuerpo que gana electrones, decimos que está cargado positivamente.", "La carga eléctrica neta no se crea ni se destruye, pero si se conserva")');
		tx.executeSql('INSERT INTO ciencia (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "Las ondas son vibraciones que se propagan por los medios materiales transportando....:", "materia y energía", "sólo materia", "sólo energía", "ninguna de las anteriores")');
		tx.executeSql('INSERT INTO ciencia (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "Todos los fluidos son:", "Los gases", "Los líquidos", "Los gases y los líquidos", "Los no metálicos")');
		tx.executeSql('INSERT INTO ciencia (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "Científico que formuló la teoría de la generación espontánea:", "Miller", "Pasteur", "Aristóteles", "Oparin")');
		tx.executeSql('INSERT INTO ciencia (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "La ciencia dedicada a describir, nombrar y clasificar los organismos de forma evolutiva es la:", "Taxonomía", "Sistemática", "Clasificación", "Genética")');
		
	}
	function IngresarSocialesBD(tx){
		tx.executeSql('INSERT INTO sociales (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "La inalienabilidad de los Derechos Humanos radica en la capacidad del individuo de NO:", "Cambiar por otros derechos", "Transferir a otras personas", "Perder esos derechos", "Negar a los ciudadanos")');
		tx.executeSql('INSERT INTO sociales (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "Al irrespetar la integridad física y mental de una persona, se están atropellando los derechos :", "De solidaridad", "Civiles y políticos", "De igualdad", "Sociales y culturales")');
		tx.executeSql('INSERT INTO sociales (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "Las alcaldías en El Salvador utilizan el mecanismo de participación ciudadana:", "Las consultas populares", "La revocación de mandato", "El poder popular", "La iniciativa popular")');
		tx.executeSql('INSERT INTO sociales (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "Uno de los propósitos del modelo de economía de mercado desde 1989, fue:", "Luchar por los más pobres de los pobres", "Fortalecer el control de precios", "Disminuir la intervención del Estado", "Eliminar la liberación del mercado")');
		tx.executeSql('INSERT INTO sociales (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "Se refiere al rubro favorecido por las políticas neoliberales:", "Agrícola", "Industrial", "Financiero", "Mercantil")');
		tx.executeSql('INSERT INTO sociales (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "Han sido vistos como países ejemplos de la aplicación de políticas neoliberales:", "Costa Rica y Puerto Rico", "Hong Kong y Singapur", "Suiza y Suecia", "Paraguay y Uruguay")');
		tx.executeSql('INSERT INTO sociales (correctas, Pregunta, R1, R2, R3, R4) VALUES (4, "El Salvador no esta exento del deterioro medio ambiental, entre otros, producto del desarrollo industrial, las zonas mayormente impactadas en el país son:", "Norte y sur", "Sur y occidente", "Sur y oriente", "Norte y oriente")');
		tx.executeSql('INSERT INTO sociales (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "Las Bases del Plan de Nación consideraron como el centro del cumplimiento del desafío social:", "La construcción de viviendas mínimas", "La erradicación de la pobreza", "El aumento controlado del sector informal", "El tema de fortalecimiento institucional")');
		tx.executeSql('INSERT INTO sociales (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "Para El Salvador los retos en el ámbito cultural incluyen:", "La constante modificación de valores económicos y políticos", "La necesidad de aumentar la autoestima de nuestra identidad", "El permanente papel que juega el hombre en la cultura", "El papel del legislador de los medios de comunicación")');
		tx.executeSql('INSERT INTO sociales (correctas, Pregunta, R1, R2, R3, R4) VALUES (4, "En el marco de las Ciencias Sociales; el eje unificador es:", "El hombre y su realidad", "La naturaleza de ser", "La historia personal", "El ser humano")');


	}
	function IngresarLenguajeBD(tx){
		tx.executeSql('INSERT INTO lenguaje (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "Seleccione la palabra escrita correctamente:", "Cervesa", "Serveza", "Cerveza", "Cerbeza")');
		tx.executeSql('INSERT INTO lenguaje (correctas, Pregunta, R1, R2, R3, R4) VALUES (4, "Seleccione la palabra correcta para completar la oración: “En la playa amaneció insólita y triste, una _________ varada.”", "bayena", "vayena", "vallena", "ballena")');
		tx.executeSql('INSERT INTO lenguaje (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "Selecciona la palabra adecuada para completar la oración: “El enamorado __________tiernamente cuando arribó su sonrisa”.", "Emrrogeció", "Enrogeció", "Enrojeció", "Enrrojeció")');
		tx.executeSql('INSERT INTO lenguaje (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "¿Cuál de las siguientes palabras NO pertenece al español estándar?", "Huacal", "Tarro", "Balde", "Cubo")');
		tx.executeSql('INSERT INTO lenguaje (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "En los siguientes enunciados, elija el que cumple con la definición de oración.", "Mientras, huérfano de esperanza, el hombre.", "En las sombras se espanta mi tristeza.", "Sangre salvaje violenta en las venas.", "Hijo del Invierno fermentado de maíz.")');
		tx.executeSql('INSERT INTO lenguaje (correctas, Pregunta, R1, R2, R3, R4) VALUES (4, "Función de lengua que predomina cuando el emisor desea transmitir una información expresando en ella sus sentimientos.", "Función conativa", "Función apelativa", "Función denotativa", "Función emotiva")');
		tx.executeSql('INSERT INTO lenguaje (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "“No renunciaré a mi nombre de tierra y pueblo”. El enunciado anterior es un ejemplo de:", "Oración simple", "Oración compleja", "Oración compuesta", "Oración subordinada")');
		tx.executeSql('INSERT INTO lenguaje (correctas, Pregunta, R1, R2, R3, R4) VALUES (4, "Es elemento imprescindible de una oración:", "Complemento directo", "Complemento indirecto", "Sustantivo", "Predicado")');
		tx.executeSql('INSERT INTO lenguaje (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "En la oración “Con lanzas de huiscoyol y cañones de palo sublevó a los nonualcos contra el gobierno central”. El núcleo del predicado es:", "Con lanzas de huiscoyol y cañones de palo", "Sublevó", "Contra", "Gobierno central")');
		tx.executeSql('INSERT INTO lenguaje (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "Encuentre el núcleo del sintagma nominal, en la oración siguiente: “Los moradores de Tula eran ricos y felices ”:", "Tula", "Moradores", "Eran", "Ricos")');
		
	}
	function IngresarMatematicaBD(tx){
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "", "", "", "", "")');
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "", "", "", "", "")');
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "", "", "", "", "")');
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "", "", "", "", "")');
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "", "", "", "", "")');
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "", "", "", "", "")');
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "", "", "", "", "")');
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "", "", "", "", "")');
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "", "", "", "", "")');
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "", "", "", "", "")');
		
	}

	
	//***********************************functiones encargadas de ingresar y hacer consultas a las base de datos		
	function AgregarPreguntas() {
		for(var i=1;i<=5;i++){
			switch(i)
			{
			case 1:
				db.transaction(IngresarPreguntas, errorCB, successCB);
			break;
			case 2:
				db.transaction(IngresarCienciaBD, errorCB, successCB);
			break;
			case 3:
				db.transaction(IngresarSocialesBD, errorCB, successCB);
			break;
			case 4:
				db.transaction(IngresarLenguajeBD, errorCB, successCB);
			break;
			case 5:
				db.transaction(IngresarMatematicaBD, errorCB, successCB);
			break;

			default:
			break;
		  		
			}
		}

	}

	
	function MostrarPreguntas(n){
		switch(n)
			{
			case 1:
				db.transaction(ObtenerPreguntas, errorCB);
			break;
			case 2:
				db.transaction(ObtenerCiencia, errorCB);
			break;
			case 3:
				db.transaction(ObtenerSociales, errorCB);
			break;
			case 4:
				db.transaction(ObtenerLenguaje, errorCB);
			break;
			case 5:
				db.transaction(ObtenerMatematica, errorCB);
			break;

			default:
			break;
		  		
			}
	}

	function ObtenerPreguntas(tx) {
	    tx.executeSql('SELECT * FROM Ciencias', [], ImprimirPreguntas);
	}
	function ObtenerCiencia(tx) {
	    tx.executeSql('SELECT * FROM Ciencia', [], ImprimirPreguntas);
	}
	function ObtenerSociales(tx) {
	    tx.executeSql('SELECT * FROM sociales', [], ImprimirPreguntas);
	}
	function ObtenerLenguaje(tx) {
	    tx.executeSql('SELECT * FROM lenguaje', [], ImprimirPreguntas);
	}
	function ObtenerMatematica(tx) {
	    tx.executeSql('SELECT * FROM matematica', [], ImprimirPreguntas);
	}





	/////*******************************************************************************************************





	//**********************************************************************************************************************Function que imprime solo preguntas, ciencia, sociales, lenguaje, matematica
	
 	function ImprimirPreguntas(tx, results) {

 			
 			
		 	var len = results.rows.length;
			var al = Math.floor(Math.random()*len);
			
			//$("#vi").html('<button class="ui-btn">'+ "Preg. # " +(1)+' de '+len+'</button>');
 			var arreglo = [results.rows.item(al).Pregunta, results.rows.item(al).R1, results.rows.item(al).R2, results.rows.item(al).R3, results.rows.item(al).R4, results.rows.item(al).correctas ];
 			
				 var zoo = [1,2,3,4];
				var cantidad = 4;
			 
				seleccionar(cantidad, zoo);

			 	function seleccionar(cantidad, zoo) {
					this.cantidad = cantidad;
					this.zoo = zoo;
			 
					var tamano = zoo.length;
					var lote = new Array();
			 
					var indice = 0;
					do {
						var aleatorio = zoo[parseInt(Math.random()* tamano)];
						if(lote.indexOf(aleatorio)!=-1){
							continue;
						}else{
			         		    lote[indice]=aleatorio;
					            indice++;
			      		        }
					} while(lote.length < cantidad);
			 
					ale1 = lote[0];
					ale2 = lote[1];
					ale3 = lote[2];
					ale4 = lote[3];
					
				}
 		
 			$(".preguntaP").html(arreglo[0]);
			$(".r1").html('1) ' + arreglo[ale1]);
			$(".r2").html('2) ' + arreglo[ale2]);
			$(".r3").html('3) ' + arreglo[ale3]);
			$(".r4").html('4) ' + arreglo[ale4]);
		

			$('#r1').click(function(){
 				acS = ale1;
				acC = arreglo[5];
				$('#prue').html(acC+'--'+acS);
			});
	
			$('#r2').click(function(){
				acS = ale2;
				acC = arreglo[5];
				$('#prue').html(acC+'--'+acS);

			});
			$('#r3').click(function(){
				acS = ale3;
				acC = arreglo[5];
				$('#prue').html(acC+'--'+acS);

			});
			$('#r4').click(function(){
				acS = ale4;
				acC = arreglo[5];
				$('#prue').html(acC+'--'+acS);
			});


			if(acS > 0){
				
				

				if( acC==acS ){
				acC = 0;
				acS = 0;
				acp++;
 				$("#correctas").html("Correctas: " + acp);
 				$('input').attr("checked",false).checkboxradio("refresh"); 
				}else{
				acC = 0;
				acS = 0;
					aci++;
					$("#incorrectas").html("Incorrectas: " + aci);
					$('input').attr("checked",false).checkboxradio("refresh");

				}
		
			}


		if(ac <= (len+1)){
			var punto = 10 / len;
			var resultado = punto * (acp);
			$("#promedio").html("Nota: " + resultado );
			ac++;
			$("#vi").html('<button class="ui-btn">'+ "Preg. # " +(ac)+' de '+len+'</button>');
			if((ac+1) > len ){
				$("#vi").html('<button class="ui-btn">'+ "Preg. # " +len+' de '+len+'</button>');
			}
			
			
		}




		if(ac == (len+1)){
				 if(acp >= 9 && acp <= 10){
				  	$(".preguntaP").html('<h1 align="center">Felicidades!!! Promedio Excelente: '+acp+'</h1>');
				 }else if(acp >= 7 && acp <= 8){
				 	$(".preguntaP").html('<h1 align="center">Feliciades!!! Promedio Muy bueno:'+acp+'</h1>');
				 }else if(acp > 5 && acp <= 6){
				 	$(".preguntaP").html('<h1 align="center">Feliciades!!! Promedio Bueno:'+acp+'</h1>');
				 }else if(acp <= 5 ){
				 	$(".preguntaP").html('<h1 align="center">Necesita mejorar :-( Reprobaste: '+acp+'</h1>');
				 }

				
					$('.r1').replaceWith('');
					$('.r2').replaceWith('');
					$('.r3').replaceWith('');
					$('.r4').replaceWith('');
					$('#r1').replaceWith('');
					$('#r2').replaceWith('');
					$('#r3').replaceWith('');
					$('#r4').replaceWith('');
					$('#sig').replaceWith('<a href="principal.html" class="ui-btn ui-icon-arrow-r ui-btn-icon-top" id="finalizar">Finalizar</a>');
		}



			
		
				

			


 	/*	
 	
  	var sele = $("input:checked").val();
 	var len = results.rows.length;
	var al = Math.floor(Math.random()*len);
 	var arreglo = [results.rows.item(al).Pregunta, results.rows.item(al).R1, results.rows.item(al).R2, results.rows.item(al).R3, results.rows.item(al).R4, results.rows.item(al).correctas ];
 			

 	var ar = (arreglo.length)


 	if(sele !== undefined){
 			ac=ac+1;
 			if(ac < len && ac > 0){
 					
 				$('#prue').html('<ul><li>'+arreglo[5]+'</li></ul>');

 			$("#vi").html('<button class="ui-btn">'+ "Preg. # " +(ac+1)+' de '+len+'</button>');
	 		$(".preguntaP").html(arreglo[0]);
			$(".r1").html('1) ' + arreglo[1]);
			$(".r2").html('2) ' + arreglo[2]);
			$(".r3").html('3) ' + arreglo[3]);
			$(".r4").html('4) ' + arreglo[4]);
		}

	
	if(ac <= len && ac > 0){

		var seleccionada = $("input:checked").val();
 			//var correcta = results.rows.item(ar).correctas;
 			//alert('correcta es: ' + correcta + ' selecionada es: ' + seleccionada);

 			if(seleccionada !==  undefined){
 				var arre = arreglo[5];
 				alert(arre);
 					if(seleccionada == arreglo[5]){
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
		var resultado = punto * (acp);

		$("#promedio").html("Nota: " + resultado );
		$('#sig').replaceWith('<a href="#" class="ui-btn ui-icon-arrow-r ui-btn-icon-top" id="finalizar">Finalizar</a>');

	}
}else{

			if(ac === 0){	
			$("#vi").html('<button class="ui-btn">Preg. # 1'+' de ' + len + '</button>');
	 		$(".preguntaP").html(results.rows.item(ar).Pregunta);
			$(".r1").html('1) ' + results.rows.item(ar).R1);
			$(".r2").html('2) ' + results.rows.item(ar).R2);
			$(".r3").html('3) ' + results.rows.item(ar).R3);
			$(".r4").html('4) ' + results.rows.item(ar).R4);
			}else{
				alert("Seleciona una pregunta!!!");
			 //$("#Mensaje").html('<p>Selecciona una pregunta!!!</p>');
			
			}

}
*/

}
//***************************************************************************************************************************************************


function errorCB(err) {
	// Esto se puede ir a un Log de Error diria el purista de la oficina, pero como este es un ejemplo pongo el MessageBox.Show :P
    alert("Error processing SQL: Codigo: " + err.code + " Mensaje: "+err.message);
}

function successCB() {
		
	
/*
	
	if (UserId > 0) {
	alert('El Usuario fue eliminado.');
	$("#ListaEliminarId" + UserId).remove();
	UserId=0;
	}
	$('#tbNombre').val('');
	$('#tbApellido').val('');
	*/
}

function CreaDB() {
	db.transaction(CreaTablas, errorCB, successCB);
}

function Agregar(n) {
	switch(n)
	{
	case 1:
		db.transaction(AgregaItem, errorCB, successCB);
	break;
	default:
	break;
  		
	}
}

function AgregaItem(tx) {
     tx.executeSql('INSERT INTO Users (Nombre,Apellido) VALUES (?,?)',[$('#tbNombre').val(),$('#tbApellido').val()]);

}

function Mostrar(n) {	
	switch(n)
	{	 

	case 1:
	  	db.transaction(ObtenerItems, errorCB);
	break;
	default:
	break;
	}
}

function ObtenerItems(tx) {
    tx.executeSql('SELECT * FROM Users', [], MuestraItems, errorCB);
}


function ObtenerDatos(tx) {
    tx.executeSql('SELECT count(*) FROM Users', errorCB);
}



function MuestraItems(tx, results) {
    var len = results.rows.length;
   
	//$("#user" + results.rows.item(i).UserId).remove();
	  
	$("#user").append(results.rows.item(len-1).Nombre +' &nbsp;'+results.rows.item(len-1).Apellido);
	 
}

function Borrar(n,UserId) {
	UserId = UserId;
	switch(n)
	{
	case 1:
	  	db.transaction(BorrarItem, errorCB);
	  break;
	default:
  		
	}
}

function BorrarItem(tx) {
	tx.executeSql('DELETE FROM Users WHERE userId=?', [UserId], successCB, errorCB);
}



//funciones para loguearse una sola vez 

function consulto(){
	db.transaction(ObtenerDatos, errorCB);
}

function ObtenerDatos(tx) {
    tx.executeSql('SELECT * FROM Users', [], condiciones);
}

 function condiciones(tx, results) {

    var len = results.rows.length;
    if(len > 0){
           var pagina="principal.html"; 
           location.href=pagina; 

        }else if(len == 0){
         	var pagina="log.html"; 
           	location.href=pagina; 
        }
 
    }





