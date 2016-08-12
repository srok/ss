var url='http://srok.mooo.com/identhya/ssws/';
var url2 = 'http://90.0.0.1/identhya/ssws/';

/*AUDIOS*/
var audio_file = new Audio('ssalu_bg.mp3');
//audio_file.loop = true;
audio_file.play()

audio_file.addEventListener('timeupdate', function(){
    var buffer = .2
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
    }}, false);

/*AUDIOS*/

var currPreg=1;
var jugada_id=1;
var player_actual={};
var password='12345';
var lastTrue=[];
var player_sexos=[
{player_sexo:1,player_sexo_name:'masculino'},
{player_sexo:2,player_sexo_name:'femenino'}
];
var preguntas={
	length:12,
	1:{
		'pregunta_id':1,
		'pregunta_text':'¿Cuáles de los siguientes alimentos son considerados cereales y legumbres y por eso nos aportan en mayor medida la energía que nuestro cuerpo necesita?',
		'preguntas_respuestas_count':10,
		'pregunta_respuestas':{
			0:{respuesta_id:0,respuesta_text:'Carne',respuesta_correcta:0,respuesta_sel:0},
			1:{respuesta_id:1,respuesta_text:'Pan',respuesta_correcta:1,respuesta_sel:0},
			2:{respuesta_id:2,respuesta_text:'Leche',respuesta_correcta:0,respuesta_sel:0},
			3:{respuesta_id:3,respuesta_text:'Fideos',respuesta_correcta:1,respuesta_sel:0},
			4:{respuesta_id:4,respuesta_text:'Lentejas',respuesta_correcta:1,respuesta_sel:0},
			5:{respuesta_id:5,respuesta_text:'Caramelos',respuesta_correcta:0,respuesta_sel:0},
			6:{respuesta_id:6,respuesta_text:'Manzana',respuesta_correcta:0,respuesta_sel:0},
			7:{respuesta_id:7,respuesta_text:'Lechuga',respuesta_correcta:0,respuesta_sel:0},
			8:{respuesta_id:8,respuesta_text:'Alfajor',respuesta_correcta:0,respuesta_sel:0},
			9:{respuesta_id:9,respuesta_text:'Ninguno',respuesta_correcta:0,respuesta_sel:0},
		},
		'pregunta_multiple':true,
		'pregunta_finalizada':0,
		'pregunta_clases':''
	},
	2:{
		'pregunta_id':2,
		'pregunta_text':'Elegí la opción que consideres correcta',
		'preguntas_respuestas_count':3,
		'pregunta_respuestas':{
			0:{respuesta_id:0,respuesta_text:'Es importante consumir frutas y verduras de todos los colores todos los días',respuesta_correcta:1,respuesta_sel:0},
			1:{respuesta_id:1,respuesta_text:'Las frutas y verduras son importantes, pero con una fruta al día es suficiente',respuesta_correcta:0,respuesta_sel:0},
			2:{respuesta_id:2,respuesta_text:'Es importante comer frutas y verduras de todos los colores, pero no es necesario comerlas todos los días.',respuesta_correcta:0,respuesta_sel:0},
			
		},
		'pregunta_multiple':false,
		'pregunta_finalizada':0,
		'pregunta_clases':'item_grande'
	},
	3:{
		'pregunta_id':3,
		'pregunta_text':'¿Qué beneficio recibe nuestro cuerpo cuando comemos frutas y verduras?',
		'preguntas_respuestas_count':4,
		'pregunta_respuestas':{
			0:{respuesta_id:0,respuesta_text:'Hacen que los bichitos (virus y bacterias) no nos enfermen gracias a las vitaminas.',respuesta_correcta:1,respuesta_sel:0},
			1:{respuesta_id:1,respuesta_text:'Ayuda a que nuestros músculos sean fuertes y sanos porque nos dan gran cantidad de proteínas.',respuesta_correcta:0,respuesta_sel:0},
			2:{respuesta_id:2,respuesta_text:'Te ayuda a tener unos dientes brillantes porque tienen mucho calcio.',respuesta_correcta:0,respuesta_sel:0},
			3:{respuesta_id:3,respuesta_text:'No tiene beneficios.',respuesta_correcta:0,respuesta_sel:0},
			
		},
		'pregunta_multiple':false,
		'pregunta_finalizada':0,
		'pregunta_clases':'item_grande'
	},
	4:{
		'pregunta_id':4,
		'pregunta_text':'Elegí la afirmación correcta.',
		'preguntas_respuestas_count':3,
		'pregunta_respuestas':{
			0:{respuesta_id:0,respuesta_text:'No es importante consumir leche, yogur y /o quesos todos los días.',respuesta_correcta:0,respuesta_sel:0},
			1:{respuesta_id:1,respuesta_text:'Es importante consumir leche, yogur y /o quesos todos los días, y podemos incluirlos en el desayuno, la merienda y otra comida.',respuesta_correcta:1,respuesta_sel:0},
			2:{respuesta_id:2,respuesta_text:'Es importante consumir leche, yogur y /o quesos todos los días, sin importar la cantidad.',respuesta_correcta:0,respuesta_sel:0},
			
		},
		'pregunta_multiple':false,
		'pregunta_finalizada':0,
		'pregunta_clases':'item_grande'
		
	},
	5:{
		'pregunta_id':5,
		'pregunta_text':'En caso de considerar que es importante consumir leche, yogur y/o quesos diariamente,¿Cuál/es te parece que son los motivos?',
		'preguntas_respuestas_count':3,
		'pregunta_respuestas':{
			0:{respuesta_id:0,respuesta_text:'Ayuda a que nuestros músculos sean fuertes y sanos porque nos dan gran cantidad de proteínas.',respuesta_correcta:0,respuesta_sel:0},
			1:{respuesta_id:1,respuesta_text:'Hacen que los bichitos (virus y bacterias) no nos enfermen gracias a las vitaminas.',respuesta_correcta:0,respuesta_sel:0},
			2:{respuesta_id:2,respuesta_text:'Te ayudan a tener dientes sanos y huesos fuertes',respuesta_correcta:1,respuesta_sel:0},

		},
		'pregunta_multiple':false,
		'pregunta_finalizada':0,
		'pregunta_clases':'item_grande'

	},

	6:{
		'pregunta_id':6,
		'pregunta_text':'Señalá los alimentos que en tu opinión elegirías para un desayuno saludable',
		'preguntas_respuestas_count':13,
		'pregunta_respuestas':{
			0:{respuesta_id:0,respuesta_text:'Leche',respuesta_correcta:1,respuesta_sel:0},
			1:{respuesta_id:1,respuesta_text:'Yogur',respuesta_correcta:1,respuesta_sel:0},
			2:{respuesta_id:2,respuesta_text:'Queso',respuesta_correcta:1,respuesta_sel:0},
			3:{respuesta_id:3,respuesta_text:'Pan',respuesta_correcta:1,respuesta_sel:0},
			4:{respuesta_id:4,respuesta_text:'Galletitas de agua',respuesta_correcta:1,respuesta_sel:0},
			5:{respuesta_id:5,respuesta_text:'Galletitas dulces',respuesta_correcta:1,respuesta_sel:0},
			6:{respuesta_id:6,respuesta_text:'Facturas/bizcochos',respuesta_correcta:1,respuesta_sel:0},
			7:{respuesta_id:7,respuesta_text:'Mermelada',respuesta_correcta:1,respuesta_sel:0},
			8:{respuesta_id:8,respuesta_text:'Dulce de leche',respuesta_correcta:1,respuesta_sel:0},
			9:{respuesta_id:9,respuesta_text:'Gaseosas o jugos',respuesta_correcta:0,respuesta_sel:0},
			10:{respuesta_id:10,respuesta_text:'Frutas (ensalada/ exprimido)',respuesta_correcta:1,respuesta_sel:0},
			11:{respuesta_id:11,respuesta_text:'Cereales',respuesta_correcta:1,respuesta_sel:0},
			12:{respuesta_id:12,respuesta_text:'Chizitos /papas fritas',respuesta_correcta:0,respuesta_sel:0},

		},
		'pregunta_multiple':true,
		'pregunta_finalizada':0
	},
	7:{
		'pregunta_id':7,
		'pregunta_text':'¿En cuáles de los siguientes alimentos encontramos en mayor cantidad a la proteína y el hierro?',
		'preguntas_respuestas_count':11,
		'pregunta_respuestas':{
			0:{respuesta_id:0,respuesta_text:'Hígado',respuesta_correcta:1,respuesta_sel:0},
			1:{respuesta_id:1,respuesta_text:'Lechuga',respuesta_correcta:0,respuesta_sel:0},
			2:{respuesta_id:2,respuesta_text:'Mayonesa',respuesta_correcta:0,respuesta_sel:0},
			3:{respuesta_id:3,respuesta_text:'Alfajor',respuesta_correcta:0,respuesta_sel:0},
			4:{respuesta_id:4,respuesta_text:'Carne vacuna',respuesta_correcta:1,respuesta_sel:0},
			5:{respuesta_id:5,respuesta_text:'Pollo',respuesta_correcta:1,respuesta_sel:0},
			6:{respuesta_id:6,respuesta_text:'Pescado',respuesta_correcta:1,respuesta_sel:0},
			7:{respuesta_id:7,respuesta_text:'Huevo',respuesta_correcta:1,respuesta_sel:0},
			8:{respuesta_id:8,respuesta_text:'Cerdo',respuesta_correcta:1,respuesta_sel:0},
			9:{respuesta_id:9,respuesta_text:'Morcilla',respuesta_correcta:1,respuesta_sel:0},
			10:{respuesta_id:10,respuesta_text:'Lenteja',respuesta_correcta:1,respuesta_sel:0},


		},
		'pregunta_multiple':true,
		'pregunta_finalizada':0
	},
	8:{
		'pregunta_id':8,
		'pregunta_text':'Completa la siguiente frase eligiendo una de las tres opciones que figuran debajo “Comer carnes (vaca, pescado, pollo y cerdo) y huevos nos da proteínas y hierro que nos ayuda a…  ',
		'preguntas_respuestas_count':3,
		'pregunta_respuestas':{
			0:{respuesta_id:0,respuesta_text:'… tener una linda sonrisa”',respuesta_correcta:0,respuesta_sel:0},
			1:{respuesta_id:1,respuesta_text:'… trasladar los nutrientes y darnos fuerzas”',respuesta_correcta:1,respuesta_sel:0},
			2:{respuesta_id:2,respuesta_text:'…hidratarnos”',respuesta_correcta:0,respuesta_sel:0},


		},
		'pregunta_multiple':false,
		'pregunta_finalizada':0,
		'pregunta_clases':'item_grande'
	},
	9:{
		'pregunta_id':9,
		'pregunta_text':'Pensá en las papas fritas, golosinas, gaseosas o mayonesa, ¿Cuál te parece que es la opción acertada? Elige una de las siguientes opciones',
		'preguntas_respuestas_count':3,
		'pregunta_respuestas':{
			0:{respuesta_id:0,respuesta_text:'No hay que comerlos',respuesta_correcta:0,respuesta_sel:0},
			1:{respuesta_id:1,respuesta_text:'Se pueden comer en poca cantidad, con poquito es suficiente',respuesta_correcta:1,respuesta_sel:0},
			2:{respuesta_id:2,respuesta_text:'Se pueden comer sin importar la cantidad',respuesta_correcta:0,respuesta_sel:0},


		},
		'pregunta_multiple':false,
		'pregunta_finalizada':0,
		'pregunta_clases':'item_grande'
	},
	10:{
		'pregunta_id':10,
		'pregunta_text':'En relación al consumo de agua, ¿Cuáles de las siguientes opciones considerás son correctas? Puede haber más de una opción correcta.',
		'preguntas_respuestas_count':4,
		'pregunta_respuestas':{
			0:{respuesta_id:0,respuesta_text:'Es necesario beber entre 6-8 vasos de agua por día  ',respuesta_correcta:1,respuesta_sel:0},
			1:{respuesta_id:1,respuesta_text:'Un vaso de agua por comida es suficiente',respuesta_correcta:0,respuesta_sel:0},
			2:{respuesta_id:2,respuesta_text:'Al beber agua nuestro cuerpo se limpia',respuesta_correcta:1,respuesta_sel:0},
			3:{respuesta_id:3,respuesta_text:'El agua se puede reemplazar por otras bebidas como gaseosas o jugos',respuesta_correcta:0,respuesta_sel:0},


		},
		'pregunta_multiple':true,
		'pregunta_finalizada':0,
		'pregunta_clases':'item_grande'
	},
	11:{
		'pregunta_id':11,
		'pregunta_text':'Marcá la oración acertada',
		'preguntas_respuestas_count':2,
		'pregunta_respuestas':{
			0:{respuesta_id:0,respuesta_text:'Hacer deporte, andar en bici, patinar, jugar con amigos, etc., en tus ratos libres es importante para mantenerte sano, por eso no hay que olvidarse de moverse todos los días.',respuesta_correcta:1,respuesta_sel:0},
			1:{respuesta_id:1,respuesta_text:'Hacer deporte, andar en bici, patinar, jugar con amigos, etc., en tus ratos libres sirve sólo para divertirte.',respuesta_correcta:0,respuesta_sel:0},


		},
		'pregunta_multiple':false,
		'pregunta_finalizada':0,
		'pregunta_clases':'item_grande'
	},
	12:{
		'pregunta_id':12,
		'pregunta_text':'Para que nuestra alimentación sea más sana… (elegí la opción que consideres correcta)',
		'preguntas_respuestas_count':3,
		'pregunta_respuestas':{
			0:{respuesta_id:0,respuesta_text:'No debemos comer alimentos que tienen grasa o azúcar.',respuesta_correcta:0,respuesta_sel:0},
			1:{respuesta_id:1,respuesta_text:'Debemos comer poco',respuesta_correcta:0,respuesta_sel:0},
			2:{respuesta_id:2,respuesta_text:'Podemos incluir a todos los alimentos, respetando la cantidad.',respuesta_correcta:1,respuesta_sel:0},


		},
		'pregunta_multiple':false,
		'pregunta_finalizada':0,
		'pregunta_clases':'item_grande'
	},
};



function restartGlobals(){

	currPreg=1;
	player_actual={};

	console.log(
	{
		'curpreg':currPreg,
		'player_actual':player_actual
	}
	);
}

function alert($ionicPopup,$scope,titulo,subtitulo){
	var myPopup = $ionicPopup.show({
		title: titulo,
		subTitle: subtitulo,
		scope: $scope,

		buttons: [
		{
			text: '<b>Aceptar</b>',
			type: 'button-positive',
			onTap: function(e) {


				return true;
			}
		}
		]
	});
	return myPopup;
}

function confirm($ionicPopup,$scope,titulo,subtitulo){
	var myPopup = $ionicPopup.show({
		title: titulo,
		subTitle: subtitulo,
		scope: $scope,

		buttons: [
		{
			text: '<b>Cancelar</b>',
			type: 'button-positive',
			onTap: function(e) {


				return false;
			}
		},
		{
			text: '<b>Aceptar</b>',
			type: 'button-positive',
			onTap: function(e) {


				return true;
			}
		}
		]
	});
	return myPopup;
}