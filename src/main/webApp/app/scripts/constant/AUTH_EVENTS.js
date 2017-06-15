(function() {
  'use strict';

  angular.module('webAppApp')
    .constant('AUTH_EVENTS', {
      loginSuccess: 'Vous êtes bien authentifié',
      loginFailed: 'Vos identifiants ne sont pas correctes',
      logoutSuccess: 'auth-logout-success',
      sessionTimeout: 'auth-session-timeout',
      notAuthenticated: 'auth-not-authenticated',
      notAuthorized: 'auth-not-authorized'
    })
})();
