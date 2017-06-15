(function() {
    'use strict';

    angular.module('webAppApp')
        .controller('confirmationController', confirmationController);

    confirmationController.$inject = ['$scope','$uibModalInstance','message'];

    function confirmationController($scope,$uibModalInstance,message) {
        var vm=this;
        vm.status=null;
        vm.confirm=confirm;
        vm.cancel=cancel;
        vm.message=message;
        function confirm(){
            vm.status=true;
            $uibModalInstance.close(vm.status);
        }
        function cancel(){
            vm.status=false;
            $uibModalInstance.close(vm.status);
        }
    }
})();
