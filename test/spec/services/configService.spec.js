describe('configService', function () {
  "use strict";
  var configService;

  beforeEach(function () {
    module('WIP');
    inject(function (_configService_) {
      configService = _configService_;
    });
  });

  xit('MOCK should return open url', function () {
    var accountId = 'A18182';
    var result = configService.config('open', accountId);
    expect(result).toEqual('/modules/common/orders/mock/ordersTabMockData.json');
  });

  //tab pages
  it('should return development details url', function () {
    var tabType = 'detail';
    var accountId = 'D00072';
    var result = configService.config(tabType,  accountId);
    expect(result).toEqual('https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/account/D00072/orders');
  });

 it('should return development open url', function () {
    var tabType = 'open';
    var accountId = '';
    var result = configService.config(tabType, accountId);
    expect(result).toEqual('https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/businesses/MPMSWP/advisers/PFALL/orders/statuses/open/minimum');
  });

  it('should return development settlement url', function () {
    var tabType = 'settlement';
    var accountId = '';
    var result = configService.config(tabType, accountId);
    expect(result).toEqual('https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/businesses/MPMSWP/advisers/PFALL/orders/statuses/awaitingsettlement');
  });

  it('should return development completed url', function () {
    var tabType = 'complete';
    var accountId = '';
    var result = configService.config(tabType, accountId);
    expect(result).toEqual('https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/businesses/MPMSWP/advisers/PFALL/orders/statuses/complete');
  });

  //combos
  it('should return development assettype url', function () {
    var tabType = 'assetType';
    var accountId = '';
    var result = configService.config(tabType, accountId);
    expect(result).toEqual('https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/assettypes');
  });

  it('should return development orderSources url', function () {
    var tabType = 'orderSourceType';
    var accountId = '';
    var result = configService.config(tabType, accountId);
    expect(result).toEqual('https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/ordersources');
  });

  it('should return development orderstatusses url', function () {
    var tabType = 'orderStatus';
    var accountId = '';
    var result = configService.config(tabType, accountId);
    expect(result).toEqual('https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/orderstatuses');
  });

  it('should return development ordertypes url', function () {
    var tabType = 'orderType';
    var accountId = '';
    var result = configService.config(tabType, accountId);
    expect(result).toEqual('https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/ordertypes');
  });

});
