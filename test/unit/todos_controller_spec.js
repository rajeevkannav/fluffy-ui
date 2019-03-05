describe('todosController', function () {

    // var $httpBackend, $rootScope, createController, $scope ;
    var ctrl, scope;
    beforeEach(module('todoApp'));

    beforeEach(inject(function (_$rootScope_, _$controller_) {

        var $rootScope = _$rootScope_;
        var $controller = _$controller_;

        scope = $rootScope.$new();
        ctrl = $controller('todosController', {'$scope': $rootScope});


        // Set up the mock http service responses
        // $httpBackend = $injector.get('$httpBackend');
        // $httpBackend.when('GET', 'pages/createTodo.htm').respond({ body: '<html><body>Mock homepage</body></html>'});
        // $httpBackend.when('GET', 'pages/index.htm').respond({ body: '<html><body>Mock Indexpage</body></html>'});
        // Get hold of a scope (i.e. the root scope)
        // $rootScope = $injector.get('$rootScope');
    }));

    afterEach(function () {
        // $httpBackend.verifyNoOutstandingExpectation();
        // $httpBackend.verifyNoOutstandingRequest();
    });


    it("todoscontroller should be defined", function () {
        expect(ctrl).toBeDefined();
    });

    it("scope todo should be defined with empty title", function () {
        var newTodo = scope.newTodo;
        expect(newTodo).toBeDefined();
        expect(newTodo.title).toBe('');
    });

    it("scope todos should be defined with empty array", function () {
        var todos = scope.todos;
        expect(todos).toBeDefined();
    });

});