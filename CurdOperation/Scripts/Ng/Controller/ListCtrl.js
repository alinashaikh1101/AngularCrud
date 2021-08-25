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
    var ListCtrl = /** @class */ (function (_super) {
        __extends(ListCtrl, _super);
        function ListCtrl($scope, dataSvc, $timeout, $mdDialog, $mdSelect, $mdToast) {
            var _this = _super.call(this, $scope, $mdToast) || this;
            _this.dataSvc = dataSvc;
            _this.getClientList = function () {
                _this.dataSvc.getPathwayDetail().then(function (data) {
                    _this.clientList = data;
                    console.log(data);
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            /*ViewClient = (id) => {
                this.ShowInfo(id);
                console.log(id);
                this.dataSvc.getInfoByid(id).then((data) => {
                    console.log(data);
                }).catch((error) => {
                    console.log(error);
                }).finally(() => {
    
                })
            }*/
            _this.UpdateClient = function (id) {
                window.location.href = "/Student/Update?ClientId=" + id;
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
                        _this.getClientList();
                    }).catch(function (error) {
                        console.log(error);
                    }).finally(function () {
                    });
                }, function () {
                });
                var ShowInfo = function (id) {
                    window.location.href = "/Student/Update?ClientId=" + id;
                };
            };
            _this.$scope = $scope;
            _this.$mdDialog = $mdDialog;
            _this.getClientList();
            return _this;
        }
        ListCtrl.prototype.$onInit = function () {
        };
        ListCtrl.prototype.init = function () {
        };
        return ListCtrl;
    }(wp.angularBase.BaseCtrl));
    CurdOperationExtension.ListCtrl = ListCtrl;
    ListCtrl.$inject = ['$scope', 'StudentDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];
    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', CurdOperationExtension.StudentDataService.StudentDataServiceFactory]);
    app.controller('ListCtrl', ListCtrl);
})(CurdOperationExtension || (CurdOperationExtension = {}));
//# sourceMappingURL=ListCtrl.js.map