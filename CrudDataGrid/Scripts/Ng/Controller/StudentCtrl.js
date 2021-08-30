var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />
var CrudDataGridExtension;
(function (CrudDataGridExtension) {
    var StudentCtrl = /** @class */ (function (_super) {
        __extends(StudentCtrl, _super);
        function StudentCtrl($scope, dataSvc, $timeout, $mdDialog, $mdSelect, $mdToast) {
            var _this = _super.call(this, $scope, $mdToast) || this;
            _this.dataSvc = dataSvc;
            _this.InsertClient = function () {
                _this.dataSvc.postSkill(_this.$scope.project).then(function (data) {
                    _this.showMessage("Client Added Successfully");
                    _this.$scope.project = null;
                    console.log(data);
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.UpdateClient = function () {
                _this.dataSvc.updateClient(_this.$scope.project).then(function (data) {
                    _this.showMessage("Client update Successfully");
                    _this.$scope.project = null;
                    console.log(data);
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.ShowInfo = function (id) {
                window.location.href = "/Student/Update?ClientId=" + id;
            };
            _this.$scope = $scope;
            $scope.project = {
                ClientId: 0,
                Description: '',
                HourlyRate: 1234,
                Special: true,
                TermsAndService: true,
                ClientEmail: '',
                ClientName: '',
                ProjectType: '',
            };
            return _this;
        }
        StudentCtrl.prototype.$onInit = function () {
        };
        StudentCtrl.prototype.init = function () {
        };
        return StudentCtrl;
    }(wp.angularBase.BaseCtrl));
    CrudDataGridExtension.StudentCtrl = StudentCtrl;
    StudentCtrl.$inject = ['$scope', 'StudentDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];
    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', CrudDataGridExtension.StudentDataService.StudentDataServiceFactory]);
    app.controller('StudentCtrl', StudentCtrl);
})(CrudDataGridExtension || (CrudDataGridExtension = {}));
//# sourceMappingURL=StudentCtrl.js.map