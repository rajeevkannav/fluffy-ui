// describe('searchController', function () {
//
//     var ctrl, scope, httpBackend, rootUrl, deletedTodo, deletedTodoId;
//     beforeEach(module('todoApp'));
//
//     beforeEach(inject(function (_$httpBackend_, _$rootScope_, _$controller_) {
//         // Arrangements
//         var $rootScope = _$rootScope_;
//         var $controller = _$controller_;
//         httpBackend = _$httpBackend_;
//         scope = $rootScope.$new();
//         rootUrl = 'http://localhost:3000/api/';
//         deletedTodo = {
//             _id: {$oid: 'jdfhjg235345'},
//             title: 'Test Todo',
//             status: 'started',
//             is_deleted: true
//         };
//         deletedTodoId = deletedTodo._id.$oid;
//         // Act
//         httpBackend.expectGET(rootUrl + 'todos?archived=true').respond(200, []);
//         ctrl = $controller('searchController', {'$scope': scope});
//         httpBackend.flush();
//     }));
//
//     afterEach(function () {
//         httpBackend.verifyNoOutstandingExpectation();
//         httpBackend.verifyNoOutstandingRequest();
//     });
//
//
//     it("archivedTodoController should be defined", function () {
//         // Assertions
//         expect(ctrl).toBeDefined();
//     });
//
//     it("empty todos collection should be defined", function () {
//         // Assertions
//         expect(scope.todos).toBeDefined();
//         expect(scope.todos.length).toBe(0);
//     });
//
//     it("empty todos collection should be defined", function () {
//         // Assertions
//         expect(scope.todos).toBeDefined();
//         expect(scope.todos.length).toBe(0);
//     });
//
//     //
//     // it("should be able to restore a deleted todo", function () {
//     //     // Arrangements
//     //     scope.todos = [deletedTodo]
//     //     var requestURL = rootUrl + 'todos/' + deletedTodoId + '/restore';
//     //     // Act
//     //     httpBackend.expectPATCH(requestURL).respond(204, {
//     //         todo: {
//     //             _id: {$oid: 'jdfhjg235345'},
//     //             title: 'Test Todo',
//     //             status: 'started',
//     //             is_deleted: true
//     //         }
//     //     });
//     //     scope.restoreTodo(deletedTodo);
//     //     httpBackend.flush();
//     //     // Assertions
//     //     expect(scope.todos.length).toBe(0);
//     // });
//
// });
