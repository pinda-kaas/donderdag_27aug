describe('searchFilterService', function () {
  var searchFilterService,
    httpBackend;

  beforeEach(function (){
    // load the module.
    module('WIP');

    inject(function($httpBackend, _searchFilterService_) {
      searchFilterService = _searchFilterService_;
      httpBackend = $httpBackend;
    });
  });

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  //it('should call searchFilterService.filter()', function (){
  //  var returnData = {"id":"S2233","name":"Jack"};
  //  httpBackend.expectGET('api/accounts/accountId=S2233').respond(returnData);
  //  var returnedPromise = searchFilterService.filter('api/accounts/gaccountId='+'S2233');
  //  var result;
  //  returnedPromise.then(function(response) {
  //    result = response;
  //  });
  //
  //  httpBackend.flush();
  //  expect(result).toEqual(returnData);
  //});



});
