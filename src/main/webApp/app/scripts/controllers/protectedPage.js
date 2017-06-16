(function(){
  'use strict';

  angular.module('webAppApp')
    .controller('protectedPage', protectedPage);

  protectedPage.$inject=['$scope','$location'];

  function protectedPage($scope,$location) {
    var vm = this;
    vm.returnPage=returnPage;
    function returnPage(){
      var i=0;
      $location.path('/authentification');
    }
  }
})();
