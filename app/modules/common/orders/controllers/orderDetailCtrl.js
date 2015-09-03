app.controller('OrderDetailCtrl', function ($scope, $filter, $location, configService, orderDetails,$stateParams) {

  $scope.orderDetails = orderDetails;

  //accountid

  console.log('orderdetail params',$stateParams)
  console.log('orderdetails from devserver:',orderDetails)

  //debugger;
  //var referrer = $stateParams.myParam ;
  //
  //console.log('state', referrer);

  $scope.collapsed = true;
  $scope.collapsedDetail=true;

  //$scope.detailRows= orderDetail.rows;
  //console.log('orderdetail ctrl', orderDetails);

});
