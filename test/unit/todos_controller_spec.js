describe('todosController', function () {

    var ctrl, scope, httpBackend, rootUrl, sampleTodo, location;
    beforeEach(module('todoApp'));

    beforeEach(inject(function (_$location_, _$httpBackend_, _$rootScope_, _$controller_) {
        // Arrangements
        var $rootScope = _$rootScope_;
        var $controller = _$controller_;
        httpBackend = _$httpBackend_;
        scope = $rootScope.$new();
        rootUrl = 'http://localhost:3000/api/';
        location = _$location_;
        sampleTodo = {
            _id: {$oid: 'jdfhjg235345'},
            title: 'Test Todo',
            status: 'started'
        };
        // Action
        httpBackend.expectGET(rootUrl + 'todos').respond(200, []);
        ctrl = $controller('todosController', {'$scope': scope});
        httpBackend.flush();
    }));

    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });


    it("todoscontroller should be defined", function () {
        // Assertions
        expect(ctrl).toBeDefined();
    });
    it("scope todos should be defined with no todo", function () {
        // Assertions
        expect(scope.todos).toBeDefined();
        expect(scope.todos.length).toBe(0);
    });

    it("scope newTodo should be defined with empty title", function () {
        // Assertions
        expect(scope.newTodo).toBeDefined();
        expect(scope.newTodo.title).toBe('');
    });


    it("should be able add newTodo to todos", function () {
        // Arrangements
        scope.newTodo = {title: 'Test Todo'};
        // Action
        httpBackend.expectPOST(rootUrl + 'todos').respond(200, {
            todo: scope.newTodo
        });
        scope.addTodo();
        httpBackend.flush();
        // Assertions
        expect(scope.todos.length).toBe(1);
        expect(scope.todos[0].title).toBe('Test Todo');
    });

    it("should be able to update status as finished of a todo", function () {
        // Arrangements
        scope.todos = [sampleTodo];
        // Assertions
        expect(scope.todos[0].title).toBe('Test Todo');
        expect(scope.todos[0].status).toBe('started');
        // Action
        httpBackend.expectPATCH(rootUrl + 'todos/' + sampleTodo._id.$oid + '/update_status', {
            id: 'jdfhjg235345', status: 'finished'
        }).respond(204, {
            todo: {
                _id: {$oid: 'jdfhjg235345'},
                title: 'Test Todo',
                status: 'finished'
            }
        });
        scope.toggleStatus(sampleTodo);
        httpBackend.flush();
        // Assertions
        expect(scope.todos[0].status).toBe('finished');
    });

    it("should be able to update status as started of a todo", function () {
        // Arrangements
        var sampleFinishedTodo = {
            _id: {$oid: 'jdfhjg235345'},
            title: 'Test Todo',
            status: 'finished'
        }
        scope.todos = [sampleFinishedTodo];
        // Assertions
        expect(scope.todos[0].title).toBe('Test Todo');
        expect(scope.todos[0].status).toBe('finished');
        // Action
        httpBackend.expectPATCH(rootUrl + 'todos/' + sampleTodo._id.$oid + '/update_status', {
            id: 'jdfhjg235345', status: 'started'
        }).respond(204, {
            todo: {
                _id: {$oid: 'jdfhjg235345'},
                title: 'Test Todo',
                status: 'started'
            }
        });
        scope.toggleStatus(sampleFinishedTodo);
        httpBackend.flush();
        // Assertions
        expect(scope.todos[0].status).toBe('started');
    });


    it("should be able to delete a todo", function () {
        // Arrangements
        scope.todos = [
            sampleTodo
        ];
        scope.newTodo = {title: 'Test Todo'};
        // Action
        httpBackend.expectDELETE(rootUrl + 'todos/' + sampleTodo._id.$oid).respond(204);
        scope.deleteTodo(sampleTodo);
        httpBackend.flush();
        // Assertions
        expect(scope.todos.length).toBe(0);
    });

    it("should be able request for todo search by tag", function () {
        // Arrangements
        scope.query = 'blahblahblah';
        // Action
        scope.queryViaTag();
        // Assertions
        expect(location.path()).toBe('/search/' + scope.query);
    });

});