
segundos = 60;
minutos = 9;
horas = 0;

var remplazar = 0;

function prueba_rapida(){
	window.location = "pag1.html";
	var rapida1 = 1;
}
function ccnn(){
	window.location ="a_ccnn.html";
	var ccnn2 = 2;
}
function sociales(){
	window.location = "a_sociales.html";
	var sociales3 = 3;
}
function lenguaje(){
	window.location = "a_lenguaje.html";
	var lenguaje4 = 4;
}
function matematica(){
	window.location = "a_matematicas.html";
	var matematica5 = 5;
}
function menuprincipal(){
	window.location = "principal.html";
}
		
	
function iniciarTiempo(n){
	
	var interval = setInterval(

		function(){
			segundos--;
			if(segundos == 0){
				segundos = 59;
				minutos--;
			}

			if(minutos == 0){
				if(segundos == 1){
					clearInterval(interval);
					$('#sig').attr('class', 'ui-btn ui-state-disabled ui-icon-check ui-btn-icon-top');
					alert('Debes mejorar tu velocidad!!!');
				}			
			}
				$('#tiempo').html(horas+ ':' + minutos +':'+segundos );	
				if(n == 1){
					$('#iniciar').replaceWith('<a href="#" onclick="MostrarPreguntas(1);" class="ui-btn ui-icon-arrow-r ui-btn-icon-top" id="sig">Sig.</a>');
					minutos = 13
					$('#tpro').html('Tiempo: ' +(minutos+1)+ ' Minutos');
				}else if(n == 2){
					//aqui el tiempo que por examen
					$('#iniciar').replaceWith('<a href="#" onclick="MostrarPreguntas(2);" class="ui-btn ui-icon-arrow-r ui-btn-icon-top" id="sig">Sig.</a>');
					$('#tpro').html('Tiempo: ' +(minutos+1)+ ' Minutos');
				}else if(n == 3){
					//aqui el tiempo que por examen
					$('#iniciar').replaceWith('<a href="#" onclick="MostrarPreguntas(3);" class="ui-btn ui-icon-arrow-r ui-btn-icon-top" id="sig">Sig.</a>');
					$('#tpro').html('Tiempo: ' +(minutos+1)+ ' Minutos');
				}else if(n == 4){
					//aqui el tiempo que por examen
					$('#iniciar').replaceWith('<a href="#" onclick="MostrarPreguntas(4);" class="ui-btn ui-icon-arrow-r ui-btn-icon-top" id="sig">Sig.</a>');
					$('#tpro').html('Tiempo: ' +(minutos+1)+ ' Minutos');
				}else if(n == 5){
					//aqui el tiempo que por examen
					$('#iniciar').replaceWith('<a href="#" onclick="MostrarPreguntas(5);" class="ui-btn ui-icon-arrow-r ui-btn-icon-top" id="sig">Sig.</a>');
					$('#tpro').html('Tiempo: ' +(minutos+1)+ ' Minutos');
				}
				


			
				
				
		 	$('#finalizar').click(function(){
		 		clearInterval(interval);
		 		$('#finalizar').attr('class', 'ui-btn ui-state-disabled ui-icon-check ui-btn-icon-top');

		 	});		 	

		}, 1000);
	
}
		



		 	




