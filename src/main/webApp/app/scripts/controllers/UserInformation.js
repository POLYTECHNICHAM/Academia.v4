(function() {
  'use strict';

  angular.module('webAppApp')
    .controller('UserInformation', UserInformation);

  UserInformation.$inject = ['$scope', 'Session','UserManagementService','TeamServiceStudent'];

  function UserInformation($scope, Session,UserManagementService,TeamServiceStudent) {
    var vm = this;

    vm.init=init;
    vm.initTeam=initTeam;
    vm.init();
    function init(){
      UserManagementService.get({id:Session.id}).$promise.then(function(res){
        vm.person=res;
        if(vm.person.typePerson=='eleve')
          vm.initTeam();
      })
    }

    function initTeam(){
      TeamServiceStudent.get({studentId:vm.person.id}).$promise.then(function(res){
        vm.team=res;
      })
    }

  }
})();
