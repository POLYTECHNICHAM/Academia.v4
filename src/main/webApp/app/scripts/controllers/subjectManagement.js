/**
 * Created by hicham on 13/05/2017.
 */
(function () {
  'use strict';

  angular.module('webAppApp').controller('subjectManagement', subjectManagement);

  subjectManagement.$inject = ['$http','$uibModal','Session'];

  function subjectManagement($http,$uibModal,Session) {

    var sc = this;
    sc.currentUser=Session;
    sc.message=false;
    sc.messageDelete="Le sujet a bien été supprimer"
    sc.confirm = confirm;
    sc.subjects = [];
    sc.teams = [];
    sc.clientsList = [];
    sc.master = {};
    sc.getAll = getAll;
    sc.getAllTeams = getAllTeams;
    sc.getAllClients = getAllClients;
    sc.deleteSubject = deleteSubject;
    sc.addSubject = addSubject;
    sc.save=save;

    init();

    function init() {
      getAll();
      getAllTeams();
      getAllClients();
    }

    function getAll() {
      var url = "/subjects";
      var subjectPromise = $http.get(url);
      subjectPromise.then(function (response) {
        sc.subjects = response.data;
      });
    }

    function getAllTeams() {
      var url = "/teams";
      var teamsPromise = $http.get(url);
      teamsPromise.then(function (response) {
        sc.teams = response.data;
      });
    }

    function getAllClients() {
      var url = "/person/client";
      var clients = $http.get(url);
      clients.then(function (response) {
        sc.clientsList = response.data;
      });
    }

    function deleteSubject(subjectId) {

      /*sc.messageTitle="Voulez vous vraiment supprimer le sujet?";
      sc.confirm().then(function (result) {
        if (result) {
          var url = "/subject/" + id;
          var subjectDeleted = $http.delete(url);
          subjectDeleted.then(function () {
            sc.getAll();
            sc.message=true;
          });

        }
      });*/

      var url ="/teamFromSubject/"+subjectId;
      $http.get(url).then(function (response) {
        var teamList = response.data;
        var length = teamList.length;

        /*if (length === 0){alert("hello");
          var url ="/subject/"+subjectId;
          $http.delete(url).then(function () {
            init();
          });
        }
*/

          for(var i=0; i<length; i++){

            var name = teamList[i].name;
            var documentsById = teamList[i].documentsById;
            var featuresById = teamList[i].featuresById;
            var persons = teamList[i].persons;
            // reprendre ici
            person ="";
            for(var k =0; k< persons.length; k++){
              if(k===0){
                var person = person + "{\"id\":"+persons[k].id+"}";
              }
              else{
                var person = person + ",{\"id\":"+persons[k].id+"}";
              }

            }

            var body =  "{\"id\":\"" + teamList[i].id + "\",\"name\":\"" + name + "\", \"subjectBySubjectId\": null," +
              " \"persons\":[ " + person + "], \"documentsById\":["+documentsById+"], \"featuresById\":["+featuresById+"]}";

            var url = "/updateTeam";
            $http.post(url,body).then(function () {

              var url = "/subject/"+subjectId;
              $http.delete(url).then(function () {
                init();
              })
            })
          }

      });

    }

    function save(subjects){
      angular.copy(subjects, sc.master);
      var url = "/subjects";
      var newSubject = $http.put(url, sc.master).then(function () {
        sc.getAll();
      });}

    function addSubject(subject) {
      angular.copy(subject, sc.master);
      var url = "/subject";
      var newSubject = $http.post(url, sc.master);
      newSubject.then(function () {
        sc.getAll();
      });
    }

    function confirm() {
      return $uibModal.open({
        templateUrl: 'viewModel/confirmationPopUp.html'
        , controller: 'confirmationController'
        , controllerAs: 'vm'
        , backdrop: 'static'
        , size: 'lg'
        , resolve: {
          message: function(){
            return sc.messageTitle;
          }
        }
      }).result.then(function (result) {
        return result;
      });
    }


  }
})();
