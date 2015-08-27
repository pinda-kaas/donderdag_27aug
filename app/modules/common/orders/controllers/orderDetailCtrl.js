app.controller('OrderDetailCtrl', function ($scope, $filter, $location, configService, orderDetails) {

    $scope.orderDetails = orderDetails;

    $scope.collapsed = true;

    //$scope.detailRows= orderDetail.rows;
    console.log('orderdetail ctrl', orderDetails);

});
