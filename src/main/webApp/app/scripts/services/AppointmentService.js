(function() {
  'use strict';

  angular
    .module('webAppApp')
    .factory('AppointmentService', AppointmentService)
    .factory('AppointmentTeamService',AppointmentTeamService);

  AppointmentService.$inject = ['$resource'];
  AppointmentTeamService.$inject=['$resource'];

  function AppointmentService ($resource) {
    var service = $resource('/appointment/:id',{}, {
      'query': {method: 'GET', isArray: true},
      'get': {
        method: 'GET',
        transformResponse: function (data) {
          data = angular.fromJson(data);
          return data;
        }
      },
      'save': { method:'POST' },
      'update': { method:'PUT' },
      'delete':{ method:'DELETE'}
    });

    return service;
  }

  function AppointmentTeamService($resource){
    var service = $resource('/appointment/team/:id',{}, {
      'query': {method: 'GET', isArray: true},
      'update': { method:'PUT' },
      'delete':{ method:'DELETE'}
    });

    return service;
  }
})();

