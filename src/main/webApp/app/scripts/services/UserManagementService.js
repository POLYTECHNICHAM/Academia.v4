(function() {
  'use strict';

  angular
    .module('webAppApp')
    .factory('UserManagementService', UserManagementService);
  UserManagementService.$inject = ['$resource'];

    function UserManagementService ($resource) {
      var service = $resource('/persons/:id',{}, {
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

