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

  AuthorizationFactory.logout = function () {
    return $http({
      method: 'POST',
      url: 'api/logout'
    });
  };

  AuthorizationFactory.getCurrentUser = function(){
    return $http({
      method: 'GET', 
      url: 'api/me'
    })
    .then(function(response){
      if(response.status === 200){
        user = response.data;
        return user;
      }
    });

    return undefined;
  }

  AuthorizationFactory.userSignedIn = function(){
    return $http({
      method: 'GET', 
      url: 'api/me'
    })
    .then(function(response){
      if(response.status === 200){
        return true;
      }

      return false;
    });
  }
  
  return AuthorizationFactory;

});