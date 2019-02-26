todoApp.controller('mainController', ['$scope', '$location', 'Todo', function ($scope, $location, Todo) {

    loadtodos();
    $scope.newTodo = {title: ''};

    $scope.addTodo = function () {
        Todo.save({todo: $scope.newTodo});
        $scope.newTodo = {title: ''};
        loadtodos();
    };

    $scope.deleteTodo = function (todoId) {
        Todo.destroy({id: todoId})
    }

    $scope.toggleStatus = function (todoId, status) {
        var requestedStatus = 'finished';
        if (status === 'finished') {
            requestedStatus = 'started'
        }
        Todo.toggleStatus({id: todoId}, {id: todoId, status: requestedStatus})
    }

    $scope.editTitle = function () {

    }
    function loadtodos() {
        $scope.todos = Todo.query();
    }
}]);

todoApp.controller('archivedTodoController',
    ['$scope', '$location', 'Todo', function ($scope, $location, Todo) {

        loadarchivedtodos();

        $scope.restoreTodo = function (todoId) {
            Todo.restore({id: todoId}, {id: todoId})
        }

        function loadarchivedtodos() {
            $scope.todos = Todo.archivedTodos(function (todos) {
                angular.forEach(todos, function (todo) {
                    console.log(todo)
                })
            });
        }
    }]
);

todoApp.controller('testController', ['$scope', function ($scope) {
}]);
