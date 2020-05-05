angular.module('starter.services', [])

.factory('Chats', function($http) {
  
  var baseUrl = 'https://youper-9931b.firebaseio.com/challenge.json';

  return {
    get: function() {
      return $http({
        method: 'GET',
        url: baseUrl
      });    
    }
  };
})

.factory('$localstorage', ['$window', function ($window) {
  return {
    set: function (key, value) {
      $window.localStorage[key] = value;
    },
    get: function (key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function (key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function (key) {
      return JSON.parse($window.localStorage[key] || '{}');
    },
    remove: function (key) {
      $window.localStorage.removeItem(key);
    }
  }
}]);