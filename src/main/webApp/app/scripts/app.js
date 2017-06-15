'use strict';

/**
 * @ngdoc overview
 * @name webAppApp
 * @description
 * # webAppApp
 *
 * Main module of the application.
 */

var app = angular
  .module('webAppApp', [
      'ngAnimate',
      'ngAria',
      'ngCookies',
      'ngMessages',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'ui.bootstrap'
    ]
  );

app.config(function ($routeProvider, $locationProvider,USER_ROLES) {
  $routeProvider
    .when('/EquipesAttribuees', {
      templateUrl : 'views/EquipesAttribuees.html',
      controller : '',
      controllerAs:'an',
      data:{
        authorizedRoles: [USER_ROLES.all]
      }
    })
    .when('/FicheEvaluation', {
      templateUrl : 'views/FicheEvaluation.html',
      controller : '',
      controllerAs:'an',
      data:{
        authorizedRoles: [USER_ROLES.all]
      }
    })
    .when('/CreationEquipe', {
      templateUrl : 'views/CreationEquipe.html',
      controller : 'CreationEquipe',
      controllerAs:'vm',
      data:{
        authorizedRoles: [USER_ROLES.all]
      }
    })
    .when('/RepartitionEquipe', {
      templateUrl : 'views/RepartitionEquipe.html',
      controller : 'RepartitionEquipe',
      controllerAs:'vm',
      data:{
        authorizedRoles: [USER_ROLES.all]
      }
    })
    .when('/EditTeam', {
      templateUrl : 'views/EditTeam.html',
      controller : 'TeamStudent',
      controllerAs:'vm',
      data:{
        authorizedRoles: [USER_ROLES.all]
      }
    })
    .when('/Session_equipe', {
      templateUrl : 'views/Session_equipe.html',
      controller : 'SEController',
      controllerAs:'vm',
      data:{
        authorizedRoles: [USER_ROLES.all]
      }
    })
    .when('/PlanningRespo', {
      templateUrl : 'views/PlanningRespo.html',
      controller : 'appointmentManagement',
      controllerAs:'an',
      data:{
        authorizedRoles: [USER_ROLES.all]
      }
    })
    .when('/DepotEleve', {
      templateUrl : 'views/DepotEleve.html',
      controller : 'DepotDocManagement',
      controllerAs:'an',
      data:{
        authorizedRoles: [USER_ROLES.all]
      }
    })
    .when('/PlanningVuEleve', {
      templateUrl : 'views/PlanningVuEleve.html',
      controller : 'appointmentManagement',
      controllerAs:'an',
      data:{
        authorizedRoles: [USER_ROLES.all]
      }
    })
    .when('/MurEleve', {
      templateUrl : 'views/MurEleve.html',
      controller : 'wallMessageManagement',
      controllerAs:'sc',
      data:{
        authorizedRoles: [USER_ROLES.all]
      }
    })
    .when('/SujetEleve', {
      templateUrl : 'views/SujetEleve.html',
      controller : '',
      data:{
        authorizedRoles: [USER_ROLES.all]
      }
    })
    .when('/UserManagement', {
      templateUrl : 'views/UserManagement.html',
      controller : 'UserManagement',
      controllerAs:'vm',
      data:{
        authorizedRoles: [USER_ROLES.admin]
      }
    })
    .when('/EquipeNom1', {
      templateUrl : 'views/EquipeNom1.html',
      controller : '',
      data:{
        authorizedRoles: [USER_ROLES.all]
      }
    })
    .when('/MurRespo', {
      templateUrl : 'views/MurRespo.html',
      controller : 'wallMessageManagement',
      controllerAs:'sc',
      data:{
        authorizedRoles: [USER_ROLES.all]
      }
    })
    .when('/ConsultationDepotEleve', {
      templateUrl : 'views/ConsultationDepotEleve.html',
      controller : 'DepositboxManagement',
      controllerAs:'an',
      data:{
        authorizedRoles: [USER_ROLES.all]
      }
    })
    .when('/Sujet', {
      templateUrl : 'views/Sujet.html',
      controller : 'subjectManagement',
      controllerAs:'sc',
      data:{
        authorizedRoles: [USER_ROLES.all]
      }
    })
    .when('/Equipe', {
      templateUrl : 'views/Equipe.html',
      controller : 'teams',
      controllerAs:'vm',
      data:{
        authorizedRoles: [USER_ROLES.all]
      }
    })
    .when('/GestionClients', {
      templateUrl : 'views/GestionClients.html',
      controller : 'gestionClient',
      controllerAs : 'vm',
      data:{
        authorizedRoles: [USER_ROLES.all]
      }
    })
    .when('/Planning', {
      templateUrl : 'views/Planning.html',
      controller : 'appointmentManagement',
      controllerAs:'an',
      data:{
        authorizedRoles: [USER_ROLES.all]
      }
    })
    .when('/PlanningClient', {
      templateUrl : 'views/PlanningClient.html',
      controller : 'appointmentManagement',
      controllerAs:'an',
      data:{
        authorizedRoles: [USER_ROLES.all]
      }
    })
    .when('/menuEleve', {
      templateUrl : 'views/menuEleve.html',
      controller : '',
      data:{
        authorizedRoles: [USER_ROLES.all]
      }
    })
    .when('/', {
      url: 'authentification',
      templateUrl: 'views/authentification.html',
      controller: 'Authentification',
      controllerAs:'vm',
      data:{
        authorizedRoles: [USER_ROLES.all]
      }
    })
    .when('/authentification', {
      url: 'authentification',
      templateUrl: 'views/authentification.html',
      controller: 'Authentification',
      controllerAs:'vm',
      data:{
        authorizedRoles: [USER_ROLES.all]
      }
    })
    .when('/authentification/:param1', {
      url: 'authentification',
      templateUrl: 'views/authentification.html',
      controller: 'Authentification',
      controllerAs:'vm',
      data:{
        authorizedRoles: [USER_ROLES.all]
      }
    })
    .when('/about', {
      url: 'about',
      views: 'about.html',
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about',
      data:{
        authorizedRoles: [USER_ROLES.all]
      }
    })
    .when('/main', {
      url: 'main',
      views : 'main.html',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main',
      data:{
        authorizedRoles: [USER_ROLES.all]
      }
    })
    .when('/FicheEvaluation', {
      url: 'FicheEvaluation',
      views : 'FicheEvaluation.html',
      templateUrl: 'views/FicheEvaluation.html',
      controller: 'FicheEvaluation',
      controllerAs: 'vm',
      data:{
        authorizedRoles: [USER_ROLES.admin,USER_ROLES.respo,USER_ROLES.client]
      }
    })
    .when('/protected', {
      url: 'protected',
      views : 'protected.html',
      templateUrl: 'views/protected.html',
      controller: 'protectedPage',
      controllerAs: 'vm'
    })

    .otherwise({
      redirectTo: '/authentification',
      data:{
        authorizedRoles: [USER_ROLES.all]
      }
    });

});

app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

app.controller('webAppApp', function($scope, random){
  $scope.generate
});

app.run(function ($rootScope, AUTH_EVENTS, AuthService,Session,$cookieStore,$location) {
  $rootScope.$on('$routeChangeStart', function (event, next) {
    var authorizedRoles;
    if(next.data!=null) {
      authorizedRoles= next.data.authorizedRoles; //récupère les roles authorisés
    }else{
      authorizedRoles='*';
    }
    if(Session.check()==false){ //regarde s'il existe une session
      var login=$cookieStore.get('login');// récupère un cookie s'il y en a un
      if(login!=null) { //s'il existe de cookie
        AuthService.getSessionFromServer(login).then(function (res) { // récupère la session du serveur
          Session.create(res.id, res.login,res.firstName,
            res.typePerson);
          $rootScope.currentUser=Session;
          authorized();
        });
      }else{
        authorized();
      }
    }else{
      authorized();
    }

    function authorized() {
      if (!AuthService.isAuthorized(authorizedRoles)) { //vérifie si le role n'est pas authorisé

        if (AuthService.isAuthenticated()) {
          // user is not allowed
          $location.url("/protected");
        } else {
          // user is not logged in
          $location.url("/Authentification");
        }
      }
    }
  });
});

