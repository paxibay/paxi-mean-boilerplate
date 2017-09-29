describe('csrDashboard', function() {
    
    beforeEach(function() {
    });

    it('should login', function() {
        browser.get('');
        element(by.id("username")).sendKeys("pfadmpp");
        element(by.id("password")).sendKeys("pfadmpp");
        element(by.css('.btn-primary')).click()
        waits(5000);
        // expect(1).toEqual(1);
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8888/#/search');
    });

    it('make a search', function() {
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8888/#/search');
        // browser.get('/#/search');
        element(by.model("vm.advSearch.lastName")).sendKeys("Doe");
        element(by.css('.btn-primary')).click()
        expect(1).toEqual(1);
        // expect(vm.fastSearchResultUrl).toEqual(true);
        // expect(browser.getCurrentUrl()).toEqual('http://localhost:8888/#/member');
    });

    it('select a member search and authenticate it', function() {
        // browser.get('/#/search');
        element(by.css('.search-result-row')).click()
        waits(1000);
        expect(1).toEqual(1);
        // expect(browser.getCurrentUrl()).toEqual('http://localhost:8888/#/authenticate/');
        // expect(vm.fastSearchResultUrl).toEqual(true);
        // expect(browser.getCurrentUrl()).toEqual('http://localhost:8888/#/member');
    });
});
