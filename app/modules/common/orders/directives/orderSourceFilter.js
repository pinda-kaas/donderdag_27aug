'use strict';

app.directive('orderSourceFilter', function () {
  return {
    templateUrl: 'views/orderSourceFilter.html',
    controller: function ($scope) {
      console.log($scope.showAdvancedSearch);
      $scope.showAdvancedSearch = false;
    }
  };
});
