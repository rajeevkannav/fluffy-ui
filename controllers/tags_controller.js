todoApp.controller('tagsController',
    ['$scope', '$routeParams', 'Todo', '$location', 'notify',
        function ($scope, $routeParams, Todo, $location, notify) {

            $scope.todoId = $routeParams.id;
            $scope.tag = {name: ""};
            $scope.attachTag = function () {
                Todo.attachTag(
                    {id: $scope.todoId},
                    {"tag": {"name": $scope.tag.name}}).$promise.then(function () {
                    $location.path('/')
                    notify({message: 'Tag attached successfully.', duration: 1000})
                });
            }

        }]);
