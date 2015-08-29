app.controller('OrdersCtrl', function ($scope, $filter, $location, configService, orderData, settlementsData, completeOrders, $state,$http) {

    $scope.ordersTabActive = true;
    $scope.settlementsTabActive = false;
    $scope.completedTabActive = false;

    console.log('ordersctr2cbvsl startesd');

    if (orderData.length == 0) {
        $scope.ordersTabActive = false;
        $scope.settlementsTabActive = true;
    }
    else {
        $scope.displayedRows = orderData;
        $scope.accounts = orderData;
    }

    $scope.settlements = settlementsData;
    $scope.completeOrders = completeOrders;

    console.log($scope.accounts);

    $scope.selectAdviser = function (adviser) {
        $scope.adviser = adviser;
    }

    //$scope.selectAccount = function () {
    //
    //  $state.go('orderDetail', {myParam: {some: 'thing'}})
    //
    //
    //}
    //

    $scope.getLocation = function (val) {
        return $http.get('/modules/common/orders/mock/ordersTabMockData.json', {
            params: {
                accountName: val,
                sensor: false
            }
        })
            .then(function (response) {
            return response.data.map(function (item) {
                console.log (item.account.accountName);
                return item.account.accountId.key+ "-"+ item.account.accountName;
            });
        });
    };


});
