/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />
/// <reference path="../../typings/devexpress-web/devexpress-web.d.ts" />
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
var CurdOperationExtension;
(function (CurdOperationExtension) {
    var ListDataCtrl = /** @class */ (function (_super) {
        __extends(ListDataCtrl, _super);
        function ListDataCtrl($scope, dataSvc, $timeout, $mdDialog, $mdSelect, $mdToast) {
            var _this = _super.call(this, $scope, $mdToast) || this;
            _this.dataSvc = dataSvc;
            _this.getClientList = function () {
                _this.dataSvc.getPathwayDetail().then(function (data) {
                    _this.clientList = data;
                    _this.listDataGrid();
                    console.log(data);
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.listDataGrid = function () {
                $("#gridContainer").dxDataGrid({
                    dataSource: _this.clientList,
                    keyExpr: 'Id',
                    columns: [
                        { caption: "Id", dataField: "Id" },
                        { caption: "ClientName", dataField: "ClientName" },
                        { caption: "ClientEmail", dataField: "ClientEmail" },
                        { caption: "ProjectType", dataField: "ProjectType" },
                        { caption: "Description", dataField: "Description" },
                        { caption: "HourlyRate", dataField: "HourlyRate" },
                        {
                            minWidth: 325,
                            cellTemplate: function (container, options) {
                                container.addClass("chart-cell");
                                console.log("rows click", options.data);
                                /*$("<div/>").dxButton({
                                    icon: "check",
                                    type: "primary",
                                    text: "view",
                                    onClick: () => {
    
    
                                    }
                                }).appendTo(container);*/
                                $("<div/>").dxButton({
                                    icon: "plus",
                                    type: "primary",
                                    text: "Update",
                                    onClick: function () {
                                        _this.UpdateClient(options.data.ClientId);
                                    }
                                }).appendTo(container);
                                $("<div/>").dxButton({
                                    icon: "remove",
                                    type: "danger",
                                    text: "Delete",
                                    onClick: function () {
                                        _this.DeleteClient(options.data.id);
                                    }
                                }).appendTo(container);
                            }
                        }
                    ],
                    showBorders: true
                });
            };
            _this.UpdateClient = function (ClientId) {
                //console.log(this.$scope.project)
                _this.ShowInfo(ClientId);
                _this.dataSvc.UpdateClient(ClientId).then(function (data) {
                    //this.showMessage("updated sucesfully");
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
                        _this.getClientList();
                    }).catch(function (error) {
                        console.log(error);
                    }).finally(function () {
                    });
                }, function () {
                });
            };
            _this.ShowInfo = function (id) {
                window.location.href = "/Student/Update?ClientId=" + id;
            };
            _this.$scope = $scope;
            _this.$mdDialog = $mdDialog;
            _this.getClientList();
            _this.listDataGrid();
            return _this;
        }
        ListDataCtrl.prototype.$onInit = function () {
        };
        ListDataCtrl.prototype.init = function () {
        };
        return ListDataCtrl;
    }(wp.angularBase.BaseCtrl));
    CurdOperationExtension.ListDataCtrl = ListDataCtrl;
    ListDataCtrl.$inject = ['$scope', 'StudentDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];
    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', CurdOperationExtension.StudentDataService.StudentDataServiceFactory]);
    app.controller('ListDataCtrl', ListDataCtrl);
})(CurdOperationExtension || (CurdOperationExtension = {}));
//# sourceMappingURL=ListDataCtrl.js.map