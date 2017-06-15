/**
 * Created by hicham on 15/05/2017.
 */
(function () {
  'use strict';

  angular.module('webAppApp').controller('gestionClient', gestionClient);

  gestionClient.$inject = ['$http','Session'];

  function gestionClient($http,Session) {

    var vm = this;
    vm.currentUser=Session;
    vm.teams = [];
    vm.clientsList = [];
    //vm.teamNameList = [];
    vm.teamAndClient = [];
    vm.getAllClients=getAllClients;
    vm.getTeamIdByName=getTeamIdByName;

 /*   vm.deleteSubject = deleteSubject;
    vm.addSubject = addSubject;*/

    init();

    function init() {
      getAllClients();
      getAllTeams();
    }

    function getAllClients() {
      var url = "/person/client";
      var clients = $http.get(url);
      clients.then(function (response) {
        vm.clientsList = response.data;
        getClientId();
      });
    }

    function getAllTeams() {
      var url = "/teams";
      var teamsPromise = $http.get(url);
      teamsPromise.then(function (response) {
        vm.teams = response.data;
      });
    }

    function getTeamOfCLient(clientId, i){
      var url ="/team/"+clientId;
      var teamOfClient = $http.get(url);
      teamOfClient.then(function (response) {
        var teamName = [];
        for(var k=0; k < response.data.length; k++){
          teamName[k] = response.data[k].name;
        }
        //vm.teamNameList[i] = teamName;
        vm.teamAndClient[i] = { lastName : vm.clientsList[i].lastName,
                        firstName : vm.clientsList[i].firstName,
                        teamName : teamName
                      };
      });
    }

    function getClientId() {
      for(var i=0; i< vm.clientsList.length; i++){
        var clientId =  vm.clientsList[i].id;
        getTeamOfCLient(clientId, i);
      }
    }

    function addTeamToClient(client, teamId, teamName){
      var url ="/teams/"+teamId;
      var teamPromise = $http.get(url);
      teamPromise.then(function (response) {
        var team = response.data;

        var persons = "";

        for(var i=0; i < team.persons.length; i++){

          if(i === 0){
            persons = persons + "{\"id\":"+team.persons[i].id+"}";
          }
          else{
            persons = persons + ",{\"id\":"+team.persons[i].id+"}";
          }

        }

        // add client
        persons = persons + ",{\"id\":"+client.id+"}";

        var body =  "{\"id\":\"" + team.id + "\",\"name\":\"" + team.name + "\", \"subjectBySubjectId\": {\"id\":\"" + team.subjectBySubjectId.id + "\"}, \"persons\":[ " + persons + "]}";

        var url = "/updateTeam";
        var updatePromise = $http.post(url,body);
        updatePromise.then(function(response){
          init();
        })
      });
    }

    function getClientByName(clientName, teamId, teamName){
      var url ="/client?clientFirstName="+clientName;
      var clientPromise = $http.get(url);
      clientPromise.then(function (response) {
        var client = response.data;
        addTeamToClient(client, teamId, teamName);
      });
    }

    function getTeamIdByName(teamName, clientName){
      var url ="/teamId?teamName="+teamName;
      var teamIdPromise = $http.get(url);
      teamIdPromise.then(function (response) {
        var teamId = response.data;
        getClientByName(clientName, teamId, teamName);
      });
    }



/*
    function deleteSubject(id) {
      var url = "/subject/" + id;
      var subjectDeleted = $http.delete(url);
      subjectDeleted.then(function () {
        vm.getAll();
      });
    }

    function addSubject(user) {
      angular.copy(user, vm.master);
      var url = "/subject";
      var newSubject = $http.post(url, vm.master);
      newSubject.then(function () {
        vm.getAll();
      });
    }*/
  }
})();
