describe('WIP e2e testing', function () {

    describe('orders tab', function () {
        var accountsList;

        beforeEach(function () {
            browser.get('http://localhost:9000/');
        });

        it('should filter by accountname nr results is 1', function () {
            element(by.model('accountName')).sendKeys('je');
            accountsList = element.all(by.repeater('account in accounts'));
            expect(accountsList.count()).toEqual(1);
        });

        it('should filter by adviser nr results is 1', function () {
            element(by.model('accountName')).sendKeys('bbb');
            accountsList = element.all(by.repeater('account in accounts'));
            expect(accountsList.count()).toEqual(2);
        });

        it('should return 0', function () {
            element(by.model('accountName')).sendKeys('mxcnvmnxmvnxmnvmn');
            accountsList = element.all(by.repeater('account in accounts'));
            expect(accountsList.count()).toEqual(0);
        });

        it('should resetfilter', function () {
            element(by.model('accountName')).sendKeys('bbb');
            element(by.css('body > div > div.ng-scope > div > div.resetFilter > a:nth-child(1)')).click();
            accountsList = element.all(by.repeater('account in accounts'));
            expect(accountsList.count()).toEqual(10);
        });

    });
});
