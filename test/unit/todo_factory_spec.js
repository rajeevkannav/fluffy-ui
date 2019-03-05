describe('Service: Todo', function () {

    var Todo, _inject, _setup, httpBackend;

    Todo = null;
    httpBackend = null;

    _inject = function () {
        inject(function (_Todo_, $httpBackend) {
            Todo = _Todo_;
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

    describe('the Todo resource', function () {

        beforeEach(function () {
            _inject();
        });

        it('exists', function () {
            expect(!!Todo).toBe(true);
        });
        //
        it('returns a list of Todos', function () {
            // Arrange
            var Todos;
            httpBackend.expectGET('http://localhost:3000/api/todos').respond([{}, {}, {}]);

            // Act
            Todos = Todo.query();
            httpBackend.flush();

            // Assert
            expect(Todos.length).toBe(3);
        });

    });
});
