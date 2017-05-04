var url2='http://c0070405.ferozo.com/';
var url='http://192.168.1.33/identhya/ssws/';

/*AUDIOS*/


// audio_file.addEventListener('timeupdate', function(){
//     var buffer = .2
//     if(this.currentTime > this.duration - buffer){
//         this.currentTime = 0
//         this.play()
//     }}, false);

/*AUDIOS*/

var currPreg=1;
var jugada_id=0;
var player_actual={};
var password='12345';
var lastTrue=[];
var player_sexos=[
{player_sexo:1,player_sexo_name:'masculino'},
{player_sexo:2,player_sexo_name:'femenino'}
];
var preguntas={
	length:11,
	1:{
		'pregunta_id':1,
		'pregunta_numero':1,
		'pregunta_text':'¿Cuáles de los siguientes alimentos son considerados cereales y legumbres y por eso nos aportan en mayor medida la energía que nuestro cuerpo necesita?',
		'preguntas_respuestas_count':7,
		'pregunta_respuestas':{
			0:{respuesta_id:0,respuesta_text:'Carne',respuesta_correcta:0,respuesta_sel:0,img:'1-1.jpg'},
			1:{respuesta_id:5,respuesta_text:'Caramelos',respuesta_correcta:0,respuesta_sel:0,img:'1-2.jpg'},

			2:{respuesta_id:1,respuesta_text:'Pan',respuesta_correcta:1,respuesta_sel:0,img:'1-3.jpg'},
			3:{respuesta_id:6,respuesta_text:'Manzana',respuesta_correcta:0,respuesta_sel:0,img:'1-4.jpg'},

			4:{respuesta_id:2,respuesta_text:'Leche',respuesta_correcta:0,respuesta_sel:0,img:'1-5.jpg'},
			5:{respuesta_id:7,respuesta_text:'Lechuga',respuesta_correcta:0,respuesta_sel:0,img:'1-6.jpg'},
			6:{respuesta_id:4,respuesta_text:'Lentejas',respuesta_correcta:1,respuesta_sel:0,img:'1-7.jpg'},

			// 3:{respuesta_id:3,respuesta_text:'Fideos',respuesta_correcta:1,respuesta_sel:0,img:'1-4.jpg'},
			// 6:{respuesta_id:6,respuesta_text:'Manzana',respuesta_correcta:0,respuesta_sel:0,img:'1-7.jpg'},
			// 8:{respuesta_id:8,respuesta_text:'Alfajor',respuesta_correcta:0,respuesta_sel:0,img:'1-9.jpg'},
			// 9:{respuesta_id:9,respuesta_text:'Ninguno',respuesta_correcta:0,respuesta_sel:0,img:'1-10.jpg'},
		},
		'pregunta_multiple':true,
		'pregunta_finalizada':0,
		'pregunta_clases':''
	},
	2:{
		'pregunta_id':2,
		'pregunta_numero':2,

		'pregunta_text':'Elegí la opción que consideres correcta',
		'preguntas_respuestas_count':2,
		'pregunta_respuestas':{
			0:{respuesta_id:0,respuesta_text:'Hay que comer frutas y verduras de todos los colores todos los días',respuesta_correcta:1,respuesta_sel:0,img:''},
			1:{respuesta_id:1,respuesta_text:'Hay que comer frutas y verduras de todos los colores, pero no es necesario comerlas todos los días',respuesta_correcta:0,respuesta_sel:0,img:''},
			
		},
		'pregunta_multiple':false,
		'pregunta_finalizada':0,
		'pregunta_clases':'item_grande'
	},
	3:{
		'pregunta_id':3,
		'pregunta_numero':3,

		'pregunta_text':'Comiendo frutas y verduras...',
		'preguntas_respuestas_count':3,
		'pregunta_respuestas':{
			0:{respuesta_id:0,respuesta_text:'...los bichitos que andan por el aire no nos enferman gracias a las vitaminas.',respuesta_correcta:1,respuesta_sel:0,img:''},
			1:{respuesta_id:1,respuesta_text:'...nuestros músculos serán fuertes gracias a las proteínas.',respuesta_correcta:0,respuesta_sel:0,img:''},
			2:{respuesta_id:2,respuesta_text:'...nuestros dientes brillarán porque tienen mucho calcio.',respuesta_correcta:0,respuesta_sel:0,img:''},
			
		},
		'pregunta_multiple':false,
		'pregunta_finalizada':0,
		'pregunta_clases':'item_grande'
	},
	4:{
		'pregunta_id':4,
		'pregunta_numero':4,

		'pregunta_text':'Es importante tomar leche, comer yogur y /o quesos...',
		'preguntas_respuestas_count':2,
		'pregunta_respuestas':{
			0:{respuesta_id:0,respuesta_text:'...3 veces al día todos los días.',respuesta_correcta:1,respuesta_sel:0,img:''},
			1:{respuesta_id:1,respuesta_text:'...sin importar la cantidad.',respuesta_correcta:0,respuesta_sel:0,img:''},
			// 2:{respuesta_id:2,respuesta_text:'Es importante consumir leche, yogur y /o quesos todos los días, sin importar la cantidad.',respuesta_correcta:0,respuesta_sel:0,img:''},
			
		},
		'pregunta_multiple':false,
		'pregunta_finalizada':0,
		'pregunta_clases':'item_grande'
		
	},
	5:{
		'pregunta_id':5,
		'pregunta_numero':5,

		'pregunta_text':'Tomar leche, comer yogur y quesos...',
		'preguntas_respuestas_count':2,
		'pregunta_respuestas':{
			0:{respuesta_id:0,respuesta_text:'...hace que los bichitos no nos enfermen gracias a las vitaminas.',respuesta_correcta:0,respuesta_sel:0,img:''},
			1:{respuesta_id:1,respuesta_text:'...te ayuda a tener dientes sanos y huesos fuertes.',respuesta_correcta:1,respuesta_sel:0,img:''},

		},
		'pregunta_multiple':false,
		'pregunta_finalizada':0,
		'pregunta_clases':'item_grande'

	},
	// 6:{
	// 	'pregunta_id':6,
	// 	'pregunta_numero':5,

	// 	'pregunta_text':'Señalá los alimentos que en tu opinión elegirías para un desayuno saludable',
	// 	'preguntas_respuestas_count':13,
	// 	'pregunta_respuestas':{
	// 		0:{respuesta_id:0,respuesta_text:'Leche',respuesta_correcta:1,respuesta_sel:0,img:''},
	// 		1:{respuesta_id:1,respuesta_text:'Yogur',respuesta_correcta:1,respuesta_sel:0,img:''},
	// 		2:{respuesta_id:9,respuesta_text:'Gaseosas o jugos',respuesta_correcta:0,respuesta_sel:0,img:''},
	// 		3:{respuesta_id:3,respuesta_text:'Pan',respuesta_correcta:1,respuesta_sel:0,img:''},
	// 		4:{respuesta_id:4,respuesta_text:'Galletitas de agua',respuesta_correcta:1,respuesta_sel:0,img:''},
	// 		5:{respuesta_id:5,respuesta_text:'Galletitas dulces',respuesta_correcta:1,respuesta_sel:0,img:''},
	// 		6:{respuesta_id:6,respuesta_text:'Facturas/bizcochos',respuesta_correcta:1,respuesta_sel:0,img:''},
	// 		7:{respuesta_id:7,respuesta_text:'Mermelada',respuesta_correcta:1,respuesta_sel:0,img:''},
	// 		8:{respuesta_id:8,respuesta_text:'Dulce de leche',respuesta_correcta:1,respuesta_sel:0,img:''},
	// 		9:{respuesta_id:2,respuesta_text:'Queso',respuesta_correcta:1,respuesta_sel:0,img:''},
	// 		10:{respuesta_id:10,respuesta_text:'Frutas (ensalada/ exprimido)',respuesta_correcta:1,respuesta_sel:0,img:''},
	// 		11:{respuesta_id:11,respuesta_text:'Cereales',respuesta_correcta:1,respuesta_sel:0,img:''},
	// 		12:{respuesta_id:12,respuesta_text:'Chizitos /papas fritas',respuesta_correcta:0,respuesta_sel:0,img:''},

	// 	},
	// 	'pregunta_multiple':true,
	// 	'pregunta_finalizada':0
	// },
	6:{
		'pregunta_id':6,
		'pregunta_numero':6,

		'pregunta_text':'¿En cuáles de los siguientes alimentos encontramos en mayor cantidad a la proteína y el hierro?',
		'preguntas_respuestas_count':8,
		'pregunta_respuestas':{
			0:{respuesta_id:0,respuesta_text:'higado',respuesta_correcta:1,respuesta_sel:0,img:'2-1.jpg'},
			1:{respuesta_id:1,respuesta_text:'naranja',respuesta_correcta:0,respuesta_sel:0,img:'2-2.jpg'},
			2:{respuesta_id:9,respuesta_text:'alfajor',respuesta_correcta:0,respuesta_sel:0,img:'2-3.jpg'},
			3:{respuesta_id:3,respuesta_text:'carne de vaca',respuesta_correcta:1,respuesta_sel:0,img:'1-1.jpg'},
			4:{respuesta_id:4,respuesta_text:'huevo',respuesta_correcta:1,respuesta_sel:0,img:'2-5.jpg'},
			5:{respuesta_id:5,respuesta_text:'pescado',respuesta_correcta:1,respuesta_sel:0,img:'2-6.jpg'},
			6:{respuesta_id:6,respuesta_text:'lentejas',respuesta_correcta:1,respuesta_sel:0,img:'1-7.jpg'},
			7:{respuesta_id:7,respuesta_text:'pollo',respuesta_correcta:1,respuesta_sel:0,img:'2-8.jpg'},
			// 8:{respuesta_id:8,respuesta_text:'Dulce de leche',respuesta_correcta:1,respuesta_sel:0,img:'2-9.jpg'},
			// 9:{respuesta_id:2,respuesta_text:'Queso',respuesta_correcta:1,respuesta_sel:0,img:'2-10.jpg'},
			// 10:{respuesta_id:10,respuesta_text:'Frutas (ensalada/ exprimido)',respuesta_correcta:1,respuesta_sel:0,img:'2-11.jpg'},
			// 11:{respuesta_id:11,respuesta_text:'Cereales',respuesta_correcta:1,respuesta_sel:0,img:'2-12.jpg'},
			// 12:{respuesta_id:12,respuesta_text:'Chizitos /papas fritas',respuesta_correcta:0,respuesta_sel:0,img:'2-13.jpg'},

		},
		'pregunta_multiple':true,
		'pregunta_finalizada':0
	},
	// 7:{
	// 	'pregunta_id':7,
	// 	'pregunta_numero':6,

	// 	'pregunta_text':'¿En cuáles de los siguientes alimentos encontramos en mayor cantidad a la proteína y el hierro?',
	// 	'preguntas_respuestas_count':11,
	// 	'pregunta_respuestas':{
	// 		0:{respuesta_id:0,respuesta_text:'Hígado',respuesta_correcta:1,respuesta_sel:0,img:''},
	// 		1:{respuesta_id:1,respuesta_text:'Lechuga',respuesta_correcta:0,respuesta_sel:0,img:''},
	// 		2:{respuesta_id:2,respuesta_text:'Mayonesa',respuesta_correcta:0,respuesta_sel:0,img:''},
	// 		3:{respuesta_id:3,respuesta_text:'Alfajor',respuesta_correcta:0,respuesta_sel:0,img:''},
	// 		4:{respuesta_id:4,respuesta_text:'Carne vacuna',respuesta_correcta:1,respuesta_sel:0,img:''},
	// 		5:{respuesta_id:5,respuesta_text:'Pollo',respuesta_correcta:1,respuesta_sel:0,img:''},
	// 		6:{respuesta_id:6,respuesta_text:'Pescado',respuesta_correcta:1,respuesta_sel:0,img:''},
	// 		7:{respuesta_id:7,respuesta_text:'Huevo',respuesta_correcta:1,respuesta_sel:0,img:''},
	// 		8:{respuesta_id:8,respuesta_text:'Cerdo',respuesta_correcta:1,respuesta_sel:0,img:''},
	// 		9:{respuesta_id:9,respuesta_text:'Morcilla',respuesta_correcta:1,respuesta_sel:0,img:''},
	// 		10:{respuesta_id:10,respuesta_text:'Lenteja',respuesta_correcta:1,respuesta_sel:0,img:''},


	// 	},
	// 	'pregunta_multiple':true,
	// 	'pregunta_finalizada':0
	// },
	7:{
		'pregunta_id':7,
		'pregunta_numero':7,

		'pregunta_text':'Comer carnes (vaca, pescado, pollo y cerdo) y huevos nos ayuda a...',
		'preguntas_respuestas_count':3,
		'pregunta_respuestas':{
			0:{respuesta_id:0,respuesta_text:'...tener una linda sonrisa aportándonos calcio',respuesta_correcta:0,respuesta_sel:0,img:''},
			1:{respuesta_id:1,respuesta_text:'...trasladar los nutrientes y darnos fuerzas”',respuesta_correcta:1,respuesta_sel:0,img:''},
			2:{respuesta_id:2,respuesta_text:'...hidratarnos',respuesta_correcta:0,respuesta_sel:0,img:''},


		},
		'pregunta_multiple':false,
		'pregunta_finalizada':0,
		'pregunta_clases':'item_grande'
	},
	8:{
		'pregunta_id':8,
		'pregunta_numero':8,

		'pregunta_text':'Piensa en las papas fritas,  golosinas, gaseosas o mayonesa, ¿Cuál te parece que es la opción acertada?',
		'preguntas_respuestas_count':3,
		'pregunta_respuestas':{
			0:{respuesta_id:0,respuesta_text:'No hay que comerlos',respuesta_correcta:0,respuesta_sel:0,img:''},
			1:{respuesta_id:1,respuesta_text:'Se pueden comer en poca cantidad, con poquito es suficiente',respuesta_correcta:1,respuesta_sel:0,img:''},
			2:{respuesta_id:2,respuesta_text:'Se pueden comer sin importar la cantidad',respuesta_correcta:0,respuesta_sel:0,img:''},


		},
		'pregunta_multiple':false,
		'pregunta_finalizada':0,
		'pregunta_clases':'item_grande'
	},
	9:{
		'pregunta_id':9,
		'pregunta_numero':9,

		'pregunta_text':'El agua...',
		'preguntas_respuestas_count':3,
		'pregunta_respuestas':{
			0:{respuesta_id:0,respuesta_text:'Es necesario beber entre 6-8 vasos de agua por día  ',respuesta_correcta:1,respuesta_sel:0,img:''},
			1:{respuesta_id:1,respuesta_text:'Al beber agua nuestro cuerpo se limpia',respuesta_correcta:1,respuesta_sel:0,img:''},
			2:{respuesta_id:2,respuesta_text:'Todos los días podemos reemplazar agua por otras bebidas como gaseosas o jugos',respuesta_correcta:0,respuesta_sel:0,img:''},


		},
		'pregunta_multiple':true,
		'pregunta_finalizada':0,
		'pregunta_clases':'item_grande'
	},
	10:{
		'pregunta_id':10,
		'pregunta_numero':10,

		'pregunta_text':'Hacer deporte, andar en bici, patinar, jugar con amigos, etc...',
		'preguntas_respuestas_count':2,
		'pregunta_respuestas':{
			0:{respuesta_id:0,respuesta_text:'...es importante para mantenerte sano.',respuesta_correcta:1,respuesta_sel:0,img:''},
			1:{respuesta_id:1,respuesta_text:'...sirve sólo para divertirte..',respuesta_correcta:0,respuesta_sel:0,img:''},


		},
		'pregunta_multiple':false,
		'pregunta_finalizada':0,
		'pregunta_clases':'item_grande'
	},
	11:{
		'pregunta_id':11,
		'pregunta_numero':11,

		'pregunta_text':'Para que nuestra alimentación sea más sana...',
		'preguntas_respuestas_count':3,
		'pregunta_respuestas':{
			0:{respuesta_id:0,respuesta_text:'...no debemos comer alimentos que tienen grasa o azúcar.',respuesta_correcta:0,respuesta_sel:0,img:''},
			1:{respuesta_id:1,respuesta_text:'...debemos comer poco',respuesta_correcta:0,respuesta_sel:0,img:''},
			2:{respuesta_id:2,respuesta_text:'...podemos incluir a todos los alimentos, respetando la cantidad.',respuesta_correcta:1,respuesta_sel:0,img:''},


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