/**
 * Created by hicham on 14/05/2017.
 * Modified by Anis on 23/05/2017
 */

(function () {
  'use strict';

  angular.module('webAppApp').controller('wallMessageManagement', wallMessageManagement);

  wallMessageManagement.$inject = ['$http','Session'];

  function wallMessageManagement($http,Session) {

    var sc = this;

    sc.messages = [];
    sc.master = {};
    sc.getAll = getAll;
    sc.deleteMessage = deleteMessage;
    sc.addMessage = addMessage;
    sc.currentUser=Session;
    sc.currentUser.id=Session.id;
    init();

    function init() {
      getAll();
    }

    function getAll() {
      var url = "/wallMessage";
      var messageList = $http.get(url);
      messageList.then(function (response) {
        sc.messages = response.data;
      });
    }

    function deleteMessage(id) {
      var url = "/wallMessage/" + id;
      var messageDeleted = $http.delete(url);
      messageDeleted.then(function () {
        sc.getAll();
      });
    }

    function addMessage(message) {
      message.dateMessage  = new Date();
      message.dateMessage.getDate({dateFormat: 'dd/mm/yy'});
      message.dateMessage.toLocaleDateString();
      message.dateMessage.toString();
      message.hourMessage = new Date();
      message.hourMessage.getTime('hh:mm');
      message.hourMessage.toString();
      message.Person_id = Session.id;

      angular.copy(message, sc.master);
      var url = "/wallMessage";
      var newMessage = $http.post(url, sc.master);
      newMessage.then(function () {
        sc.getAll();
      });
    }
  }
})();
