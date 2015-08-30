app.controller('OrderDetailCtrl', function ($scope, $filter, $location, configService, orderDetails,$stateParams) {

  $scope.orderDetails = orderDetails;


  //accountid

  console.log('orderdetail params',$stateParams)

  //debugger;
  //var referrer = $statePara   ms.myParam ;
  //
  //console.log('state', referrer);

  $scope.collapsed = true;

  //$scope.detailRows= orderDetail.rows;
  console.log('orderdetail ctrl', orderDetails);

});
