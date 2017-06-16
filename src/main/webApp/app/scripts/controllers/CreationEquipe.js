(function(){
  'use strict';

  angular.module('webAppApp')
    .controller('RepartitionEquipeEleve', RepartitionEquipeEleve);

  RepartitionEquipeEleve.$inject=['$scope','TeamService','$uibModal','Session'];

  function RepartitionEquipeEleve($scope,TeamService, $uibModal,Session) {
    var vm = this;
    vm.currentUser=Session;
    vm.save = save;
    vm.clear = clear;
    vm.number=0;
    vm.confirm = confirm;
    vm.messageSucess = false;
    vm.messageTitle=false;
    vm.team={};
    vm.team.name="Nom par défaut";

    function clear() {
      vm.number=0;
    }
    function onSaveSuccess(result) {
      vm.messageSucess = "Les "+vm.number+" ont bien été créé";
      vm.isSaving = false;
    }

    function onSaveError() {
      vm.messageSucess = "La mise à jour n'a pas été effectuée.";
      vm.isSaving = false;
    }

    function save() {
      vm.isSaving = true;
      for(var i=0;i<vm.number;i++)
        TeamService.save(vm.team, onSaveSuccess, onSaveError);
    }
  }
})();
