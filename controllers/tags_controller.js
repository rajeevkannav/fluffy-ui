todoApp.controller('tagsController',
    ['$scope', '$routeParams', 'Todo', '$location',
        function ($scope, $routeParams, Todo, $location) {

            $scope.todoId = $routeParams.id;
            $scope.tag = {name: ""};
            $scope.attachTag = function () {
                Todo.attachTag(
                    {id: $scope.todoId},
                    {"tag": {"name": $scope.tag.name}}).$promise.then(function () {
                    $location.path('/')
                });
            }

        }]);
