describe('Service: searchTodoByTag', function () {

    var searchTodoByTag, _inject, _setup, httpBackend;

    searchTodoByTag = null;
    httpBackend = null;

    _inject = function () {
        inject(function (_searchTodoByTag_, $httpBackend) {
            searchTodoByTag = _searchTodoByTag_;
            httpBackend = $httpBackend;
        });
    };

    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    beforeEach(function () {
        module('todoApp');
    });

    describe('the searchTodoByTag resource', function () {

        beforeEach(function () {
            _inject();
        });

        it('exists', function () {
            expect(!!searchTodoByTag).toBe(true);
        });
    });
});
