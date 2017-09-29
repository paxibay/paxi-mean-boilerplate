var module = angular.mock.module;
var inject = angular.mock.inject;
var _ = require('underscore');
var _$httpBackend, $rootScope, brCoreService, _coreConfig, URL, URL2;
describe('brCoreService', function() {

  // Set up the module
  beforeEach(module('BrokerPortal'));

  beforeEach(function() {
    inject(function(brCoreService, coreConfig, $httpBackend, $rootScope) {
      _coreConfig = coreConfig;
      brCoreService = brCoreService;
      _$httpBackend = $httpBackend;

      mockGet();
      mockPost();
    });
    // });
  });

  afterEach (
    inject(function(brCoreService, $httpBackend) {
        _$httpBackend.verifyNoOutstandingExpectation ();
        _$httpBackend.verifyNoOutstandingRequest ();
    }));


  function mockGet(){
     URL = _coreConfig.urlPath() + '/api/clients/' + _coreConfig.getClient() + '/brCore/get';
      // backend definition common for all tests
      _$httpBackend.when('GET', URL)
        .respond({
          userId: 'userX'
        }, {
          'A-Token': 'xxx'
        });
  }

  function mockPost(){
     URL2 = _coreConfig.urlPath() + '/api/clients/' + _coreConfig.getClient() + '/brCore/post';
      _$httpBackend.when('POST', URL2)
        .respond({
          userId: 'userX'
        }, {
          'A-Token': 'xxx'
        });
  }

  it('Should be able to get information', function() {
    inject(function(brCoreService, $httpBackend) {
      $httpBackend.expectGET(URL);
      brCoreService.get();
      $httpBackend.flush();
    });
  });

  it('Should be able to post information', function() {    
    inject(function(brCoreService, $httpBackend) {
      $httpBackend.expectPOST(URL2);
      brCoreService.set({data:'data'});
      $httpBackend.flush();
    });
  });
});