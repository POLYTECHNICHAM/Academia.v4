(function(){
  'use strict';

  angular.module('webAppApp')
    .controller('FicheEvaluation', FicheEvaluation);

  FicheEvaluation.$inject=['$scope','Session','AppointmentService','TeamService','UserManagementService','SubjectService'];

  function FicheEvaluation($scope,Session,AppointmentService,TeamService,UserManagementService,SubjectService) {
    var vm = this;
    vm.teams=null;
    vm.init=init;
    vm.initEval=initEval;
    vm.findClient=findClient;
    vm.findSubject=findSubject;
    init();
    function init(){
      TeamService.query().$promise.then(function (result) {
        vm.teams=result;
      });
    }

    function initEval(id){
      TeamService.get({id:id}).$promise.then(function (result) {
        vm.teamSelect=result;
       // findSubject(vm.teamSelect.subject.id);
        findClient(vm.teamSelect.persons);

      });

    }

    function findClient(persons){
      for(var i=0;i<persons.length;i++)
      {
        if(persons[i].typePerson=="client"){
          vm.client=persons[i];
        }
      }

    }

    function findSubject(subject){

    }
  }

})();
