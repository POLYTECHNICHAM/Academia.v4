(function() {
  'use strict';

  angular.module('webAppApp').constant('USER_ROLES', {
    all: '*',
    admin: 'ADMIN',
    respo: 'RESPO',
    client: 'CLENT',
    eleve: 'ELEVE',
    guest: 'GUEST'
  })
})();
