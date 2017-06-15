(function(){
  'use strict';

  angular.module('webAppApp')
    .controller('EditTeam', EditTeam);

  EditTeam.$inject=['$scope','TeamService','TeamServiceUpdateOne','$uibModal','Session','TeamServiceStudent'];

  function EditTeam($scope,TeamService,TeamServiceUpdateOne , $uibModal,Session,TeamServiceStudent) {
    var vm = this;
    vm.currentUser=Session;
    vm.init=init;
    vm.save=save;
    vm.confirm=confirm;
    vm.messageSucess = false;
    vm.messageTitle=false;
    vm.init();
    function init() {
      if({studentId: Session.id})
        TeamServiceStudent.get({studentId: Session.id}).$promise.then(function (result) {
          vm.team = result;
        });
    }

    function clear() {
      vm.number=0;
    }

    function onSaveSuccess(result) {
      vm.messageSucess = "L'équipe a bien été update";
      vm.isSaving = false;
      vm.init();
    }

    function onSaveError() {
      vm.messageSucess = "La mise à jour n'a pas été effectuée.";
      vm.isSaving = false;
    }

    function save() {
      vm.isSaving = true;
      vm.messageTitle="Voulez-vous vraiment vous inscrire dans cette équipe?";
      vm.confirm().then(function (result) {
        if (result) {
          if (vm.team.id !== null) {
            TeamServiceUpdateOne.update(vm.team, onSaveSuccess, onSaveError);
          } else {
            TeamService.save(vm.team, onSaveSuccess, onSaveError);
          }
        }
      });
    }

    function deleted(id) {
      vm.messageTitle="Voulez vous vraiment quitter l'équipe?";
      vm.confirm().then(function (result) {
        if (result) {
          for(var i=0;i<vm.team.persons.length;i++){
            if(vm.team.persons[i].id==Session.id){
              vm.team.persons.splice(i,i);
            }
          }
          TeamServiceUpdateOne.update(vm.team, onSaveSuccess, onSaveError);
        }
      });
    }

    function confirm() {
      return $uibModal.open({
        templateUrl: 'viewModel/confirmationPopUp.html'
        , controller: 'confirmationController'
        , controllerAs: 'vm'
        , backdrop: 'static'
        , size: 'lg'
        , resolve: {
          message: function(){
            return vm.messageTitle;
          }
        }
      }).result.then(function (result) {
        return result;
      });
    }

  }
})();
