'use strict';

app.directive('resetFilter', function () {
  return {
    templateUrl: 'views/resetFilter.html',
    controller:function($scope){
      $scope.resetFilter= function(){
        console.log('resetfilter this one');

        $scope.assetType={};
        $scope.assetType.code='';
        $scope.tradeType={};
        $scope.tradeType.code='';
        $scope.orderSource={};
        $scope.orderSource.code='';
        $scope.orderStatus={};
        $scope.orderStatus.code='';
        $scope.security='';
      };
    }
  };
});
