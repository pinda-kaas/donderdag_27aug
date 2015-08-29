app.controller('OrderDetailCtrl', function ($scope, $filter, $location, configService, orderDetails, $stateParams) {

  $scope.orderDetails = orderDetails;


  //debugger;
  //var referrer = $stateParams.myParam ;
  //
  //console.log('state', referrer);

  $scope.collapsed = true;

  //$scope.detailRows= orderDetail.rows;
  console.log('orderdetail ctrl', orderDetails);

});
