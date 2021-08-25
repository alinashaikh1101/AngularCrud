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
    var PathwayCtrl = /** @class */ (function (_super) {
        __extends(PathwayCtrl, _super);
        function PathwayCtrl($scope, dataSvc, $timeout, $mdDialog, $mdSelect, $mdToast) {
            var _this = _super.call(this, $scope, $mdToast) || this;
            _this.dataSvc = dataSvc;
            _this.insertClient = function () {
                console.log(_this.$scope.project);
                _this.dataSvc.postSkill(_this.$scope.project).then(function (data) {
                    console.log(data);
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.GetClientList = function () {
                _this.dataSvc.getPathwayDetail().then(function (data) {
                    _this.studentList = data;
                    console.log(data);
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.DeleteClient = function (id) {
                var confirm = _this.$mdDialog.confirm()
                    .title('Would you like to delete your client?')
                    .textContent('')
                    .ariaLabel('')
                    .targetEvent(null)
                    .ok('Please do it!')
                    .cancel('cancel');
                _this.$mdDialog.show(confirm).then(function () {
                    _this.dataSvc.DeleteClient(id).then(function (data) {
                        _this.showMessage("Deleted successfully");
                        console.log(data);
                        //this.DeleteClient(id);
                        _this.GetClientList();
                    }).catch(function (error) {
                        console.log(error);
                    }).finally(function () {
                    });
                }, function () {
                });
            };
            _this.UpdateClient = function () {
                window.location.href = "/Student/UpdateClient/" + id;
                //this.dataSvc.UpdateClient(this.$scope.project).then((data) => {
                //this.showMessage("Updated Sucesfully");
                //console.log(data);
                //}).catch((error) => {
                // console.log(error);
                //}).finally(() => {
                //})
            };
            _this.ViewClient = function (Id) {
                window.location.href = "/Student/ViewClient/" + Id;
                _this.dataSvc.ViewClient(id).then(function (data) {
                    console.log(data);
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.$scope = $scope;
            _this.$mdDialog = $mdDialog;
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
            _this.GetClientList();
            return _this;
            // this.DeleteClient(id);
        }
        PathwayCtrl.prototype.$onInit = function () {
        };
        PathwayCtrl.prototype.init = function () {
        };
        return PathwayCtrl;
    }(wp.angularBase.BaseCtrl));
    CurdOperationExtension.PathwayCtrl = PathwayCtrl;
    PathwayCtrl.$inject = ['$scope', 'StudentDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];
    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', CurdOperationExtension.StudentDataService.StudentDataServiceFactory]);
    app.controller('PathwayCtrl', PathwayCtrl);
})(CurdOperationExtension || (CurdOperationExtension = {}));
function id_(id_) {
    throw new Error("Function not implemented.");
}
//# sourceMappingURL=StudentListctrl.js.map