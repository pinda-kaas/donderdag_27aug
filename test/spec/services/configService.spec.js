describe('configService', function () {
  var configService;

  beforeEach(function () {
    module('WIP');
    inject(function (_configService_) {
      configService = _configService_;
    });

  });
  it('should return dev config settings', function () {
    var result = configService.config('development');
    expect(result).not.toBeNull();
  });

  it('should return dev ordersmock data url', function () {
    //var result = configService.config('development');
    //expect(result.url).toContain('ordersMockData');
  });
});
