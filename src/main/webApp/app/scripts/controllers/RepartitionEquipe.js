(function(){
  'use strict';

  angular.module('webAppApp')
    .controller('RepartitionEquipe', RepartitionEquipe);

  RepartitionEquipe.$inject=['$scope','$location','TeamService','TeamServiceUpdateOne','$uibModal','Session'];

  function RepartitionEquipe($scope,$location,TeamService,TeamServiceUpdateOne, $uibModal,Session) {
    var vm = this;
    vm.currentUser=Session;
    vm.init=init;
    vm.addStudent=addStudent;
    vm.save=save;
    vm.confirm=confirm;
    vm.messageSucess = false;
    vm.messageTitle=false;
    vm.init();
    function init(){
      TeamService.query().$promise.then(function (result) {
        vm.teams=result;
      });
    }

    function addStudent(team){
      vm.team=team;
      vm.team.persons[vm.team.persons.length]={
        id:Session.id,
        login:Session.login
      };
      vm.save();
    }

    function clear() {
      vm.number=0;
    }
    function onSaveSuccess(result) {
      vm.isSaving = false;
      $location.path('/EditTeam')
    }

    function onSaveError() {
      vm.messageSucess = "L'insertion n'a pas été effectué.";
      vm.isSaving = false;
    }

    function save() {
      vm.isSaving = true;
      vm.messageTitle="Voulez-vous vraiment vous inscrire dans cette équipe?";
      vm.confirm().then(function (result) {
        if (result) {
          if (vm.team.id !== null) {
            vm.team=TeamServiceUpdateOne.update(vm.team, onSaveSuccess, onSaveError);
          } else {
            TeamService.save(vm.team, onSaveSuccess, onSaveError);
          }
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
