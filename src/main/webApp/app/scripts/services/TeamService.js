(function() {
  'use strict';

  angular
    .module('webAppApp')
    .factory('TeamService', TeamService)
    .factory('TeamServiceStudent',TeamServiceStudent)
    .factory('TeamServiceUpdateOne',TeamServiceUpdateOne);

  TeamService.$inject = ['$resource'];
  TeamServiceStudent.$inject = ['$resource'];
  TeamServiceUpdateOne.$inject = ['$resource'];

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

  function TeamServiceStudent($resource){
    var service = $resource('/team/student/:studentId',{}, {
      'query': {method: 'GET', isArray: true},
      'get': {
        method: 'GET',
        transformResponse: function (data) {
          data = angular.fromJson(data);
          return data;
        }
      }
    });
    return service;
  }

  function TeamServiceUpdateOne($resource){
    var service = $resource('/updateTeam',{}, {
      'update': { method:'POST' }
    });
    return service;
  }
})();

