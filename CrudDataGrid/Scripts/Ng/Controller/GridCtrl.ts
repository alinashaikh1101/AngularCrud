/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />
/// <reference path="../../typings/devexpress-web/devexpress-web.d.ts" />


module CrudDataGridExtension {
    export interface IPathwayScope extends ng.IScope {
        loading: boolean;
        loadingTask: boolean;
        Description: String;
        ClientName: String;
        ClientEmail: String;
        ProjectType: String;
        HourlyRate: number;
        TermsAndService: boolean;
        special: boolean;

        project: IStudentModel
        
    }
    export class GridCtrl extends wp.angularBase.BaseCtrl implements angular.IController {
        ClientId: number;
        Description: String;
        ClientName: String;
        ClientEmail: String;
        ProjectType: String;
        HourlyRate: number;
        TermsAndService: boolean;
        special: boolean;

        infoId: number;
        project: IStudentModel;


        $scope: CrudDataGridExtension.IPathwayScope;
        private $mdDialog: any;
        filterlist: IStudentModel;
        grouplist: IStudentModel;
        joindata: IStudentModel;
        
        
        constructor($scope: CrudDataGridExtension.IPathwayScope, private dataSvc: StudentDataService, $timeout, $mdDialog: any, $mdSelect: any, $mdToast: any) {

            super($scope, $mdToast);
            this.$scope = $scope;
            this.$mdDialog = $mdDialog;
            //this.clientAdd();

            this.getClientList();
        }

        $onInit() {
        }

        private init(): void {
        }

        clientList: IStudentModel[];
        getClientList = () => {
            this.dataSvc.getPathwayDetail(this.$scope.project).then((data) => {
                var Employe: String[] = new Array(100);
                this.clientList = data;
                console.log(data);
                this.ClientGrid();

            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }

        ClientGrid = () => {

            $("#gridContainer").dxDataGrid({

                dataSource: this.clientList,
                keyExpr: "ClientId",
                columns: [
                    { caption: "Description", dataField: "Description" },
                    { caption: "ClientName", dataField: "ClientName" },
                    { caption: "ClientEmail", dataField: "ClientEmail" },
                    { caption: "ProjectType", dataField: "ProjectType" },
                    { caption: "HourlyRate", dataField: "HourlyRate", alignment: "center" },
                    //{ caption: "TermsAndService", dataField: "TermsAndService" },
                    //{ caption: "Special", dataField: "special" },
                    {
                        caption: "Action",
                        minWidth: 340,
                        cellTemplate: (container, options) => {
                            container.addClass("chart-cell");
                            console.log("rows click", options.data);


                            $("<div/>").dxButton({
                                icon: "edit",
                                type: "default",
                                text: "Edit",
                                onClick: (e) => {
                                    this.UpdateClient(options.data.ClientId);
                                }
                            }).appendTo(container);


                            $("<div/>").dxButton({
                                icon: "clear",
                                type: "danger",
                                text: "Delete",
                                onClick: (e) => {
                                    this.DeleteClient(options.data.ClientId);
                                }
                            }).appendTo(container);


                            $("<div/>").dxButton({
                                icon: "info",
                                type: "success",
                                text: "View",
                                onClick: (e) => {
                                    this.ViewClient(options.data.ClientId);
                                }
                            }).appendTo(container);

                            $("<div/>").dxButton({
                                icon: "",
                                type: "filters",
                                text: "filter",
                                onClick: (e) => {
                                    this.filter();
                                }
                            }).appendTo(container);

                            $("<div/>").dxButton({
                                icon: "",
                                type: "group",
                                text: "group",
                                onClick: (e) => {
                                    this.Grouping();
                                }
                            }).appendTo(container);

                        }

                    }],

                showBorders: true,
                allowColumnReordering: true,
                allowColumnResizing: true,
                columnAutoWidth: true,

            });

        }

        InsertClient = () => {
            this.dataSvc.postSkill(this.$scope.project).then((data) => {

                this.showMessage("Client Added Successfully");
                this.$scope.project = null;
                console.log(data);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }


        ViewClient = (id) => {
            this.ShowInfo(id);
            console.log(id);
            this.dataSvc.getInfoByid(id).then((data) => {
                console.log(data);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }


        UpdateClient = (id) => {
            this.ShowInfo(id);
            this.dataSvc.updateClient(id).then((data) => {
                this.showMessage("Client  Successfully");
                console.log(data);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }

        DeleteClient = (ClientId) => {
            var confirm = this.$mdDialog.confirm()
                .title('Are you sure you want to delete client ?')
                .textContent('')
                .ariaLabel('')
                .targetEvent(null)
                .ok('Yes ')
                .cancel('Cancel');
            this.$mdDialog.show(confirm).then(() => {
                this.dataSvc.deleteClient(ClientId).then((data) => {
                    this.showMessage("Deleted Successfully");
                    console.log(data);
                    this.getClientList();

                }).catch((error) => {
                    console.log(error);
                }).finally(() => {

                })
            }, () => {
            });
        }
        filtertlist: IStudentModel[];
        filter = () => {
            this.dataSvc.filter(this.$scope.project).then((data) => {
                var Employe: String[] = new Array(100);
                this.filterlist = data;
                //this.clientList = data;
                console.log(data);
                this.ClientGrid();

            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }
        grouplists: IStudentModel[];
        Grouping = () => {
            this.dataSvc.Grouping(this.$scope.project).then((data) => {
                var Employe: String[] = new Array(100);
                this.grouplist = data;
                
                console.log(data);
                this.ClientGrid();
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
            });
        };
        joinList: IStudentModel[];
        joindatas = () => {
            this.dataSvc.joindata(this.$scope.project).then((data) => {
                var Employe: String[] = new Array(100);
                this.joindata = data;

                console.log(data);
                this.ClientGrid();
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
            });
        };
        
       
        

        ShowInfo = (id: number) => {
            window.location.href = "/Student/Update?ClientId=" + id;
        }

    }
    GridCtrl.$inject = ['$scope', 'StudentDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];

    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', StudentDataService.StudentDataServiceFactory]);
    app.controller('GridCtrl', GridCtrl);
}