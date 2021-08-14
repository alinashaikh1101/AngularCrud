/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />
var CurdOperationExtension;
(function (CurdOperationExtension) {
    var StudentDataService = /** @class */ (function () {
        function StudentDataService(httpService, qService) {
            this.httpService = httpService;
            this.qService = qService;
        }
        StudentDataService.StudentDataServiceFactory = function ($http, $q) {
            return new StudentDataService($http, $q);
        };
        return StudentDataService;
    }());
    CurdOperationExtension.StudentDataService = StudentDataService;
})(CurdOperationExtension || (CurdOperationExtension = {}));
//# sourceMappingURL=StudentDataService.js.map