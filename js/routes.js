angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.juegoNuevo', {
    url: '/juego/nuevo',
    views: {
      'side-menu21': {
        templateUrl: 'templates/juegoNuevo.html',
        controller: 'juegoNuevoCtrl'
      }
    }
  })

  .state('menu.ingreseLaContraseA', {
    url: '/reiniciar',
    cache: false,
    views: {
      'side-menu21': {
        templateUrl: 'templates/ingreseLaContraseA.html',
        controller: 'ingreseLaContraseACtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.login', {
    url: '/login',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('menu.datosDelJugador', {
    url: '/jugador/nuevo',
    cache: false,
    views: {
      'side-menu21': {
        templateUrl: 'templates/datosDelJugador.html',
        controller: 'datosDelJugadorCtrl'
      }
    }
  })

  .state('menu.pregunta', {
    url: '/pregunta',
    cache: false,
    views: {
      'side-menu21': {
        templateUrl: 'templates/pregunta.html',
        controller: 'preguntaCtrl'
      }
    },
    params:{
        p:currPreg
      }
  })

  .state('menu.finPreguntas', {
      url: '/finPreguntas',
      views: {
        'side-menu21': {
          templateUrl: 'templates/finPreguntas.html',
          controller: 'finPreguntasCtrl'
        }
      },
      params:{
          p:currPreg
        }
    })


  .state('menu.superSaludable', {
    url: '/',
    views: {
      'side-menu21': {
        templateUrl: 'templates/superSaludable.html',
        controller: 'superSaludableCtrl'
      }
    }
  })

  .state('menu.primerVuelta', {
    url: '/fin1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/primerVuelta.html',
        controller: 'primerVueltaCtrl'
      }
    }
  })

  .state('menu.listadoDeJuegos', {
    url: '/juegos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/listadoDeJuegos.html',
        controller: 'listadoDeJuegosCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/')

  

});