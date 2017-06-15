(function(){
  'use strict';

  angular.module('webAppApp')
    .controller('protectedPage', protectedPage);

  protectedPage.$inject=['$scope','$window'];

  function protectedPage($scope,$window) {
    var vm = this;
    vm.returnPage=returnPage;
    function returnPage(){
      var i=0;
      $window.history.back();
    }
  }
})();
