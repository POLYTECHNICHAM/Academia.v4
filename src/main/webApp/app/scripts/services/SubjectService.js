(function() {
  'use strict';

  angular
    .module('webAppApp')
    .factory('SubjectService', SubjectService);
  SubjectService.$inject = ['$resource'];

  function SubjectService ($resource) {
    var service = $resource('/subjects/:id',{}, {
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

