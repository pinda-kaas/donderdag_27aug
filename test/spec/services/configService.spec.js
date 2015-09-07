describe('configService', function () {
  var configService;

  beforeEach(function () {
    module('WIP');
    inject(function (_configService_) {
      configService = _configService_;
    });

  });

  it('MOCK should return open url', function () {
    var config = {};
    config.WIPServiceClient = 'mock';
    var tabType = 'open';
    var accountId = 'A18182'
    var result = configService.config('open', config, accountId);
    expect(result).toEqual('/modules/common/orders/mock/ordersTabMockData.json');
  });

  xit('should return development details url', function () {
    var config = {};
    config.WIPServiceClient = 'https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/account/';
    config.WIPServiceBusiness = 'https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/businesses/';
    config.businessId = 'MPMSWP';
    config.adviserId = 'PFALsL';
    config.openOrdersSuffix = '/orders/statuses/open/minimum';
    var tabType = 'open';
    var accountId = 'D00072'
    var result = configService.config('detail', config, accountId);
    console.log('result', config);
    expect(result).toEqual('https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/account/D00072/orders');
  });

  //
 xit('should return development open url', function () {
    var config = {};
    config.WIPServiceBusiness = 'https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/businesses/';
    config.businessId = 'MPMSWP';
    config.adviserId = 'PFALL';
    config.openOrdersSuffix = '/orders/statuses/open/minimum';
    var tabType = 'open';
    var accountId = ''
    var result = configService.config('open', config, accountId);
    console.log('result', config);
    expect(result).toEqual('https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/businesses/MPMSWP/advisers/PFALL/orders/statuses/open/minimum');
  });




});
