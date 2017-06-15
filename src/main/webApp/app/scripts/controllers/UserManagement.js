(function(){
    'use strict';

    angular.module('webAppApp')
        .controller('UserManagement', UserManagement);

    UserManagement.$inject=['$scope','UserManagementService','$uibModal','$location','Session'];

    function UserManagement($scope,UserManagementService, $uibModal,$location,Session) {
        var vm = this;
        vm.save = save;
        vm.clear = clear;
        vm.confirm = confirm;
        vm.deleted = deleted;
        vm.messageSucess = false;
        vm.messageTitle=false;
        vm.login=Session;
        vm.login.teams=[];
        vm.login.teams.id=2;
        UserManagementService.query().$promise.then(function (result) {
          vm.persons = result;
        });
        function clear() {
            UserManagementService.query().$promise.then(function (result) {
                    vm.persons = result;
                }
            );
        }//pas le meilleur moyen pour reset les valeurs mais pas le temps

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


        function onSaveSuccess(result) {
            vm.messageSucess = "La mise à jour a bien été effectuée.";
            vm.isSaving = false;
        }

        function onSaveError() {
            vm.messageSucess = "La mise à jour n'a pas été effectuée.";
            vm.isSaving = false;
        }

        function save() {
            vm.isSaving = true;
            vm.messageTitle="Voulez-vous vraiment mettre à jour ses utilisateurs?";
            vm.confirm().then(function (result) {
                if (result) {
                    if (vm.persons.id !== null) {
                        UserManagementService.update(vm.persons, onSaveSuccess, onSaveError);
                    } else {
                        UserManagementService.save(vm.persons, onSaveSuccess, onSaveError);
                    }
                }
            });
        }
        function deleted(id) {
          vm.messageTitle="Voulez vous vraiment supprimer l'utilisateur?";
          vm.confirm().then(function (result) {
            if (result) {
              UserManagementService.delete({id:id},function(){
                vm.clear();
              });
            }
          });
        }
    }

})();
