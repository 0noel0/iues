function main() {
		document.addEventListener("deviceready", aplicacionIniciada, false); // Al inciar la app
		document.addEventListener("pause", aplicaciónPausada, false);        // Al pausar la app
		document.addEventListener("resume", aplicaciónReiniciada, false);    // Al reiniciar la app
		document.addEventListener("online", phonegapOnline, false);          // Phonegap tiene acceso a internet
		document.addEventListener("offline", phonegapOffline, false);        // Phonegap NO tiene acceso a internet
		document.addEventListener("backbutton", atrasPulsado, false);        // Se ha pulsado la tecla atrás
		document.addEventListener("menubutton", menuPulsado, false);         // Se ha pulsado la tecla menú
		document.addEventListener("searchbutton", menuPulsado, false);       // Se ha pulsado la tecla búsqued
}

function aplicacionIniciada()
{
	CreaDB();

}
 
function aplicaciónPausada()
{
}
 
function aplicaciónReiniciada()
{
	alert("Haz regresado !!!");
}
 
function phonegapOnline()
{
}
 
function phonegapOffline()
{
}
 
function atrasPulsado()

{
	alert("atras");
	//window.location.href="principal.html";
}
 
function menuPulsado()
{

}
 
function busquedaPulsado()
{
}