(function() {
  'use strict';

  angular.module('webAppApp').service('Session', function () {
    var vm=this;
    vm.create=create;
    vm.destroy=destroy;
    vm.check=check;

    function create (id,login,firstName, typePerson) {
      vm.id = id;
      vm.login = login;
      vm.firstName = firstName;
      vm.typePerson = typePerson;
    }
    function check(){
      if(vm.id==null){
        return false;
      }else{
        return true;
      }
    }
    function destroy () {
      vm.id = null;
      vm.login = null;
      vm.firstName = null;
      vm.role = null;
    }
  })
})();
