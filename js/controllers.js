angular.module('app.controllers', [])

.controller('juegoNuevoCtrl', function($scope) {
	$scope.jugada_id=jugada_id;
	$scope.nuevaJugada = function(){
		$scope.jugada_id = 0;
		jugada_id=0;
	};

	$scope.iniciarJugada = function(jugada_cod){
		$scope.jugada_id = jugada_cod;
		jugada_id=jugada_cod;
	};

	
})

.controller('ingreseLaContraseACtrl', function($scope,$state,$ionicSideMenuDelegate) {
	$ionicSideMenuDelegate.canDragContent(false);

	$scope.password={};

	$scope.checkPass=function (){
		if($scope.password.pass==password){
			$scope.password.pass='';
			$scope.password.error=false;
			$state.go('menu.juegoNuevo');
		}else{
			$scope.password.error=1;
		}
	};
})

.controller('loginCtrl', function($scope) {

})

.controller('finPreguntasCtrl', function($scope) {

})

.controller('datosDelJugadorCtrl', function($scope, $location, $state,$ionicPopup) {
	
	$scope.player={
		player_name:'',
		player_code:'',
		player_sexo:'1',
		player_edad:'10',
		player_vuelta:1
	};
	$scope.player_sexos=player_sexos;
	$scope.checkPlayer=function (){
		console.log($scope.player.player_code);
		db.transaction(function(tx) {

			tx.executeSql('select * from respuestas where jugador_codigo = ? AND id_jugada=?', [$scope.player.player_code,jugada_id], function(tx,rs) {
				if(rs.rows.length>0){
					for (var i = 0; i < rs.rows.length; i++) {
						var p = rs.rows.item(i);
						$scope.player.player_name=p.jugador_nombre;
						$scope.player.player_sexo=p.jugador_sexo;
						$scope.player.player_edad=p.jugador_edad;
						$scope.$apply();
					}
				}else{
					$scope.player={
						player_code:$scope.player.player_code,
						player_name:'',
						player_sexo:'1',
						player_edad:'10',
						player_vuelta:1
					};
					$scope.$apply();
				}
			}, errorDB);

		}, errorDB, successDB);
	}

	$scope.loadPlayer=function (player){
		//chequeo si ya jugó. si jugo le sumo una vuelta, si jugo dos veces alerto.

		db.transaction(function(tx) {

			tx.executeSql('select * from respuestas where jugador_codigo = ? AND id_jugada=? GROUP BY respuesta_vuelta', [player.player_code,jugada_id], function(tx,rs) {
				console.log(rs.rows);
				if(rs.rows.length==1){
					$scope.player.player_vuelta=2;

				}else if(rs.rows.length==2){
					$scope.player.player_vuelta=3;
				}

				if($scope.player.player_vuelta<3){
									//cargo el jugador en global.
									player_actual=$scope.player;

									//voy a pantalla de inicio de encuesta
									$state.go('menu.pregunta');
								}else{
									
									alert($ionicPopup,$scope,'Juego terminado','El jugador ya termino de jugar.');

								}

							}, errorDB);

		}, errorDB);


	};

})

.controller('preguntaCtrl', function($scope,$stateParams,$state,$rootScope,$ionicSideMenuDelegate) {
	$ionicSideMenuDelegate.canDragContent(false);
	$scope.player= player_actual;
	// $scope.player.player_vuelta= 2;
	$scope.pregunta= preguntas[currPreg];
	$scope.ultPreg=preguntas.length;
	$scope.siguiente_pregunta=$stateParams.p+1;//getNextQuestion();
	currPreg++;
	

	$scope.siguientePregunta=function(p){//Graba la pregunta y al finanlizar llama al metodo que redibuja la proxima
		if(!preguntas[currPreg-1].pregunta_finalizada){//se fija si la pregunta actual ya fue respondida dos veces

			db.transaction(function(tx) {
				for(i=0;i<$scope.pregunta.preguntas_respuestas_count;i++){
					respuesta=$scope.pregunta.pregunta_respuestas[i];
					value=0;
					if(respuesta.respuesta_sel!=0){
						value=1;
						lastTrue.push(i);
					}
				//reseteo para el proximo jugador. TODO: VER DE HACER ESTE RESETEO MAS PROLIJO
				respuesta.respuesta_sel=0;

				tx.executeSql('insert into respuestas values(?,?,?,?,?,?,?,?,?,?)',[jugada_id,player_actual.player_code,$scope.pregunta.pregunta_id,player_actual.player_vuelta,i,value,player_actual.player_edad,player_actual.player_name,player_actual.player_sexo,respuesta.respuesta_text]);
				console.log([jugada_id,player_actual.player_code,$scope.pregunta.pregunta_id,player_actual.player_vuelta,i,value,player_actual.player_edad,player_actual.player_name,player_actual.player_sexo,respuesta.respuesta_text]);
				
			}
		}, errorDB, $scope.nextQ);
		}else{//si la pregunta actual fue respondida dos veces paso a la proxima
			$scope.nextQ();
		}
		
	}

	$scope.nextQ=function(){//dibuja la proxima pregunta

		$rootScope.bodyClass='fondo'+preguntas[currPreg-1].pregunta_id;

		if(!preguntas[currPreg-1].pregunta_finalizada && player_actual.player_vuelta==2){//si segunda vuelta primer siguiente
		   //mostrar los resultados
		   preguntas[currPreg-1].pregunta_finalizada=1;
		   $scope.pregunta= preguntas[currPreg-1];
		   $scope.$apply();

		}else if(preguntas[currPreg-1].pregunta_finalizada || player_actual.player_vuelta==1){//si segunda vuelta segundo siguiente o primera vuelta:
			
			preguntas[currPreg-1].pregunta_finalizada=0 // reseteo para el proximo jugador TODO:ver de hacer eres reseteo mas prolijo
			
			if(currPreg<=preguntas.length){//Si hay una pregunta despues
				$scope.pregunta= preguntas[currPreg];
				$scope.ultPreg=preguntas.length;
				$scope.siguiente_pregunta=currPreg+1;
				currPreg++;
				$scope.$apply();
				
				if(currPreg==6){//estamos en la pregunta 5
					if(lastTrue.indexOf(0)!=-1){//se selecciono la primer opcion y se saltea la proxima pregunta

						$scope.nextQ();
					}


				}
				console.log(lastTrue);
				lastTrue=[];
			}else{//Si es la última pregunta.

				restartGlobals();
				$state.go('menu.finPreguntas');
			}

		}
	}

	$scope.clearAll = function(respuesta_id) {
		angular.forEach($scope.pregunta.pregunta_respuestas, function(respuesta) {
			if(respuesta_id!=respuesta.respuesta_id && !$scope.pregunta.pregunta_multiple)
			respuesta.respuesta_sel = false;
		});
	};
})


.controller('superSaludableCtrl', function($scope) {

})

.controller('primerVueltaCtrl', function($scope) {

})

.controller('listadoDeJuegosCtrl', function($scope,$http,$ionicPopup,$httpParamSerializer) {
	$scope.juegos={
	};
	db.transaction(function(tx) {

		tx.executeSql('select * from respuestas  GROUP BY jugador_codigo', [], function(tx,rs) {
			for (var i = 0; i < rs.rows.length; i++) {
				var p = rs.rows.item(i);
				console.log(p);
				$scope.juegos[i]=p;
			}
		}, errorDB);
	}, errorDB, successDB);

	$scope.sincronizar=function (){
		confirmPop=confirm($ionicPopup,$scope,'Advertencia','Una vez sincronizado, los datos se eliminarán del dispositivo.');
		confirmPop.then(function(res){
			if(res){
				db.transaction(function(tx) {

					tx.executeSql('select * from respuestas', [], function(tx,rs) {
						params = {
							MethodName: 'saveRespuestas',
							data: rs.rows
						};
						$http.post(url,angular.toJson(params))
						.success(function (data, status, headers, config) {
							if(data.result){
								deleteAllData();
								$scope.juegos={
								};
							}else{

							}

						})
						.error(function (data, status, header, config) {
							alert($ionicPopup,$scope,'Error de conección','No se realizó la sincronización. Verifique el acceso a internet.');

						});
					}, errorDB);
				}, errorDB, successDB);
			}
		});	
		
	};

	$scope.clearData=function (){
		confirmPop=confirm($ionicPopup,$scope,'Advertencia','Esta es una acción destructiva y no se puede deshacer.');
		confirmPop.then(function(res){
			if(res){
				deleteAllData();
				$scope.juegos={
				};
			}
		});		
	};
})
