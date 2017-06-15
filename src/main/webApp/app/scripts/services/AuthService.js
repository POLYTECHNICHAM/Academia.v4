(function() {
  'use strict';

  angular.module('webAppApp')
    .factory('AuthService',['$http','Session', '$resource', function ($http, Session,$resource) {
      var authService = {
        login:login,
        isAuthenticated:isAuthenticated,
        isAuthorized:isAuthorized,
        getSessionFromServer:getSessionFromServer,
        destroySessionServer:destroySessionServer

      };

      function login (person) {
        return $http
          .post('/login', person)
          .then(function (res) {
            Session.create(res.data.id, res.data.login,res.data.firstName,
              res.data.typePerson);
            var person={};
            person.id=res.data.id;
            person.login=res.data.login;
            person.firstName=res.data.firstName;
            person.typePerson=res.data.typePerson;
            return person;
          });

      }
      function getSessionFromServer(login){
        return $http
          .get('/sessionget/'+login)
          .then(function (res) {
            Session.create(res.data.id, res.data.login,res.data.firstName,
              res.data.typePerson);
            var person={};
            person.id=res.data.id;
            person.login=res.data.login;
            person.firstName=res.data.firstName;
            person.typePerson=res.data.typePerson;
            return person;
          });
      }

      function destroySessionServer(){
        return $http
          .get('/endsession')
          .then(function (res) {
            Session.create(res.data.id, res.data.login,res.data.firstName,
              res.data.role);
            var person={};
            person.id=res.data.id;
            person.login=res.data.login;
            person.firstName=res.data.firstName;
            person.typePerson=res.data.typePerson;
            return person;
          });
      }


      function isAuthenticated () {
        if(Session.id!=null){
          return true;
        }else{
          return false;
        }
      }

      function isAuthorized (authorizedRoles) {
        if (!angular.isArray(authorizedRoles)) {
          authorizedRoles = [authorizedRoles];
        }
        for(var i=0;i<authorizedRoles.length;i++){
          if(authorizedRoles[i]=='*')
            return true;
          if(Session.typePerson!=null)
            if(authorizedRoles[i]==Session.typePerson.toUpperCase()){
              var t=true;
            }
        }

        return (authService.isAuthenticated() && t);
      }

      return authService;
    }])
})();
