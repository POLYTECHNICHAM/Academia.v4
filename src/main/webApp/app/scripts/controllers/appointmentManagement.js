/**
 * Created by Anis on 18/05/2017.
 */
(function () {
  'use strict';

  angular.module('webAppApp').controller('appointmentManagement', appointmentManagement);

  appointmentManagement.$inject = ['$http','Session'];

  function appointmentManagement($http,Session) {

    var an = this;
    an.currentUser=Session;
    an.appointments = [];
    an.master1 = {};
    // an.setCurrentUser=setCurrentUser;
    an.getAll = getAll;
    an.deleteAppointment = deleteAppointment;
    an.addAppointment = addAppointment;
    init();

    function init() {
      getAll();
    }

    function getAll() {
      var url = "/appointment";
      var appointmentList = $http.get(url);
      appointmentList.then(function (response) {
        an.appointments = response.data;
      });
    }

    function deleteAppointment(id) {
      var url = "/appointment/" + id;
      var appointmentDeleted = $http.delete(url);
      appointmentDeleted.then(function () {
        an.getAll();
      });
    }

    function addAppointment(appointment, Session)
    {
      appointment.dateA.toLocaleDateString();
      appointment.hStart.toLocaleTimeString();
      appointment.hEnd.toLocaleTimeString();
      appointment.Person_id = an.currentUser.id;



      angular.copy(appointment, an.master1);
      var url = "/appointment";
      var newAppointment= $http.post(url, an.master1);
      newAppointment.then(function () {
        an.getAll();
      });
    }
  }
})();



