//app.directive('resetFilter', function () {
//  return {
//    restrict:'E',
//    scope: {
//      resetHello: '&'
//    },
//    template:'<div>     This is the filter:           <a href="#" ng-click="resetHello()">Reset Filter</a>             </div>',
//    controller:function(){
//    }
//  };
//});
//
////'use strict';

//
//app.directive('resetFilter', function () {
//  return {
//    templateUrl: 'views/resetFilter.html'
//  }
//});



app.directive('resetFilter', function () {
  return {
    restrict:'E',
    scope: {
      resetHello: '&'
    },
    templateUrl: 'views/resetFilter.html',
    controller:function(){
    }
  };
});
