var module = angular.mock.module;
var inject = angular.mock.inject;
var _ = require('underscore');
var _$httpBackend, $rootScope, brHelpService, _coreConfig, URL, URL2;
describe('brHelpService', function() {

  // Set up the module
  beforeEach(module('BrokerPortal'));

  beforeEach(function() {
    inject(function(brHelpService, coreConfig, $httpBackend, $rootScope) {
      _coreConfig = coreConfig;
      brHelpService = brHelpService;
      _$httpBackend = $httpBackend;

      mockGet();
      mockPost();
    });
    // });
  });

  afterEach (
    inject(function(brHelpService, $httpBackend) {
        _$httpBackend.verifyNoOutstandingExpectation ();
        _$httpBackend.verifyNoOutstandingRequest ();
    }));


  function mockGet(){
     URL = _coreConfig.urlPath() + '/api/clients/' + _coreConfig.getClient() + '/brHelp/get';
      // backend definition common for all tests
      _$httpBackend.when('GET', URL)
        .respond({
          userId: 'userX'
        }, {
          'A-Token': 'xxx'
        });
  }

  function mockPost(){
     URL2 = _coreConfig.urlPath() + '/api/clients/' + _coreConfig.getClient() + '/brHelp/post';
      _$httpBackend.when('POST', URL2)
        .respond({
          userId: 'userX'
        }, {
          'A-Token': 'xxx'
        });
  }

  it('Should be able to get information', function() {
    inject(function(brHelpService, $httpBackend) {
      $httpBackend.expectGET(URL);
      brHelpService.get();
      $httpBackend.flush();
    });
  });

  it('Should be able to post information', function() {    
    inject(function(brHelpService, $httpBackend) {
      $httpBackend.expectPOST(URL2);
      brHelpService.set({data:'data'});
      $httpBackend.flush();
    });
  });
});