(function(){
  'use strict';

  angular.module('webAppApp')
    .controller('Authentification', Authentification);

  Authentification.$inject=['$scope','$rootScope','AUTH_EVENTS','AuthService','$cookieStore','Session','$routeParams','$location'];

  function Authentification($scope,$rootScope,AUTH_EVENTS, AuthService,$cookieStore,Session,$routeParams,$location) {
    var vm = this;
    vm.login = login;
    vm.unlog=unlog;
    vm.setCurrentUser=setCurrentUser;
    setCurrentUser(Session);
    vm.log = null;
    vm.mdp = null;

    if($routeParams.param1=="true"){
      unlog();
      $location.path('/authentification');
    }

    function login() {
      vm.person = {
        id: 1,
        login: vm.log,
        mdp: vm.mdp

      };
      if(vm.person.login!=null) {
        AuthService.login(vm.person).then(function (user) {
          vm.message = AUTH_EVENTS.loginSuccess;
          vm.setCurrentUser(user);
          $cookieStore.put("login", user.login);
        }, function () {
          vm.message = AUTH_EVENTS.loginFailed;
        });
      }else{
        vm.message = AUTH_EVENTS.loginFailed;
      }
    }
    function setCurrentUser (user) {
      $rootScope.currentUser = user;
      vm.currentUser=user;
    }
    function unlog(){
      AuthService.destroySessionServer().then(function (user) {
        vm.setCurrentUser(user);
        vm.message="Vous vous êtes déconnecté"
      });
    }
  }
})();
