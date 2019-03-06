describe('searchController', function () {

    var ctrl, scope, httpBackend, rootUrl, query, routeParams, sampleTodos;
    beforeEach(module('todoApp'));

    beforeEach(inject(function (_$routeParams_, _$httpBackend_, _$rootScope_, _$controller_) {
        // Arrangements
        var $rootScope = _$rootScope_;
        var $controller = _$controller_;
        httpBackend = _$httpBackend_;
        routeParams = _$routeParams_;
        query = 'Tag 1';
        routeParams.query = query;

        sampleTodos = [
            {
                _id: {$oid: 'jdfhjg235345'},
                title: 'Test Todo',
                status: 'started',
                is_deleted: true,
                tags: [query]
            }
        ]
        scope = $rootScope.$new();
        rootUrl = 'http://localhost:3000/api/';
        // Act
        httpBackend.expectGET(rootUrl + 'tags/' + encodeURI(query) + '/todos').respond(200, sampleTodos);
        ctrl = $controller('searchController', {'$scope': scope});
        httpBackend.flush();
    }));

    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });


    it("searchController should be defined", function () {
        // Assertions
        expect(ctrl).toBeDefined();
    });

    it("scope query should be defined", function () {
        // Assertions
        expect(scope.query).toBeDefined();
        expect(scope.query).toBe(query);
    });

    it("scope todos should be defined", function () {
        // Assertions
        expect(scope.todos).toBeDefined();
        expect(scope.todos.length).toBe(1);
    });
});
