(function() {
  'use strict';

  angular
    .module('webAppApp')
    .factory('TeamService', TeamService);
  TeamService.$inject = ['$resource'];

  function TeamService ($resource) {
    var service = $resource('/teams/:id',{}, {
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
})();

