describe('tagsController', function () {

    var ctrl, scope, httpBackend, rootUrl, routeParams, location;
    beforeEach(module('todoApp'));

    beforeEach(inject(function (_$location_, _$routeParams_, _$httpBackend_, _$rootScope_, _$controller_) {
        // Arrangements
        var $rootScope = _$rootScope_;
        var $controller = _$controller_;
        httpBackend = _$httpBackend_;
        scope = $rootScope.$new();
        routeParams = _$routeParams_;
        location = _$location_;
        rootUrl = 'http://localhost:3000/api/';
        sampleTodo = {
            _id: {$oid: 'jdfhjg235345'},
            title: 'Test Todo',
            status: 'started',
            is_deleted: true
        };
        sampleTodoId = sampleTodo._id.$oid;
        routeParams.id = sampleTodoId;
        ctrl = $controller('tagsController', {'$scope': scope});
    }));

    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it("tagsController should be defined", function () {
        // Assertions
        expect(ctrl).toBeDefined();
    });
    it("scope todoID should be defined", function () {
        // Assertions
        expect(scope.todoId).toBeDefined();
    });
    it("scope tag should be defined with blank name", function () {
        // Assertions
        expect(scope.tag).toBeDefined();
        expect(scope.tag.name).toBe("");
    });

    it("should be able to restore a deleted todo", function () {
        // Arrangements
        var requestURL = rootUrl + 'todos/' + scope.todoId + '/assign_tags';
        scope.tag.name = 'Tag 2'
        var params = {
            tag: {name: scope.tag.name}
        }
        // Act
        httpBackend.expectPUT(requestURL, params).respond(204, {
            todo: {
                _id: {$oid: 'jdfhjg235345'},
                title: 'Test Todo',
                status: 'started',
                is_deleted: true,
                tags: [
                    scope.tag.name
                ]
            }
        });
        scope.attachTag();
        httpBackend.flush();
        // Assertions
        expect(location.path()).toBe('/');
    });

});

