(function() {
  'use strict';

  angular
    .module('webAppApp')
    .factory('RepartitionEquipeEleveService', RepartitionEquipeEleveService);
  RepartitionEquipeEleveService.$inject = ['$resource'];

    function RepartitionEquipeEleveService ($resource) {
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

