app.factory('AuthorizationFactory', function ($http) {

  var AuthorizationFactory = {};
  
  AuthorizationFactory.login = function (obj) {
    return $http({
      method: 'POST',
      url: 'api/login',
      data: obj
    });
  };

  AuthorizationFactory.register = function (obj) {
    return $http({
      method: 'POST',
      url: 'api/signup',
      data: obj
    });
  };
  

  return AuthorizationFactory;

});