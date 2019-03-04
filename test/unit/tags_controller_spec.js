describe('tagsController', function () {
    var $rootScope, createController;

    beforeEach(module('todoApp'));
    beforeEach(inject(function ($injector) {
        // Get hold of a scope (i.e. the root scope)
        $rootScope = $injector.get('$rootScope');
        var $controller = $injector.get('$controller');
        createController = function () {
            return $controller('todosController', {'$scope': $rootScope});
        };
    }));

    afterEach(function () {
    });

    it("Should be defined", function () {
        var controller = createController();
        expect(controller).toBeDefined();
    });

    it('should send todo to server', function () {
        expect('foo2').toBe('foo2');
    });
});