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
    vm.teamAndClient = [];
    vm.getAllClients=getAllClients;
    vm.getTeamIdByName=getTeamIdByName;

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

    function addTeamToClient(client, teamId){
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
        if(i ===0){
          persons = persons + "{\"id\":"+client.id+"}";
        }
        else{
          persons = persons + ",{\"id\":"+client.id+"}";
        }


        var body =  "{\"id\":\"" + team.id + "\",\"name\":\"" + team.name + "\", \"subjectBySubjectId\": {\"id\":\"" + team.subjectBySubjectId.id + "\"}, \"persons\":[ " + persons + "]}";

        var url = "/updateTeam";
        var updatePromise = $http.post(url,body);
        updatePromise.then(function(){
          init();
        })
      });
    }

    function deleteTeamFromClient(clientName, teamId){
      var url ="/teams/"+teamId;
      var teamPromise = $http.get(url);
      teamPromise.then(function (response) {
        var team = response.data;

        var persons = "";

        for(var k=0; k < team.persons.length; k++){

          if(k === 0 && (team.persons[k].lastName !== clientName)){
            persons = persons + "{\"id\":"+team.persons[k].id+"}";
          }
          else if(team.persons[k].lastName !== clientName){
            persons = persons + ",{\"id\":"+team.persons[k].id+"}";
          }

        }

        var body =  "{\"id\":\"" + team.id + "\",\"name\":\"" + team.name + "\", \"subjectBySubjectId\": {\"id\":\"" + team.subjectBySubjectId.id + "\"}, \"persons\":[ " + persons + "]}";

        var url = "/updateTeam";
        var updatePromise = $http.post(url,body);
        updatePromise.then(function(){
          init();
        })
      });
    }

    function getClientByName(clientName, teamId, action){
      var url ="/client?clientFirstName="+clientName;
      var clientPromise = $http.get(url);
      clientPromise.then(function (response) {
        var client = response.data;
        if(action === "add"){
          addTeamToClient(client, teamId);
        }else{
          deleteTeamFromClient(clientName, teamId);
        }

      });
    }

    function getTeamIdByName( teamName, clientName, action,teamNameList ){

      if(action === "delete"){
        for(var i=0; i< teamNameList.length; i++){
          var teamName = teamNameList[i];

          var url ="/teamId?teamName="+teamName;
          var teamIdPromise = $http.get(url);

          teamIdPromise.then(function (response) {
            var teamId = response.data;
            getClientByName(clientName, teamId, action);
          });
        }
      }

      else{
        var url ="/teamId?teamName="+teamName;
        var teamIdPromise = $http.get(url);

        teamIdPromise.then(function (response) {
          var teamId = response.data;
          getClientByName(clientName, teamId, action);
        });
      }
    }

  }
})();
