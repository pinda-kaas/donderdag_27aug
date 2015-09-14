app.directive('resetFilter', function () {
  return {
    restrict:'E',
    scope: {
      resetHello: '&'
    },
    template:'<div>     This is the filter:           <a href="#" ng-click="resetHello()">Reset Filter</a>             </div>',
    controller:function(){
    }
  };
});

//'use strict';

//
//app.directive('resetFilter', function () {
//  return {
//    templateUrl: 'views/resetFilter.html',
//    controller:function($scope){
//      $scope.resetFilter= function(){
//        console.log('resetfilter this one !!!!');
//
//        $scope.assetType={};
//        $scope.assetType.code='';
//        $scope.orderType={};
//        $scope.orderType.code='';
//        $scope.orderSource={};
//        $scope.orderSource.code='';
//        $scope.orderStatus={};
//        $scope.orderStatus.code='';
//        debugger;
//        //$scope.accountName='';
//        console.log('accname',$scope.accountName);
//      };
//    }
//  };
//});
