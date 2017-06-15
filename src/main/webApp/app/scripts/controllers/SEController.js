(function(){
	'use strict';

	angular.module('webAppApp')
	.controller('SEController', SEController);

	SEController.$inject=['$scope'];

	function SEController($scope){
		var vm=this;
        vm.check=1;

    }
});
