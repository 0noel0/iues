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

var sele;

var guardaArreglo;
var al;

var ini = -1;

//Resultado promedio de las preguntas correctas
var promN;
function CreaTablas(tx) {
	tx.executeSql('CREATE TABLE IF NOT EXISTS resultados (idr INTEGER PRIMARY KEY, Materia Varchar(100), Resultado VARCHAR(100));');
    tx.executeSql('CREATE TABLE IF NOT EXISTS Users (userId INTEGER PRIMARY KEY, Nombre Varchar(100), Apellido VARCHAR(100));');
    tx.executeSql('CREATE TABLE IF NOT EXISTS Ciencias (idC INTEGER PRIMARY KEY, correctas INTEGER(3), Pregunta Varchar(500), R1 VARCHAR(100), R2 VARCHAR(100), R3 VARCHAR(100), R4 VARCHAR(100));');
    tx.executeSql('CREATE TABLE IF NOT EXISTS ciencia (idc INTEGER PRIMARY KEY, correctas INTEGER(3), Pregunta Varchar(500), R1 VARCHAR(100), R2 VARCHAR(100), R3 VARCHAR(100), R4 VARCHAR(100));');
    tx.executeSql('CREATE TABLE IF NOT EXISTS sociales (ids INTEGER PRIMARY KEY, correctas INTEGER(3), Pregunta Varchar(500), R1 VARCHAR(100), R2 VARCHAR(100), R3 VARCHAR(100), R4 VARCHAR(100));');
    tx.executeSql('CREATE TABLE IF NOT EXISTS lenguaje (idl INTEGER PRIMARY KEY, correctas INTEGER(3), Pregunta Varchar(500), R1 VARCHAR(100), R2 VARCHAR(100), R3 VARCHAR(100), R4 VARCHAR(100));');
    tx.executeSql('CREATE TABLE IF NOT EXISTS matematica (idm INTEGER PRIMARY KEY, correctas INTEGER(3), Pregunta Varchar(500), R1 VARCHAR(100), R2 VARCHAR(100), R3 VARCHAR(100), R4 VARCHAR(100));');
}


	function IngresarPreguntas(tx){
		
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "La ecuacion quimica: CH4(g)+2O2(g)  CO2(g) + 2H2O(g) . Representa una reaccion de:", "Combustion", "Desplazamiento", "Neutralizacion", "Precipitacion")');
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "En la molecula de anhidrido carbonico (CO2), la relacion de pesos atomicos es:", "2 veces el peso del carbono por peso de oxigeno", "1 peso de carbono por peso de oxigeno", "2 veces el peso del oxigeno por peso de carbono", "1 peso de carbono por 1/2 peso de oxigeno")');
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (4, "Encontrar la masa en gramos de 1.69 moles de acido fosforico (H3PO4) sabiendo que el peso atomico del hidrogeno (H) es 1, el del fosforo (P) es 31 y el del oxigeno (O) es 16.", "98 g", "48g", "50 g", "166 g")');
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "De las siguientes sustancias I) Plata, II) Sal de mesa, III) Aire, IV) Leche, V) Dioxido de carbono, VI) Azufre, VII) Azucar, VIII) Sangre. Cual de los siguientes conjuntos de numeros romanos describe en el orden: una mezcla, un elemento y un compuesto?", "I,III,V", "IV,I,VI", "VIII,VI,VII", "VIII,IV,I")');
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "Marque la respuesta correcta. Se dice que ha ocurrido un cambio quimico cuando:", "Una sustancia se funde", "Una sustancia se reduce a pequnos pedazos", "Cambian las propiedades de una sustancia, por ejemplo el color", "Se calienta una sustancia mediante una fuente de calor")');
		
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "Institución que surgió producto de los Acuerdos de Paz:", "Corte Suprema de Justicia", "Procuraduría General de la República", "Escuela de Capacitación Judicial", "Consejo Central de Elecciones")');
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "Régimen político caracterizado por la imposición, el verticalismo y la violación de los Derechos Humanos:", "Oligarquía", "Caciquismo", "Dictadura", "Democracia")');
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (4, "Trabajo cuyo esfuerzo es generalmente físico y muscular:", "Trabajo remunerado", "Trabajo intelectual", "Trabajo productivo", "Trabajo manual")');
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "Conjunto de personas que establecen vínculos entre sí, con la finalidad de satisfacer tanto necesidades individuales, como las colectivas:", "Grupos", "Compañerismo", "Comunidad", "Amigos")');
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "En sentido estricto son las diversas agrupaciones de seres humanos que se juntan en cantidades mayores o menores, tanto para la satisfacción de las necesidades primarias y las necesidades más complejas, relacionadas con su realización:", "Organizaciones", "Sociedades", "Nación", "Estado")');
		
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "Poeta y ensayista salvadoreño. Escribió entre otros, “Jugando a la gallina ciega” y “Francisco Gavidia, la odisea de su genio”:", "Walter Raudales", "Melitón Barba", "Roberto Armijo", "David Escobar Galindo.")');
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "Parte de la noticia en la cual se explica de manera detallada la información que tiene en relación con un suceso acaecido.", "Conclusión", "Cuerpo", "Entrada", "Titular")');
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "Son los elementos fundamentales en el proceso de producción cinematográfica.", "Imagen, sonido y sucesión", "La voz, el silencio y los efectos de sonido.", "Claridad y precisión en la expresión", "El guión y el storyboard")');
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "Género del periodismo donde se narra un suceso pasado con relación a hechos del presente y cuyo estilo depende de el/la autor/a, pudiendo expresarse sus opiniones.", "Editorial", "Crónica", "Entrevista", "Reportaje")');
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "Es el tipo de discurso mediante el cual se presentan razones con el objetivo de convencer al receptor.", "Argumentación", "Exposición", "Narración", "Diálogo")');

		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "Se escriben los numeros naturales consecutivos desde 1 hasta 1002 es decir: 1, 2, 3, 4, 5,.....,999,1000,1001,1002 uno a continuación del otro, en una pizarra. Luego se borran, de menor a mayor, aquellos que son de la forma 4k + 1, donde k es un número entero positivo. ¿Cuál fue el último número borrado?", "999", "1000", "1001", "1002")');
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "Todas las ostras son conchas y todas las conchas son azules; además algunas conchas son la morada de animalitos pequeños. Según los datos suministrados, ¿cuál de las siguientes afirmaciones es cierta?", "Todas las mmoradas de animalitos pequeños son ostras", "Todas las ostras son azules", "a) y b) no son ciertas", "a) y b) son ciertas las dos")');
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (4, "Es conocida la afición por las corridas de toros en España. Las corridas se celebran en las plazas de toros, las cuales tienen(generalmente) un ruedo circular de arena pisada de 40 metros de diámetro cuyo perímetro está rodeado por una defensa de madera. Un toro persigue a un torero gordito que no puede saltar la defensa a lo largo de dicha defensa, ¿qué distancia recorre en cada vuelta de la plaza?", "80pi metros", "400pi metros", "80 metros", "40pi metros")');
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "Rosa, Reina y Mila son hojas de Dilia, de 30 años de edad. Rosa es 5 años mayor que Reina y Reina 2 años mayor que Mila. Este año casualmente la suma de las edades de las tres hijas es igual a la edad de su mamá Dilia ¿cuántos años tiene Mila?", "7 años", "3 años", "10 años", "Faltan datos para calcularlo")');
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "¿Cuál es el valor de la expresion √(1+(3/4)^2 )?", "3/2", "11/8", "5/4", "7/4")');
	
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "Dos fuerzas de 3 N y 7 N de dirección horizontal y sentido hacia la derecha dan una resultante:", "10 N horizontal hacia la izquierda", "4 N horizontal hacia la derecha", "10 N horizontal hacia la derecha", "Nada de lo dicho en A, B y C")');
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "Las Bases del Plan de Nación consideraron como el centro del cumplimiento del desafío social:", "La construcción de viviendas mínimas", "La erradicación de la pobreza", "El aumento controlado del sector informal", "El tema de fortalecimiento institucional")');
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "¿Cuál de las siguientes palabras NO pertenece al español estándar?", "Huacal", "Tarro", "Balde", "Cubo")');
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (4, "DOS VECES X AL CUADRADO MULTIPLICADO POR LA RESTA DE X Y TRES VECES Z se expresa en notación algebraica:", "(2+x^2 )(x-3z)", "(2+x)^2 * (x-3z)", "2x^2(-x)(3z)", "2x^2(x-3z)")');
		tx.executeSql('INSERT INTO Ciencias (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "La probabilidad de un suceso debe cumplir:", "0<=P(s)<=1", "P(s)>=0", "P(s) diferente de 1", "P(s) no puede ser cero")');

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
		
		tx.executeSql('INSERT INTO ciencia (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "Una diferencia estructural entre la Célula Animal y la Célula Vegetal es la presencia de:", "La membrana celular", "La pared celular", "La vacuola", "Citoplasma")');
		tx.executeSql('INSERT INTO ciencia (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "Nicho ecológico se puede definir brevemente como:", "Hábitat", "Distribución", "Función", "Alimentación")');
		tx.executeSql('INSERT INTO ciencia (correctas, Pregunta, R1, R2, R3, R4) VALUES (4, "Las estructuras que son similares en especies diferentes debido a un origen evolutivo común se denominan:", "Convergentes", "Homoplásticas", "Sintéticas", "Homólogas")');
		tx.executeSql('INSERT INTO ciencia (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "Reino al que pertenecen los organismos que presentan pared celular compuesta por quitina pero carecen de clorofila y no fotosintetizan:", "Protista", "Vegetal", "Fungi", "Monera")');
		tx.executeSql('INSERT INTO ciencia (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "La estructura que une las dos cromátidas de un cromosoma recibe el nombre de:", "Centríolo", "Centrómero", "Casquete polar", "Paquinema")');
		tx.executeSql('INSERT INTO ciencia (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "Las categorías taxonómicas ordenadas en forma ascendente:", "Reino, Filum, Clase, Orden, Familia, Género, Especie", "Especie, Género, Familia, Orden , Clase, Filum, Reino", "Reino, Filum, Orden, Clase, Familia, Género, Especie", "Especie, Género, Orden, Familia, Clase, Filum, Reino")');
		tx.executeSql('INSERT INTO ciencia (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "Cuando hablamos de la ley de la segregación o ley de la pureza gamética nos referimos a:", "Teoría celular", "Primera ley de Mendel", "Segunda ley de Mendel", "Primera ley de la termodinámica")');
		tx.executeSql('INSERT INTO ciencia (correctas, Pregunta, R1, R2, R3, R4) VALUES (4, "Seleccione el literal que muestra una reacción química de combinación:", "2KClO3(s) → 2KCl(s) + 3O2(g)", "2NH3(g) → N2(g) + 3H2(g)", "H2O(l) + H2O(l) → H3O+ + OH", "2Mg(s) + O2(g) → 2MgO(s)")');
		tx.executeSql('INSERT INTO ciencia (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "La siguiente ecuación química 2H2O2(l) → 2H2O(l) + O2(g) es clasificada como una reacción de:", "Combustión", "Descomposición", "Sustitución", "Precipitación")');
		tx.executeSql('INSERT INTO ciencia (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "Una reacción de neutralización es aquella en la cual reacciona un ácido y una base para producir:", "Sal y Oxigeno gas", "Sal y agua", "Dióxido de carbono y agua", "Agua y un nuevo ácido")');
		
		tx.executeSql('INSERT INTO ciencia (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "Cuál de los siguientes es un proceso químico?:", "ennegrecimiento de la plata", "trituración de piedra", "disolución de azúcar en agua", "fusión de plomo")');
		tx.executeSql('INSERT INTO ciencia (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "Cuando átomos de un mismo elemento tienen una distinta masa se conocen como:", "Isóbaros", "Isotermos", "Isótopos", "Isoelectrónicos")');
		tx.executeSql('INSERT INTO ciencia (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "A la vista de la representación del Cloro en la tabla periódica, una molécula de gas cloro (Cl2) pesa:", "17.0 gramos", "35.453 gramos", "35.453 uma", "70.906 uma")');
		tx.executeSql('INSERT INTO ciencia (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "Los elementos en la tabla periodica, estan ordenados en:", "Grupos y No Metales", "Metales, no metales y semimetales", "Elementos de Transición y Representativos", "Representativo , Metales y no metales")');
		tx.executeSql('INSERT INTO ciencia (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "El enlace iónico se forma por la unión de los siguientes tipos de átomos:", "Metal y no metal", "No metal y no metal", "Metal y metal", "Semimetal y semimetal")');

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

		tx.executeSql('INSERT INTO sociales (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "Principio y fin de la investigacion hipotética-deductiva:", "Teorización", "Introspección", "Observación", "Experimentación")');
		tx.executeSql('INSERT INTO sociales (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "Son conceptos básicos de la sociología funcionalista:", "Mercados-producción", "Ciudadano-poder", "Status –socialización", "Personalidad-identidad")');
		tx.executeSql('INSERT INTO sociales (correctas, Pregunta, R1, R2, R3, R4) VALUES (4, "La ciencia social que se ocupa de estudiar las organizaciones y estructuras sociales dentro de las cuales se manifiesta la conducta humana; la naturaleza de los grupos e instituciones sociales, los procesos de interacción, se llama:", "Psicología social", "Geografía humana", "Antropología", "Sociología")');
		tx.executeSql('INSERT INTO sociales (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "La globalización económica ha facilitado:", "La unificación de los países", "El incremento acelerado de las Telecomunicaciones.", "La estrategia comercial favorable para países en desarrollo.", "El control")');
		tx.executeSql('INSERT INTO sociales (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "A finales del siglo XX en El Salvador nos encontramos con que las importaciones duplican las exportaciones, lo anterior quiere decir que el país tiene :", "Déficit fiscal", "Crecimiento económico lento", "Balanza comercial desfavorable", "Déficit monetario")');
		tx.executeSql('INSERT INTO sociales (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "Los problemas económicos del país a principios del siglo XXI reflejan que la mayoría de la población económicamente activa se encuentra:", "Trabajo asalariado", "Empleada", "Trabajo informal", "Subempleada")');
		tx.executeSql('INSERT INTO sociales (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "El proceso de democratización en El Salvador debe considerar los aspectos siguientes:", "Confianza y credibilidad de las instituciones del país", "Búsqueda del control absoluto del poder municipal", "Conquista del poder sin respetar la legalidad", "Lucha por controlar los medios de comunicación")');
		tx.executeSql('INSERT INTO sociales (correctas, Pregunta, R1, R2, R3, R4) VALUES (4, "Son variados y múltiples, pero presentan la característica común de compartir la fuerza de la moralidad y un sentido de justicia en la lucha para el desarrollo de su fuerza, nos referimos a:", "Partido político", "Gremial", "Asociación de trabajadores", "Movimiento social")');
		tx.executeSql('INSERT INTO sociales (correctas, Pregunta, R1, R2, R3, R4) VALUES (4, "Factor externo principal que hizo posible el proceso negociador entre el gobierno salvadoreño y el FMLN:", "La invasión estadounidense en Panamá para desalojar a Noriega en 1989", "La crisis económica y social de la región centroamericana durante la década de los 80", "El ascenso de George Bush a la presidencia de los Estados Unidos", "El colapso del bloque socialista después de la desintegración de la Unión Soviética")');
		tx.executeSql('INSERT INTO sociales (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "Aspecto subjetivo que incidió en las posibilidades de acordar la paz en El Salvador:", "El cambio doctrinal ocurrido en la Fuerza Armada", "La ofensiva del FMLN en noviembre de 1989", "El apoyo del pueblo salvadoreño a los esfuerzos por la paz", "La falta de apoyo popular a la causa de la guerrilla")');

		tx.executeSql('INSERT INTO sociales (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "Institución que surgió producto de los Acuerdos de Paz:", "Corte Suprema de Justicia", "Procuraduría General de la República", "Escuela de Capacitación Judicial", "Consejo Central de Elecciones")');
		tx.executeSql('INSERT INTO sociales (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "Régimen político caracterizado por la imposición, el verticalismo y la violación de los Derechos Humanos:", "Oligarquía", "Caciquismo", "Dictadura", "Democracia")');
		tx.executeSql('INSERT INTO sociales (correctas, Pregunta, R1, R2, R3, R4) VALUES (4, "Trabajo cuyo esfuerzo es generalmente físico y muscular:", "Trabajo remunerado", "Trabajo intelectual", "Trabajo productivo", "Trabajo manual")');
		tx.executeSql('INSERT INTO sociales (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "Conjunto de personas que establecen vínculos entre sí, con la finalidad de satisfacer tanto necesidades individuales, como las colectivas:", "Grupos", "Compañerismo", "Comunidad", "Amigos")');
		tx.executeSql('INSERT INTO sociales (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "En sentido estricto son las diversas agrupaciones de seres humanos que se juntan en cantidades mayores o menores, tanto para la satisfacción de las necesidades primarias y las necesidades más complejas, relacionadas con su realización:", "Organizaciones", "Sociedades", "Nación", "Estado")');


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
		
		tx.executeSql('INSERT INTO lenguaje (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "¿Cuándo una proposición (oración) es yuxtapuesta?", "Cuando se sucede una a otra sin necesidad de nexo", "Cuando la oración mantiene una relación de suma con la otra.", "Cuando indica una acción que contradice la de la otra.", "Cuando el sentido de una proposición depende de otra.")');
		tx.executeSql('INSERT INTO lenguaje (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "¿Qué clase de subordinada adverbial tiene la oración? “¡Voy a ver cuándo lo puedo hacer!”", "Locativa", "Temporal", "Modal", "Causal")');
		tx.executeSql('INSERT INTO lenguaje (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "Género literario que se caracteriza por narrar y describir acciones que imitan la vida real en prosa y con gran extensión:", "Teatro", "Novela", "Épica", "Lírica")');
		tx.executeSql('INSERT INTO lenguaje (correctas, Pregunta, R1, R2, R3, R4) VALUES (4, "Es un rasgo distintivo del período romántico", "Arte impregnado de religiosidad", "Florecimiento de la ciencia y cultura", "Arte al servicio cortesano", "La pasión sobre la razón")');
		tx.executeSql('INSERT INTO lenguaje (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "Dos poetas líricos del Siglo de Oro Español", "Antonio Machado – Santa Teresa de Jesús", "Garcilaso de la Vega – Lope de Vega", "Arcipreste de Hita – Gonzalo de Berceo", "Miguel de Cervantes – Marqués de Santillana")');
		tx.executeSql('INSERT INTO lenguaje (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "Cultura mesoamericana cuya capital fue Tenochtitlán y que veneraban principalmente al dios del Sol y la Guerra, Huitzilopochtli.", "Toltecas", "Olmecas", "Aztecas", "Mayas")');
		tx.executeSql('INSERT INTO lenguaje (correctas, Pregunta, R1, R2, R3, R4) VALUES (4, "Obra literaria precolombina en formato dramático, donde una historia de amor provoca un alzamiento popular en pos de lograr democratizar la sociedad y acabar con abusos y privilegios de la aristocracia reinante.", "Popol-Vuh", "Rabinal achí", "Chilar Balam", "Ollantay")');
		tx.executeSql('INSERT INTO lenguaje (correctas, Pregunta, R1, R2, R3, R4) VALUES (4, "Obra literaria en la que se narran los orígenes de los Incas, la vida de los reyes del Perú, su religión e idolatría.", "Historia General del Perú", "Comentarios Reales", "Los empeños de una casa", "Respuesta a Sor Filotea")');
		tx.executeSql('INSERT INTO lenguaje (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "Es una característica de la poesía social hispanoamericana", "Expresión del compromiso político", "Exaltación de la pasión", "Introducción de nuevas formas de expresión", "Exaltación de la moral")');
		tx.executeSql('INSERT INTO lenguaje (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "Es uno de los principales representantes del modernismo hispanoamericano", "Pablo Neruda", "Eustacio Rivera", "Rubén Darío", "Octavio Paz")');
		tx.executeSql('INSERT INTO lenguaje (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "Poeta y ensayista salvadoreño. Escribió entre otros, “Jugando a la gallina ciega” y “Francisco Gavidia, la odisea de su genio”:", "Walter Raudales", "Melitón Barba", "Roberto Armijo", "David Escobar Galindo.")');
		tx.executeSql('INSERT INTO lenguaje (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "Parte de la noticia en la cual se explica de manera detallada la información que tiene en relación con un suceso acaecido.", "Conclusión", "Cuerpo", "Entrada", "Titular")');
		tx.executeSql('INSERT INTO lenguaje (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "Son los elementos fundamentales en el proceso de producción cinematográfica.", "Imagen, sonido y sucesión", "La voz, el silencio y los efectos de sonido.", "Claridad y precisión en la expresión", "El guión y el storyboard")');
		tx.executeSql('INSERT INTO lenguaje (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "Género del periodismo donde se narra un suceso pasado con relación a hechos del presente y cuyo estilo depende de el/la autor/a, pudiendo expresarse sus opiniones.", "Editorial", "Crónica", "Entrevista", "Reportaje")');
		tx.executeSql('INSERT INTO lenguaje (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "Es el tipo de discurso mediante el cual se presentan razones con el objetivo de convencer al receptor.", "Argumentación", "Exposición", "Narración", "Diálogo")');


	}
	function IngresarMatematicaBD(tx){
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "Al resolver la ecuación Log(8) + Log(x) =3 se obtiene para x el valor de:", "75", "125", "250", "240")');
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (4, "Sara tiene algunas naranjas. Ella vendió 40% más naranjas de las que se comió. Si Sara vendió 70 naranajas ¿Cuántas se comió?", "25", "55", "75", "No aparece")');
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "Que valor de x satisface la siguiente ecuación (x+1)/3+ x/5=(1-x)/4", "1", "-5/7", "-5/47", "5")');
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "Si 1/t = 5/2 + 5/2, entonces el valor de la incógnita es", "10/29", "7/10", "29/10", "10/7")');
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "En una combinación:", "Se atiende el orden", "Es igual que permutar", "No atiende el orden", "Da lo mismo")');
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (4, "DOS VECES X AL CUADRADO MULTIPLICADO POR LA RESTA DE X Y TRES VECES Z se expresa en notación algebraica:", "(2+x^2 )(x-3z)", "(2+x)^2 * (x-3z)", "2x^2(-x)(3z)", "2x^2(x-3z)")');
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "Dada la sucesión infinita de números: 1, 4, 9, 16, 25, 36, 49,64,....¿Qué número sigue despues de 64? ", "65", "81", "74", "Cualquier número mayor que 64")');
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "La nota media conseguida en una clase de 20 alumnos ha sido de 6. Diez alumnos han reprobado con nota 3 y el resto obtuvo más de 5. ¿Cúal es la nota media de los alumnos aprobados?", "9", "5", "4.9", "3")');
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "Sea C(n,r) el número combinatori. ¿Cuánto es C(6,1) + C(6,2) + C(6,3) + C(6,4) + C(6,5)?", "64", "62", "36", "63")');
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "La probabilidad de un suceso debe cumplir:", "0<=P(s)<=1", "P(s)>=0", "P(s) diferente de 1", "P(s) no puede ser cero")');
	
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "Si alfa es un ángulo, ¿a qué es igual el suplemento de 40 - alfa?", "130 + alfa", "140 + alfa", "150 + alfa", "120 + alfa")');
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (4, "¿Cuántos grados mide el ánguño que forman las dos diagonales de las caras del cubo?", "90", "75", "45", "60")');
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "Las notas obtenidas por un alumno en tres exámenes parciales de Estadística fueron de 8, 9 y 7. Si los porcentajes asignados a cada examen son 30%, 30% y 40% respectivamente, ¿ Cuál es el primedio de aprobación del alumno?", "8", "7", "7.9", "7.5")');
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "Cuatro amigos trabajan en un supermercado algunas horas por día, recibiendo el siguiente salario por hora: Juan $2.20, Tomás $2.50, Javier $2.40 y Martín $2.10. Si Juan trabaja 20 horas, Javier 10, Tomás 20 y Martín 15 a la semana, ¿Cuál es el salario promedio por hora?", "$2.0", "$2.10", "$2.3", "$2.5")');
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "En una urna hay 3 bolas rojas y 7 verdes. Se extraen 2 bolas una tras otra sin reemplazo, ¿Cuál es la probabilidad de seleccionar una roja y seguidamente una verde?", "7/30", "1/2", "11/30", "3/13")');
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (4, "Un gráfico de barras es aplicable en:", "Cualquier tipo de dato", "Solo para las edades", "Datos continuos", "Datos discretos")');
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (4, "La formula general cuadrática es aplicable directamente a:", "Una ecuación cúbica", "Una ecuación lineal", "Un sistema de ecuaciones", "Ninguna de las anteriores")');
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "Del siguiente sistema de ecuaciones: {7x + 3y =17 ; 2x - 3y =1}¿Cuáles valores lo satisfacen?", "x=4/3; y=23/9", "x=9/7 ; y=8/3", "x=2; y=1", "x=4/2; y=-1")');
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "¿Qué función trigonométrica cumple que es positiva en el primer cuadrante y negativa en el cuartp cuadrante: ?", "Seno", "Tangente", "Coseno", "Todas las anteriores")');
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "Escoja el valor correcto de la secante de 600°:", "-2", "2", "-1/", "Ninguno de los anteriores")');
		
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "Se escriben los numeros naturales consecutivos desde 1 hasta 1002 es decir: 1, 2, 3, 4, 5,.....,999,1000,1001,1002 uno a continuación del otro, en una pizarra. Luego se borran, de menor a mayor, aquellos que son de la forma 4k + 1, donde k es un número entero positivo. ¿Cuál fue el último número borrado?", "999", "1000", "1001", "1002")');
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (2, "Todas las ostras son conchas y todas las conchas son azules; además algunas conchas son la morada de animalitos pequeños. Según los datos suministrados, ¿cuál de las siguientes afirmaciones es cierta?", "Todas las mmoradas de animalitos pequeños son ostras", "Todas las ostras son azules", "a) y b) no son ciertas", "a) y b) son ciertas las dos")');
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (4, "Es conocida la afición por las corridas de toros en España. Las corridas se celebran en las plazas de toros, las cuales tienen(generalmente) un ruedo circular de arena pisada de 40 metros de diámetro cuyo perímetro está rodeado por una defensa de madera. Un toro persigue a un torero gordito que no puede saltar la defensa a lo largo de dicha defensa, ¿qué distancia recorre en cada vuelta de la plaza?", "80pi metros", "400pi metros", "80 metros", "40pi metros")');
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (1, "Rosa, Reina y Mila son hojas de Dilia, de 30 años de edad. Rosa es 5 años mayor que Reina y Reina 2 años mayor que Mila. Este año casualmente la suma de las edades de las tres hijas es igual a la edad de su mamá Dilia ¿cuántos años tiene Mila?", "7 años", "3 años", "10 años", "Faltan datos para calcularlo")');
		tx.executeSql('INSERT INTO matematica (correctas, Pregunta, R1, R2, R3, R4) VALUES (3, "¿Cuál es el valor de la expresion √(1+(3/4)^2 )?", "3/2", "11/8", "5/4", "7/4")');
		
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
	    tx.executeSql('SELECT * FROM ciencia', [], ImprimirPreguntas);
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


	//**********************************************************************************************************************Function que imprime solo preguntas, ciencia, sociales, lenguaje, matematica
	
 	function ImprimirPreguntas(tx, results) {
 		

		 if(ini == -1){
		 	ini = 1;
		 	alert('Buena suerte!!!');
		 }


 if(ini == 1){ 

	 	
 	var len = results.rows.length;
 	//var len = 25;
 	sele = $("input:checked").val();

//condicion para que no vaya la pregunta jejejeje
if(sele == undefined){

	if(ac == 0){
		if(ac == 0){
		var pArreglo = new Array(len); 
		for(inde = 0; inde < len; inde++){
	 	pArreglo[inde]=Math.round(inde);
		}
	var cantidad = pArreglo.length;
 	seleccion(cantidad, pArreglo);
 	function seleccion(cantidad, pArreglo) {
		this.cantidad = cantidad;
		this.pArreglo = pArreglo;
 		var tamano = pArreglo.length;
		var desorden = new Array();
 		var indice = 0;
		do {
			var aleatorio = pArreglo[parseInt(Math.random()* tamano)];
			if(desorden.indexOf(aleatorio)!=-1){
				continue;
			}else{
         		    desorden[indice]=aleatorio;
		            indice++;
      		        }
		} while(desorden.length < cantidad);
				guardaArreglo = desorden;									
	}

}
//aqui finaliza aleatorio de pregunta /*****************************************************

			if(ac < len){
				al = guardaArreglo[ac];
			}
			
			$("#vi").html('<button class="ui-btn">'+ "Preg. # " +(1)+' de '+len+'</button>');
 			var arreglo = [results.rows.item(al).Pregunta, results.rows.item(al).R1, results.rows.item(al).R2, results.rows.item(al).R3, results.rows.item(al).R4, results.rows.item(al).correctas ];
				var pr = [1,2,3,4];
				var cantidad = 4;
			 
				seleccionar(cantidad, pr);

			 	function seleccionar(cantidad, pr) {
					this.cantidad = cantidad;
					this.pr = pr;
			 
					var tamano = pr.length;
					var lote = new Array();
			 
					var indice = 0;
					do {
						var aleatorio = pr[parseInt(Math.random()* tamano)];
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
			
			});
	
			$('#r2').click(function(){
				acS = ale2;
				acC = arreglo[5];
				

			});
			$('#r3').click(function(){
				acS = ale3;
				acC = arreglo[5];
				

			});
			$('#r4').click(function(){
				acS = ale4;
				acC = arreglo[5];
				//$('#prue').html(acC+'--'+acS);
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
			var promN = punto * (acp);
			$("#promedio").html("Nota: " + promN.toFixed(2) );
			ac++;
			$("#vi").html('<button class="ui-btn">'+ "Preg. # " +(ac)+' de '+len+'</button>');
				if((ac+1) > len ){
				$("#vi").html('<button class="ui-btn">'+ "Preg. # " +len+' de '+len+'</button>');
			}
			
			
		}
			
			//condicion para que seleccione una pregunta !!!
			}else{ 
				alert('Debe seleccionar una pregunta!!!');
			}	




//fin de la condicion para que no se vaya la pregunta sola
}else{
		$('input').attr("checked",false).checkboxradio("refresh");
		if(ac == 0){
		var pArreglo = new Array(len); 
		for(inde = 0; inde < len; inde++){
	 	pArreglo[inde]=Math.round(inde);
		}
	var cantidad = pArreglo.length;
 	seleccion(cantidad, pArreglo);
 	function seleccion(cantidad, pArreglo) {
		this.cantidad = cantidad;
		this.pArreglo = pArreglo;
 		var tamano = pArreglo.length;
		var desorden = new Array();
 		var indice = 0;
		do {
			var aleatorio = pArreglo[parseInt(Math.random()* tamano)];
			if(desorden.indexOf(aleatorio)!=-1){
				continue;
			}else{
         		    desorden[indice]=aleatorio;
		            indice++;
      		        }
		} while(desorden.length < cantidad);
				guardaArreglo = desorden;									
	}

}
//aqui finaliza aleatorio de pregunta /*****************************************************

			if(ac < len){
				al = guardaArreglo[ac];
			}
			
			$("#vi").html('<button class="ui-btn">'+ "Preg. # " +(1)+' de '+len+'</button>');
 			var arreglo = [results.rows.item(al).Pregunta, results.rows.item(al).R1, results.rows.item(al).R2, results.rows.item(al).R3, results.rows.item(al).R4, results.rows.item(al).correctas ];
				var pr = [1,2,3,4];
				var cantidad = 4;
			 
				seleccionar(cantidad, pr);

			 	function seleccionar(cantidad, pr) {
					this.cantidad = cantidad;
					this.pr = pr;
			 
					var tamano = pr.length;
					var lote = new Array();
			 
					var indice = 0;
					do {
						var aleatorio = pr[parseInt(Math.random()* tamano)];
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
				
			});
	
			$('#r2').click(function(){
				acS = ale2;
				acC = arreglo[5];
			

			});
			$('#r3').click(function(){
				acS = ale3;
				acC = arreglo[5];
			

			});
			$('#r4').click(function(){
				acS = ale4;
				acC = arreglo[5];
				
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
			var promN = punto * (acp);
			$("#promedio").html("Nota: " + promN.toFixed(2) );
			ac++;
			$("#vi").html('<button class="ui-btn">'+ "Preg. # " +(ac)+' de '+len+'</button>');
				if((ac+1) > len ){
				$("#vi").html('<button class="ui-btn">'+ "Preg. # " +len+' de '+len+'</button>');
			}
			
			
		}




		if(ac == (len+1)){

				

				 if(promN >= 9 && promN <= 10){
				 $(".preguntaP").replaceWith('<h1 align="center">Felicidades!!! Promedio Excelente: '+promN.toFixed(2)+'</h1>');

				 }else if( promN>= 7 && promN <= 8){
				 	$(".preguntaP").replaceWith('<h1 align="center">Feliciades!!! Promedio Muy bueno: '+promN.toFixed(2)+'</h1>');
				 }else if(promN >= 6){
				 	$(".preguntaP").replaceWith('<h1 align="center">Feliciades!!! Promedio Bueno: '+promN.toFixed(2)+'</h1>');
				 }else if(promN < 6 ){
				 	$(".preguntaP").replaceWith('<h1 align="center">Necesita mejorar :-( Reprobaste: '+promN.toFixed(2)+'</h1>');
				 }

					$('.r1').replaceWith('<a href="principal.html" class="ui-btn ui-icon-back ui-btn-icon-right">Regresar</a>');
					$('.r2').replaceWith('<a href="#" class="ui-btn ui-icon-check ui-btn-icon-right">Guardar</a>');
					$('.r3').replaceWith('<a href="#" class="ui-btn ui-icon-refresh ui-btn-icon-right">Reiniciar</a>');
					$('.r4').replaceWith('');
					$('#r1').replaceWith('');
					$('#r2').replaceWith('');
					$('#r3').replaceWith('');
					$('#r4').replaceWith('');

					$('#sig').replaceWith('<a href="#" class="ui-btn ui-icon-delete ui-btn-icon-top" id="finalizar">Det. Tiempo</a>');

					


		}


//finaliza el else de condicion de la pregunta 
}



//condicion de inicio

 }







 	
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
	case 2:
		db.transaction(actualizarItem, errorCB, successCB)
	break;
	default:
	break;
  		
	}
}

function AgregaItem(tx) {
     tx.executeSql('INSERT INTO Users (Nombre,Apellido) VALUES (?,?)',[$('#tbNombre').val(),$('#tbApellido').val()]);

}
function actualizarItem(tx) {
     tx.executeSql('update Users set Nombre=?, Apellido=? where userId="1"', [$('#tbNombre').val(),$('#tbApellido').val()])

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



function MuestraItems(tx, results) {
    var len = results.rows.length;
   
	//$("#user" + results.rows.item(i).UserId).remove();
	//$('#user').html(len);
	
	 $("#user").html(results.rows.item(len-1).Nombre +' &nbsp;'+results.rows.item(len-1).Apellido);
	 $("#actual").html('Nombre actual: '+results.rows.item(len-1).Nombre +' &nbsp;'+results.rows.item(len-1).Apellido);
	 
	 
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









