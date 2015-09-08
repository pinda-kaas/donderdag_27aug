describe('configService', function () {
  var configService;

  beforeEach(function () {
    module('WIP');
   // module('config');
    inject(function (_configService_) {
      configService = _configService_;
    });

  });

  xit('MOCK should return open url', function () {
    var tabType = 'open';
    var accountId = 'A18182'
    var result = configService.config('open', accountId);
    expect(result).toEqual('/modules/common/orders/mock/ordersTabMockData.json');
  });

  xit('should return development details url', function () {
    //var config = {};
    //DATA={};
    //DATA.enviroment= 'development';
    //DATA.WIPServiceClient = 'https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/account/';
    //config. = '/orders/statuses/open/minimum';
    var tabType = 'detail';
    var accountId = 'D00072'
    var result = configService.config(tabType,  accountId);
    //console.log('result', config);
    expect(result).toEqual('https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/account/D00072/orders');
  });


 xit('should return development open url', function () {
    //var config = {};
    //config.WIPServiceBusiness = 'https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/businesses/';
    //config.businessId = 'MPMSWP';
    //config.adviserId = 'PFALL';
    //config.openOrdersSuffix = '/orders/statuses/open/minimum';
    var tabType = 'open';
    var accountId = ''
    var result = configService.config(tabType, accountId);
    //console.log('result', config);
    expect(result).toEqual('https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/businesses/MPMSWP/advisers/PFALL/orders/statuses/open/minimum');
  });

  xit('should return development settlement url', function () {
    //var config = {};
    //config.WIPServiceBusiness = 'https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/businesses/';
    //config.businessId = 'MPMSWP';
    //config.adviserId = 'PFALL';
    //config.awaitingSettlementsSuffix= '/orders/statuses/awaitingsettlement';
    var tabType = 'settlements';
    var accountId = ''
    var result = configService.config(tabType, accountId);
    //console.log('result', config);
    expect(result).toEqual('https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/businesses/MPMSWP/advisers/PFALL/orders/statuses/awaitingsettlement');
    //https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/businesses/%7bbusinessId%7d/advisers/%7badviserId%7d/orders/statuses/awaitingsettlement
  });

  xit('should return development completed url', function () {
    //var config = {};
    //config.WIPServiceBusiness = 'https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/businesses/';
    //config.businessId = 'MPMSWP';
    //config.adviserId = 'PFALL';
    //config.completedOrdersSuffix= '/orders/statuses/complete';
    var tabType = 'complete';
    var accountId = ''
    var result = configService.config(tabType, accountId);
    //console.log('result', config);
    expect(result).toEqual('https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/businesses/MPMSWP/advisers/PFALL/orders/statuses/complete');

    //https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/businesses/ {businessId}/advisers/{adviserId}/orders/statuses/complete
    //https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/businesses/%7bbusinessId%7d/advisers/%7badviserId%7d/orders/statuses/awaitingsettlement
  });




});
