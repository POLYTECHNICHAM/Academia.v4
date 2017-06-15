/**
 * Created by anis on 03/06/2017.
 */

(function () {
  'use strict';

  angular.module('webAppApp').controller('DepositboxManagement', DepositboxManagement);

  DepositboxManagement.$inject = ['$http','Session'];

  function DepositboxManagement($http,Session) {

    var an = this;

    an.depositboxs = [];
    an.master2 = {};
    an.getAll = getAll;
    an.deleteDeposit = deleteDeposit;
    an.addDeposit = addDeposit;

    init();

    function init() {
      getAll();
    }

    function getAll() {
      var url = "/depositboxs";
      var depositList = $http.get(url);
      depositList.then(function (response) {
        an.depositboxs = response.data;
      });
    }

    function deleteDeposit(id) {
      var url = "/depositboxs/" + id;
      var depositDeleted = $http.delete(url);
      depositDeleted.then(function () {
        an.getAll();
      });
    }

    function addDeposit(deposit) {

      deposit.limitDate.toLocaleDateString();
      deposit.limitDate.toString();

      angular.copy(deposit, an.master2);
      var url = "/depositboxs";
      var newDeposit= $http.post(url, an.master2);
      newDeposit.then(function () {
        an.getAll();
      });
    }
  }
})();
