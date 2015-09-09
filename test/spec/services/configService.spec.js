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

  //tab pages
  it('should return development details url', function () {
    var tabType = 'detail';
    var accountId = 'D00072'
    var result = configService.config(tabType,  accountId);
    expect(result).toEqual('https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/account/D00072/orders');
  });


 it('should return development open url', function () {
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

  it('should return development settlement url', function () {
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

  it('should return development completed url', function () {
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




  //combos

  it('should return development assettype url', function () {
    var tabType = 'assetType';
    var accountId = ''
    var result = configService.config(tabType, accountId);
    expect(result).toEqual('https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/assettypes');
    //https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/account/
  });



  it('should return development orderSources url', function () {
    var tabType = 'orderSource';
    var accountId = ''
    var result = configService.config(tabType, accountId);
    expect(result).toEqual('https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/ordersources');
    //https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/ordersources
  });


  it('should return development orderstatusses url', function () {
    var tabType = 'orderStatus';
    var accountId = ''
    var result = configService.config(tabType, accountId);
    expect(result).toEqual('https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/orderstatusses');
    //https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/orderstatusses
  });

  it('should return development ordertypes url', function () {
    var tabType = 'orderType';
    var accountId = ''
    var result = configService.config(tabType, accountId);
    expect(result).toEqual('https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/ordertypes');
    //https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/ordertypes
  });





});
