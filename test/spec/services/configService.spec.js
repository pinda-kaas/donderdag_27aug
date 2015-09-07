describe('configService', function () {
  var configService;

  beforeEach(function () {
    module('WIP');
    inject(function (_configService_) {
      configService = _configService_;
    });

  });

  xit('MOCK should return open url', function () {
    //var WIPServiceClient = 'mock';
    //var WIPServiceBusiness = '';
    //var businessId = '';
    //var adviserId = '';
    //var openOrdersSuffix = '';
    var tabType = 'open';
    var accountId = 'A18182'
    //var result = configService.config(WIPServiceClient, WIPServiceBusiness, businessId, adviserId, accountId, openOrdersSuffix, tabType)

    expect(result).equals('/modules/common/orders/mock/ordersTabMockData.json');
  });

  it('development details url', function () {
    var config = {};

    config.bla =4;

    config.WIPServiceClient = 'https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/account/';
    config.WIPServiceBusiness = 'https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/businesses/';
    config.businessId = 'MPMSWP';
    config.adviserId = 'PFALsL';
    config.openOrdersSuffix = '/orders/statuses/open/minimum';
    var tabType = 'open';
    var accountId = 'D00072'

      //var result = configService.config(WIPServiceClient, WIPServiceBusiness, businessId, adviserId, accountId, openOrdersSuffix, tabType)

    var result = configService.config('detail',config,accountId);
    console.log('result',config);

      expect(result).toEqual('https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/account/D00072/orders');
    //expect(result).toEqual('https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/businesses/MPMSWP/advisers/PFALL/orders/statuses/open/minimum');
  });



});
