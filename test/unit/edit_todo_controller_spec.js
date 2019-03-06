describe('editTodoController', function () {

    var ctrl, scope, httpBackend, location,
        rootUrl, sampleTodo, todoId;
    beforeEach(module('todoApp'));

    beforeEach(inject(function (_$httpBackend_, _$rootScope_, _$controller_, _$location_) {
        // Arrangements
        // local-beforeEach-usage
        var $rootScope = _$rootScope_;
        var $controller = _$controller_;
        // after-beforeEach-usage
        location = _$location_;
        httpBackend = _$httpBackend_;
        scope = $rootScope.$new();
        rootUrl = 'http://localhost:3000/api/';
        var requestURL = rootUrl + 'todos';
        sampleTodo = {
            _id: {$oid: 'jdfhjg235345'},
            title: 'Test Todo',
            status: 'started'
        };
        todoId = sampleTodo._id.$oid;
        // Action
        httpBackend.expectGET(requestURL, {
            "Accept": "application/json, text/plain, */*"
        }, {id: todoId}).respond(200, sampleTodo);
        ctrl = $controller('editTodoController', {'$scope': scope});
        httpBackend.flush();
    }));

    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });


    it("editTodoController should be defined", function () {
        // Assertions
        expect(ctrl).toBeDefined();
    });

    it("scope todo(requested to edit) should be defined", function () {
        // Assertions
        expect(scope.todo).toBeDefined();
    });

    it("should be update todo title", function () {
        // Arrangements
        var editedTitle = 'Test Todo Edit';
        var requestUrl = rootUrl + 'todos/' + todoId;
        scope.todo.title = editedTitle;
        // Action
        httpBackend.expect('PATCH', requestUrl).respond(200,
            {
                todo: {
                    _id: {$oid: todoId},
                    title: 'Test Todo Edit',
                    status: 'finished'
                }
            });
        scope.updateTodo(todoId);
        httpBackend.flush();
        // Assertions
        expect(scope.todo.title).toBe(editedTitle);
        expect(location.path()).toBe('/');
    });

});