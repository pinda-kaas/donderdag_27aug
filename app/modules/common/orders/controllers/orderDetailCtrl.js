app.controller('OrderDetailCtrl', function ($scope, $filter, $location, configService, orderDetails,$stateParams) {

  debugger;
  $scope.orderDetails = orderDetails;

  //$scope.showAdvancedSearch=false;

  //accountid

  console.log('orderdetails in ctrl params NOW',$stateParams)
  console.log('data from resolve orderdetails in ctrl :',orderDetails)

  //debugger;
  //var referrer = $stateParams.myParam ;
  //
  //console.log('state', referrer);

  $scope.collapsed = true;
  $scope.collapsedDetail=true;

  //$scope.detailRows= orderDetail.rows;
  //console.log('orderdetail ctrl', orderDetails);

});
