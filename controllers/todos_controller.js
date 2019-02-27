todoApp.controller('todosController',
    ['$scope', 'Todo', '$location',
        function ($scope, Todo, $location) {

            function loadtodos() {
                $scope.todos = Todo.query();
            }

            loadtodos();

            $scope.newTodo = {title: ''};

            $scope.addTodo = function () {
                Todo.save({todo: $scope.newTodo}).$promise.then(function () {
                    loadtodos();
                    $scope.newTodo = {title: ''};
                });
            };

            $scope.deleteTodo = function (todoId) {
                Todo.destroy({id: todoId}).$promise.then(function () {
                    loadtodos();
                });
            };

            $scope.toggleStatus = function (todoId, status) {
                var requestedStatus = 'finished';
                if (status === 'finished') {
                    requestedStatus = 'started'
                }
                Todo.toggleStatus({id: todoId},
                    {id: todoId, status: requestedStatus}).$promise.then(function () {
                    $location.path('/')
                });
            };

            $scope.query = "";
            $scope.queryViaTag = function () {
                $location.path('/search/' + $scope.query)
            };
        }]);



