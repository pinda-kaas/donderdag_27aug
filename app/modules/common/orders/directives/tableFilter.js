app.directive('tableFilter', function ($filter) {
  return {
    restrict: 'E',
    //scope:{security:"=security"},
    templateUrl: 'views/tableFilter.html',
    controller: function ($scope)
    {
      $scope.assetTypes = [{
        "code": "AUSTRALIAN_EQUITY",
        "name": "Australian Equities",
        "type": "E",
        "subtype": "EA",
        "classtype": null,
        "internationalSecurity": false
      }, {
        "code": "INTERNATIONAL_EQUITY",
        "name": "International Equities",
        "type": "E",
        "subtype": "EI",
        "classtype": null,
        "internationalSecurity": true
      }, {
        "code": "WHOLESALE_MANAGED_FUND",
        "name": "Wholesale Managed Funds",
        "type": "W",
        "subtype": null,
        "classtype": null,
        "internationalSecurity": false
      }, {
        "code": "RETAIL_MANAGED_FUND",
        "name": "Retail Managed Funds",
        "type": "R",
        "subtype": null,
        "classtype": null,
        "internationalSecurity": false
      }, {
        "code": "TERM_DEPOSIT",
        "name": "Term Deposits",
        "type": "W",
        "subtype": null,
        "classtype": "TDS",
        "internationalSecurity": false
      }];

      $scope.tradeTypes = [{"code":"BUY","name":"BUY"},{"code":"SELL","name":"SELL"},{"code":"APPLICATION","name":"APP"},{"code":"REDEMPTION","name":"RED"}];

      $scope.orderSourceTypes = [{
        "code": "PORTFOLIO_TRANSACTING",
        "name": "Portfolio Transacting"
      }, {
        "code": "BULK_MANAGED_INVESTMENTS",
        "name": "Bulked Managed Investments"
      }, {"code": "AUTOMATIC_CASH_MANAGEMENT", "name": "Automatic Cash Management"}, {
        "code": "MODEL_PORTFOLIOS",
        "name": "Model Portfolios"
      }, {"code": "DOLLAR_COST_AVERAGING", "name": "Dollar Cost Averaging"}, {
        "code": "LOW_CASH_AUTO_SELL",
        "name": "Low Cash Auto Sell"
      }, {"code": "MANUAL_ORDERS", "name": "Manual Orders"}, {
        "code": "BULK_MANAGED_EQUITY_AND_TD",
        "name": "Bulked Managed Equity and TD"
      }, {"code": "FUNDS_TRANSFER", "name": "Funds Transfer"}, {
        "code": "OFF_PLATFORM",
        "name": "Off Platform"
      }, {"code": "EXERCISE_ASSIGNMENT", "name": "Exercise Assignment"}];
    },


    link: function ($scope) {


    }
  };
});
