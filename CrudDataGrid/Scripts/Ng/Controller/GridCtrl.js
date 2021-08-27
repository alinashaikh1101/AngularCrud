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
/// <reference path="../../typings/devexpress-web/devexpress-web.d.ts" />
var CrudDataGridExtension;
(function (CrudDataGridExtension) {
    var GridCtrl = /** @class */ (function (_super) {
        __extends(GridCtrl, _super);
        function GridCtrl($scope, dataSvc, $timeout, $mdDialog, $mdSelect, $mdToast) {
            var _this = _super.call(this, $scope, $mdToast) || this;
            _this.dataSvc = dataSvc;
            _this.getClientList = function () {
                _this.dataSvc.getPathwayDetail().then(function (data) {
                    _this.clientList = data;
                    console.log(data);
                    _this.ClientGrid();
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.clientAdd = function () {
                $("#buttonContainer").dxButton({
                    //colTemplate: (options) => {
                    //    console.log("rows click",options.data);
                    /* $("<div/>").dxButton({*/
                    icon: "plus",
                    text: "add",
                    onClick: function () {
                        _this.InsertClient();
                    }
                });
            };
            /* })*/
            /*  }*/
            _this.ClientGrid = function () {
                $("#gridContainer").dxDataGrid({
                    dataSource: _this.clientList,
                    keyExpr: "ClientId",
                    columns: [
                        { caption: "Description", dataField: "Description" },
                        { caption: "ClientName", dataField: "ClientName" },
                        { caption: "ClientEmail", dataField: "ClientEmail" },
                        { caption: "ProjectType", dataField: "ProjectType" },
                        { caption: "HourlyRate", dataField: "HourlyRate", alignment: "center" },
                        { caption: "Terms and Conditions", dataField: "TermsAndService" },
                        { caption: "Special", dataField: "special" },
                        {
                            caption: "Action",
                            minwidth: 325,
                            cellTemplate: function (container, options) {
                                container.addClass("chart-cell");
                                console.log("rows click", options.data);
                                //edit
                                $("<div/>").dxButton({
                                    icon: "edit",
                                    type: "default",
                                    text: "Edit",
                                    onClick: function (e) {
                                        _this.UpdateClient(options.data.ClientId);
                                    }
                                }).appendTo(container);
                                //delete
                                $("<div/>").dxButton({
                                    icon: "trash",
                                    type: "danger",
                                    text: "Delete",
                                    onClick: function (e) {
                                        _this.DeleteClient(options.data.ClientId);
                                    }
                                }).appendTo(container);
                                //view 
                                $("<div/>").dxButton({
                                    icon: "info",
                                    type: "success",
                                    text: "View",
                                    onClick: function (e) {
                                        _this.ViewClient(options.data.ClientId);
                                    }
                                }).appendTo(container);
                            }
                        }
                    ],
                    showBorders: true,
                });
            };
            _this.InsertClient = function () {
                _this.dataSvc.postSkill(_this.$scope.project).then(function (data) {
                    //this.showMessage("Client Added Successfully");
                    _this.$scope.project = null;
                    console.log(data);
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.ViewClient = function (id) {
                _this.ShowInfo(id);
                console.log(id);
                _this.dataSvc.getInfoByid(id).then(function (data) {
                    console.log(data);
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.UpdateClient = function (id) {
                _this.ShowInfo(id);
                _this.dataSvc.updateClient(id).then(function (data) {
                    console.log(data);
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.DeleteClient = function (ClientId) {
                var confirm = _this.$mdDialog.confirm()
                    .title('Are you sure you want to delete')
                    .textContent('')
                    .ariaLabel('')
                    .targetEvent(null)
                    .ok('Yes ')
                    .cancel('Cancel');
                _this.$mdDialog.show(confirm).then(function () {
                    _this.dataSvc.deleteClient(ClientId).then(function (data) {
                        //this.showMessage("Deleted Successfully");
                        console.log(data);
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
            _this.clientAdd();
            _this.getClientList();
            return _this;
        }
        GridCtrl.prototype.$onInit = function () {
        };
        GridCtrl.prototype.init = function () {
        };
        return GridCtrl;
    }(wp.angularBase.BaseCtrl));
    CrudDataGridExtension.GridCtrl = GridCtrl;
    GridCtrl.$inject = ['$scope', 'StudentDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];
    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', CrudDataGridExtension.StudentDataService.StudentDataServiceFactory]);
    app.controller('GridCtrl', GridCtrl);
})(CrudDataGridExtension || (CrudDataGridExtension = {}));
//# sourceMappingURL=GridCtrl.js.map