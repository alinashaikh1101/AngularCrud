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
    var ListCtrl = /** @class */ (function (_super) {
        __extends(ListCtrl, _super);
        function ListCtrl($scope, dataSvc, $timeout, $mdDialog, $mdSelect, $mdToast) {
            var _this = _super.call(this, $scope, $mdToast) || this;
            _this.dataSvc = dataSvc;
            _this.getClientList = function () {
                _this.dataSvc.getPathwayDetail(_this.$scope.project).then(function (data) {
                    _this.clientList = data;
                    console.log(data);
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.ViewClient = function (id) {
                _this.ShowInfo(id);
                console.log(id);
                /*this.dataSvc.getInfoByid(id).then((data) => {
                    console.log(data);
                }).catch((error) => {
                    console.log(error);
                }).finally(() => {
    
                })*/
            };
            _this.UpdateClient = function (id) {
                _this.ShowInfo(id);
                //window.location.href = "/Student/Update?ClientId="+id;
                //this.dataSvc.updateClient(id).then((data) => {
                console.log(id);
                //}).catch((error) => {
                //    console.log(error);
                //}).finally(() => {
                //})
            };
            _this.DeleteClient = function (ClientId) {
                var confirm = _this.$mdDialog.confirm()
                    .title('Are you sure you want to delete')
                    .textContent('If you delete you will lose all your data permanently')
                    .ariaLabel('')
                    .targetEvent(null)
                    .ok('Yes Delete')
                    .cancel('Cancel');
                _this.$mdDialog.show(confirm).then(function () {
                    _this.dataSvc.deleteClient(ClientId).then(function (data) {
                        _this.showMessage("Deleted Successfully");
                        console.log(data);
                        _this.getClientList();
                    }).catch(function (error) {
                        console.log(error);
                    }).finally(function () {
                    });
                }, function () {
                });
            };
            _this.joindatas = function () {
                _this.dataSvc.joindata(_this.$scope.project).then(function (data) {
                    _this.joindata = data;
                    console.log(data);
                    //this.ClientGrid();
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.ShowInfo = function (id) {
                window.location.href = "/Student/Update?ClientId=" + id;
            };
            _this.$mdDialog = $mdDialog;
            _this.$scope = $scope;
            _this.getClientList();
            _this.joindatas();
            return _this;
        }
        ListCtrl.prototype.$onInit = function () {
        };
        ListCtrl.prototype.init = function () {
        };
        return ListCtrl;
    }(wp.angularBase.BaseCtrl));
    CrudDataGridExtension.ListCtrl = ListCtrl;
    ListCtrl.$inject = ['$scope', 'StudentDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];
    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', CrudDataGridExtension.StudentDataService.StudentDataServiceFactory]);
    app.controller('ListCtrl', ListCtrl);
})(CrudDataGridExtension || (CrudDataGridExtension = {}));
//# sourceMappingURL=ListCtrl.js.map