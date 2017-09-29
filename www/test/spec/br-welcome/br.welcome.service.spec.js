var module = angular.mock.module;
var inject = angular.mock.inject;
var _ = require('underscore');
var _$httpBackend, $rootScope, brWelcomeService, _coreConfig, URL, URL2;
describe('brWelcomeService', function() {

  // Set up the module
  beforeEach(module('BrokerPortal'));

  beforeEach(function() {
    inject(function(brWelcomeService, coreConfig, $httpBackend, $rootScope) {
      _coreConfig = coreConfig;
      brWelcomeService = brWelcomeService;
      _$httpBackend = $httpBackend;

      mockGet();
      mockPost();
    });
    // });
  });

  afterEach (
    inject(function(brWelcomeService, $httpBackend) {
        _$httpBackend.verifyNoOutstandingExpectation ();
        _$httpBackend.verifyNoOutstandingRequest ();
    }));


  function mockGet(){
     URL = _coreConfig.urlPath() + '/api/clients/' + _coreConfig.getClient() + '/brWelcome/get';
      // backend definition common for all tests
      _$httpBackend.when('GET', URL)
        .respond({
          userId: 'userX'
        }, {
          'A-Token': 'xxx'
        });
  }

  function mockPost(){
     URL2 = _coreConfig.urlPath() + '/api/clients/' + _coreConfig.getClient() + '/brWelcome/post';
      _$httpBackend.when('POST', URL2)
        .respond({
          userId: 'userX'
        }, {
          'A-Token': 'xxx'
        });
  }

  it('Should be able to get information', function() {
    inject(function(brWelcomeService, $httpBackend) {
      $httpBackend.expectGET(URL);
      brWelcomeService.get();
      $httpBackend.flush();
    });
  });

  it('Should be able to post information', function() {    
    inject(function(brWelcomeService, $httpBackend) {
      $httpBackend.expectPOST(URL2);
      brWelcomeService.set({data:'data'});
      $httpBackend.flush();
    });
  });
});