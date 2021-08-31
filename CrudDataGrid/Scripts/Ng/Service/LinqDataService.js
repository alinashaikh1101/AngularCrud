/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />
var CrudDataGridExtension;
(function (CrudDataGridExtension) {
    var ajaxApi = Workpulse.Site.AjaxApi;
    var LinqDataService = /** @class */ (function () {
        function LinqDataService(httpService, qService) {
            this.httpService = httpService;
            this.qService = qService;
        }
        LinqDataService.prototype.postSkill = function (pathway) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44381/studentapi/InsertClient";
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
        LinqDataService.prototype.searchData = function (id) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44381/studentapi/searchData/" + id;
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
        LinqDataService.StudentDataServiceFactory = function ($http, $q) {
            return new LinqDataService($http, $q);
        };
        return LinqDataService;
    }());
    CrudDataGridExtension.LinqDataService = LinqDataService;
})(CrudDataGridExtension || (CrudDataGridExtension = {}));
//# sourceMappingURL=LinqDataService.js.map