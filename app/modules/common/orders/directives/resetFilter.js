'use strict';

app.directive('resetFilter', function () {
  return {
    templateUrl: 'views/resetFilter.html',
    controller:function($scope){
      $scope.resetFilter= function(){
        console.log('resetfilter');
      }
    }
  };
});
