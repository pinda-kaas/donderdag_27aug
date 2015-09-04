describe('configService', function () {
  var configService;

  beforeEach(function () {
    module('WIP');
    inject(function (_configService_) {
      configService = _configService_;
    });

  });

  it('MOCK should return open url', function () {
    var WIPServiceClient = 'mock';
    var WIPServiceBusiness = '';
    var businessId = '';
    var adviserId = '';
    var openOrdersSuffix = '';
    var tabType = 'open';
    var accountId = 'A18182'
    var result = configService.config(WIPServiceClient, WIPServiceBusiness, businessId, adviserId, accountId, openOrdersSuffix, tabType)

    expect(result).equals('/modules/common/orders/mock/ordersTabMockData.json');
  });

  it('DEVELOPMENT should return open url', function () {
    var WIPServiceClient = 'https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/account/';
    var WIPServiceBusiness = 'https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/businesses/';
    var businessId = 'MPMSWP';
    var adviserId = 'PFALsL';
    var openOrdersSuffix = '/orders/statuses/open/minimum';
    var tabType = 'open';
    var accountId = 'A18182'
    var result = configService.config(WIPServiceClient, WIPServiceBusiness, businessId, adviserId, accountId, openOrdersSuffix, tabType)

    expect(result).toEqual('https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/businesses/MPMSWP/advisers/PFALL/orders/statuses/open/minimum');
  });



});
