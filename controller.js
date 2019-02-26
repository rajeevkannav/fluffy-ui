todoApp.controller('mainController',
    ['$scope', 'Todo','$location',
        function ($scope, Todo, $location) {

            loadtodos();
            $scope.newTodo = {title: ''};

            $scope.addTodo = function () {
                Todo.save({todo: $scope.newTodo});
                $scope.newTodo = {title: ''};
                backToHome();
            };

            $scope.deleteTodo = function (todoId) {
                Todo.destroy({id: todoId})
                backToHome();
            }

            $scope.toggleStatus = function (todoId, status) {
                var requestedStatus = 'finished';
                if (status === 'finished') {
                    requestedStatus = 'started'
                }
                Todo.toggleStatus({id: todoId}, {id: todoId, status: requestedStatus})
                backToHome();
            }

            function loadtodos() {
                $scope.todos = Todo.query();
            }

            function backToHome() {
                $location.path('/')
            }
        }]);

todoApp.controller('archivedTodoController',
    ['$scope', '$location', 'Todo',
        function ($scope, $location, Todo) {

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

todoApp.controller('editTodoController',
    ['$scope', '$routeParams', 'Todo', '$location',
        function ($scope, $routeParams, Todo, $location) {

            initialize();
            function backToHome() {
                $location.path('/')
            }

            $scope.updateTodo = function (todoId) {
                Todo.update({id: todoId}, {title: $scope.todo.title})
                backToHome();
            };

            function initialize() {
                $scope.todoId = $routeParams.id;
                $scope.todo = Todo.get({id: $scope.todoId});
            }



        }]);

todoApp.controller('tagsController',
    ['$scope', '$routeParams', 'Todo','$location',
        function ($scope, $routeParams, Todo, $location) {

            $scope.todoId = $routeParams.id;
            $scope.tag = {name: ""}
            $scope.attachTag = function () {
                Todo.attachTag(
                    {id: $scope.todoId},
                    {
                        "tag": {"name": $scope.tag.name}
                    })
                backToHome();
            }

            function backToHome() {
                $location.path('/')
            }

        }]);
todoApp.controller('testController', ['$scope', function ($scope) {
}]);
