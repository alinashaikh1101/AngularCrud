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
var CurdOperationExtension;
(function (CurdOperationExtension) {
    var DeleteCtrl = /** @class */ (function (_super) {
        __extends(DeleteCtrl, _super);
        function DeleteCtrl($scope, dataSvc, $timeout, $mdDialog, $mdSelect, $mdToast) {
            var _this = _super.call(this, $scope, $mdToast) || this;
            _this.dataSvc = dataSvc;
            _this.DeleteClient = function (id) {
                _this.dataSvc.DeleteClient(id).then(function (data) {
                    console.log(data);
                    _this.GetClientList();
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.$scope = $scope;
            // this.firstName = "Alina";
            // this.lastName = "";
            // this.rollNumber = 2;
            //  this.$scope.firstName = "alina";
            //   this.myDate = new Date();
            $scope.GetAllData = {};
            $scope.project = {
                description: 'NUCLEAR',
                clientEmail: '',
                clientName: '',
                projectType: '',
                hourlyRate: 800
            };
            return _this;
            //this.GetClientList();
            // this.DeleteClient(id);
        }
        DeleteCtrl.prototype.$onInit = function () {
        };
        DeleteCtrl.prototype.init = function () {
        };
        return DeleteCtrl;
    }(wp.angularBase.BaseCtrl));
    CurdOperationExtension.DeleteCtrl = DeleteCtrl;
    DeleteCtrl.$inject = ['$scope', 'StudentDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];
    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', CurdOperationExtension.StudentDataService.StudentDataServiceFactory]);
    app.controller('DeleteCtrl', DeleteCtrl);
})(CurdOperationExtension || (CurdOperationExtension = {}));
function id(_id) {
    throw new Error("Function not implemented.");
}
//# sourceMappingURL=DeleteCtrl.js.map