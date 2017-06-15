(function(){
    'use strict';

    angular.module('webAppApp')
        .controller('Deconnexion', Deconnexion);

  Deconnexion.$inject=['$scope','AuthService','Session','$location'];

    function Deconnexion($scope, AuthService,Session,$location) {
        var vm = this;
        vm.login=Session.login;
        vm.unlog=unlog;
        unlog();
        function unlog(login){
            AuthService.destroySessionServer().then(function (login) {
                $location.path("/authentification");
            });
        }
    }
})();
