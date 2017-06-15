/**
 * Created by anis on 03/06/2017.
 */


(function () {
  'use strict';

  angular.module('webAppApp').controller('DepotDocManagement', DepotDocManagement);

  DepotDocManagement.$inject = ['$http','Session'];

  function DepotDocManagement($http,Session) {

    var an = this;
    an.currentUser=Session;
    an.documents = [];
    an.master4 = {};
    an.getAll = getAll;
    an.deleteDocument= deleteDocument;
    an.addDocument= addDocument;

    init();

    function init() {
      getAll();
    }

    function getAll() {
      var url = "/documents";
      var documentList = $http.get(url);
      documentList.then(function (response) {
        an.documents = response.data;
      });
    }

    function deleteDocument(id) {
      var url = "/documents/" + id;
      var documentDeleted = $http.delete(url);
      documentDeleted.then(function () {
        an.getAll();
      });
    }

    function addDocument(document) {
      document.depoDate  = new Date();
      document.depoDate.getDate();
      document.depoDate.toLocaleDateString();
      document.dateMessage.toString();


      angular.copy(document, an.master4);
      var url = "/wallMessage";
      var newDocument = $http.post(url, an.master4);
      newDocument.then(function () {
        an.getAll();
      });
    }
  }
})();
