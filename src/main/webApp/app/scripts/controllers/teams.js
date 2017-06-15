/**
 * Created by hicham on 13/05/2017.
 */
(function () {
  'use strict';

  angular.module('webAppApp').controller('teams', teams);

  teams.$inject = ['$http','$uibModal','Session'];

  function teams($http,$uibModal,Session) {

    var vm = this;
    vm.currentUser=Session;
     //vm.confirm = confirm;
    vm.j=0;
    vm.subjects = [];
    vm.teams = [];
    vm.data=[];
    vm.master = {};
    vm.getAll = getAll;
    vm.getAllTeams = getAllTeams;
    vm.updateSubjectForTeam=updateSubjectForTeam;
    vm.deleteTeam=deleteTeam;
    vm.getSubjectTitleFromTeam=getSubjectTitleFromTeam;

    init();

    function init() {
      getAll();
      getAllTeams();
    }

    function getAll() {
      var url = "/subjects";
      var subjectPromise = $http.get(url);
      subjectPromise.then(function (response) {
        vm.subjects = response.data;
      });
    }

    function getAllTeams() {
      var url = "/teams";
      var teamsPromise = $http.get(url);
      teamsPromise.then(function (response) {
        vm.teams = response.data;
        for(var i=0;i<vm.teams.length;i++) {
          vm.teams[i]=vm.getSubjectTitleFromTeam(vm.teams[i]);
        }
        vm.data = {
          availableOptions: vm.teams
        };

      });
    }


    function sendUpdate(subjectId, team, persons) {
      //alert(subjectId);
      var body =  "{\"id\":\"" + team.id + "\",\"name\":\"" + team.name + "\", \"subjectBySubjectId\": {\"id\":\"" + subjectId + "\"}, \"persons\":[ " + persons + "]}";

        var url = "/updateTeam";
        var updatePromise = $http.post(url,body);
        updatePromise.then(function(response){

        })

    }

    function getSubjectId(subjectTitle, team, persons){
      var url = "/subject?subjectTitle="+subjectTitle;
      var subjectIdPromise = $http.get(url);
      subjectIdPromise.then(function (response) {
        var subjectId = response.data;
        sendUpdate(subjectId, team, persons);
      });
    }

    function updateSubjectForTeam(){
      var teamsLength = vm.teams.length;

      for(vm.j =0; vm.j < teamsLength; vm.j++){
        var team = vm.teams[vm.j];
        var SubjectTitle = vm.teams[vm.j].subjectBySubjectId.title;


        var persons = "";

        for(var i=0; i < team.persons.length; i++){

          if(i === 0){
            persons = persons + "{\"id\":"+team.persons[i].id+"}";
          }
          else{
            persons = persons + ",{\"id\":"+team.persons[i].id+"}";
          }

        }

        getSubjectId(SubjectTitle, team, persons);

      }
      sleep(3);
      init();

    }


    function getSubjectTitleFromTeam(team){
      var url = "/subjectByTeam";
      $http.post(url,team).then(function (response) {
        team.subject=response.data;
      });
      return team;
    }

    function deleteTeam(teamId) {
      vm.messageTitle="Voulez vous vraiment supprimer le sujet?";
      var url = "/updateTeam";
      var body = {"id":teamId};

      $http.post(url,body).then(function () {
        var url ="/teams/"+teamId;
        $http.delete(url).then(function () {
          vm.getAllTeams();
        })
      });
    }

    /*
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
     }*/
  }
})();
