/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />
/// <reference path="../../typings/devexpress-web/devexpress-web.d.ts" />

module CurdOperationExtension {
    export interface IPathwayScope extends ng.IScope {
        loading: boolean;
        loadingTask: boolean;
    }
    export class ListDataCtrl extends wp.angularBase.BaseCtrl implements angular.IController {


        $scope: CurdOperationExtension.IPathwayScope;
        private $mdDialog: any;
        constructor($scope: CurdOperationExtension.IPathwayScope, private dataSvc: StudentDataService, $timeout, $mdDialog: any, $mdSelect: any, $mdToast: any) {

            super($scope, $mdToast);
            this.$scope = $scope;
            this.$mdDialog = $mdDialog;
            this.getClientList();
            this.listDataGrid();

        }

        $onInit() {
        }

        private init(): void {
        }

        clientList: IStudentModel[];
        getClientList = () => {
            this.dataSvc.getPathwayDetail().then((data) => {
                this.clientList = data;
                this.listDataGrid();
                console.log(data);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }

        listDataGrid = () => {

            $("#gridContainer").dxDataGrid({
                dataSource: this.clientList,
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
                        cellTemplate: (container, options) => {

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
                                onClick: () => {
                                    this.UpdateClient(options.data.ClientId);
                                }
                            }).appendTo(container);

                            $("<div/>").dxButton({
                                icon: "remove",
                                type: "danger",
                                text: "Delete",
                                onClick: () => {
                                    this.DeleteClient(options.data.id);
                                }
                            }).appendTo(container);

                        }
                    }],

                showBorders: true

            });
        }
        UpdateClient = (ClientId) => {
            
            //console.log(this.$scope.project)
            this.ShowInfo(ClientId);
            this.dataSvc.UpdateClient(ClientId).then((data) => {
                //this.showMessage("updated sucesfully");
                console.log(data);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {



            })
        }
        DeleteClient = (id) => {
            var confirm = this.$mdDialog.confirm()
                .title('Would you like to delete your client?')
                .textContent('')
                .ariaLabel('')
                .targetEvent(null)
                .ok('Please do it!')
                .cancel('cancel');
            this.$mdDialog.show(confirm).then(() => {
                this.dataSvc.DeleteClient(id).then((data) => {
                    this.showMessage("Deleted successfully");
                    console.log(data);

                    //this.DeleteClient(id);
                    this.getClientList();

                }).catch((error) => {
                    console.log(error);
                }).finally(() => {



                })
            }, () => {
            });
        }
        ShowInfo = (id: number) => {
            window.location.href = "/Student/Update?ClientId=" + id;
        }

    }
 ListDataCtrl.$inject = ['$scope', 'StudentDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];

    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', StudentDataService.StudentDataServiceFactory]);
    app.controller('ListDataCtrl', ListDataCtrl);
}