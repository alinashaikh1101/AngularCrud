/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />
var CurdOperationExtension;
(function (CurdOperationExtension) {
    var ajaxApi = Workpulse.Site.AjaxApi;
    var StudentDataService = /** @class */ (function () {
        function StudentDataService(httpService, qService) {
            this.httpService = httpService;
            this.qService = qService;
        }
        StudentDataService.prototype.postSkill = function (pathway) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44301/Student/InsertClient";
            ajaxApi({
                url: apiUrl,
                data: JSON.stringify(pathway),
                type: 'POST',
                contentType: 'application/json',
                success: function (response) {
                    deferred.resolve(response);
                },
                error: function (xhr) {
                    console.log(xhr);
                    Workpulse.Site.AlertJS(xhr);
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        };
        StudentDataService.prototype.getPathwayDetail = function () {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44301/student/GetClientList";
            ajaxApi({
                type: 'GET',
                url: apiUrl,
                success: function (response) {
                    deferred.resolve(response);
                },
                error: function (xhr) {
                    console.log(xhr);
                    Workpulse.Site.AlertJS(xhr);
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        };
        StudentDataService.prototype.DeleteClient = function (id) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44301/student/DeleteClientById/" + id;
            ajaxApi({
                type: 'GET',
                url: apiUrl,
                success: function (response) {
                    deferred.resolve(response);
                },
                error: function (xhr) {
                    console.log(xhr);
                    Workpulse.Site.AlertJS(xhr);
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        };
        StudentDataService.prototype.UpdateClient = function (id) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44301/Student/UpdateClientById" + id;
            ajaxApi({
                type: 'POST',
                contentType: -'application/json',
                url: apiUrl,
                success: function (response) {
                    deferred.resolve(response);
                },
                error: function (xhr) {
                    console.log(xhr);
                    Workpulse.Site.AlertJS(xhr);
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        };
        StudentDataService.prototype.ViewClient = function (Id) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44301/Student/ViewClientById/" + Id;
            ajaxApi({
                type: 'POST',
                contentType: -'application/json',
                url: apiUrl,
                success: function (response) {
                    deferred.resolve(response);
                },
                error: function (xhr) {
                    console.log(xhr);
                    Workpulse.Site.AlertJS(xhr);
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        };
        StudentDataService.StudentDataServiceFactory = function ($http, $q) {
            return new StudentDataService($http, $q);
        };
        return StudentDataService;
    }());
    CurdOperationExtension.StudentDataService = StudentDataService;
    function StudentDataServiceFactory($http, IHttpService, $q, IQService) {
        throw new Error("Function not implemented.");
    }
})(CurdOperationExtension || (CurdOperationExtension = {}));
//# sourceMappingURL=StudentDataService.js.map