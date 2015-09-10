'use strict';

angular.module('WIP').factory('wipService', function($http) {
  return {
    getData: function(url) {
      return $http.get(url)
        .then(function(result) {
          console.log('WIPSERVICE url:',url);
          return result.data;
        });
    }
  };
});
