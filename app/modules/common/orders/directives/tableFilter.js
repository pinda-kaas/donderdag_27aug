'use strict';

app.directive('tableFilter', function (wipService, configService) {
    return {
        restrict: 'E',
        templateUrl: 'views/tableFilter.html',
        controller: function ($scope) {
            console.log('tablefilter staer');

            console.log('account obj', $scope.account);

            $scope.assetType = {};
            $scope.assetType.code = '';
            $scope.orderType = {};
            $scope.orderType.code = '';
            $scope.orderSource = {};
            $scope.orderSource.code = '';
            $scope.orderStatus = {};
            $scope.orderStatus.code = '';
            $scope.accountName = '';

            wipService.getData(configService.config('assetType', '')).then(function (data) {
                $scope.assetTypes = data;
            });

            wipService.getData(configService.config('orderType', '')).then(function (data) {
                console.log('ordertype:', data);
                $scope.orderTypes = data;
            });

            wipService.getData(configService.config('orderSourceType', '')).then(function (data) {
                $scope.orderSourceTypes = data;
            });

            //debugger;
            wipService.getData(configService.config('orderStatus', '')).then(function (data) {
                $scope.orderStatuses = data;
            });

            $scope.periodTypes = ['today', 'last week', 'last month'];

            $scope.changePeriod = function () {

                switch ($scope.period) {
                    case 'today':

                        $scope.dateFrom = new Date();
                        $scope.dateTo = new Date();
                        console.log('chanegeperiod', $scope.period);
                        break;

                    case 'last week':

                        $scope.dateFrom = new Date();
                        $scope.dateFrom.setDate($scope.dateFrom.getDate() - 7);
                        console.log('chanegeperiod', $scope.period);
                        break;

                    case 'last month':

                        $scope.dateFrom = new Date();
                        $scope.dateFrom.setDate($scope.dateFrom.getDate() - 30);
                        console.log('chanegeperiod', $scope.period);
                        break;

                }
            }


            //datestuff
            console.log('datepicker controller');
            $scope.today = function () {
                $scope.dt = new Date();
            };
            $scope.today();

            $scope.clear = function () {
                $scope.dt = null;
            };

            $scope.toggleMin = function () {
                $scope.minDate = $scope.minDate ? null : new Date();
            };
            $scope.toggleMin();

            $scope.open = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();
                console.log('open dp');

                $scope.opened = true;
            };

            $scope.dateOptions = {
                formatYear: 'yy',
                startingDay: 1
            };

            $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
            $scope.format = $scope.formats[0];

            $scope.status = {
                opened: false
            };

            var tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            var afterTomorrow = new Date();
            afterTomorrow.setDate(tomorrow.getDate() + 2);
            $scope.events =
                [
                    {
                        date: tomorrow,
                        status: 'full'
                    },
                    {
                        date: afterTomorrow,
                        status: 'partially'
                    }
                ];

            $scope.getDayClass = function (date, mode) {
                if (mode === 'day') {
                    var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                    for (var i = 0; i < $scope.events.length; i++) {
                        var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                        if (dayToCheck === currentDay) {
                            return $scope.events[i].status;
                        }
                    }
                }
                return '';
            };

        }
    };
});
