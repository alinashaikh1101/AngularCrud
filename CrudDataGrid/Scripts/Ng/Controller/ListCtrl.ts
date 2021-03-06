/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />
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
        Special: boolean;

        project: IStudentModel
    }
    export class ListCtrl extends wp.angularBase.BaseCtrl implements angular.IController {

        ClientId: number;
        Description: String;
        ClientName: String;
        ClientEmail: String;
        ProjectType: String;
        HourlyRate: number;
        TermsAndService: boolean;
        Special: boolean;

        infoId: number;
        project: IStudentModel;

        $scope: CrudDataGridExtension.IPathwayScope;
        private $mdDialog: any;
        constructor($scope: CrudDataGridExtension.IPathwayScope, private dataSvc: StudentDataService, $timeout, $mdDialog: any, $mdSelect: any, $mdToast: any) {

            super($scope, $mdToast);
            this.$mdDialog = $mdDialog;
            this.$scope = $scope;
            this.getClientList();
            this.joindatas();
        }

        $onInit() {
        }

        private init(): void {
        }

        clientList: IStudentModel[];
        getClientList = () => {
            this.dataSvc.getPathwayDetail(this.$scope.project).then((data) => {
                this.clientList = data;
                console.log(data);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }


        ViewClient = (id: number) => {
            this.ShowInfo(id);
            console.log(id);
            /*this.dataSvc.getInfoByid(id).then((data) => {
                console.log(data);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })*/
        }

        UpdateClient = (id:number) => {
            this.ShowInfo(id);
            //window.location.href = "/Student/Update?ClientId="+id;
            //this.dataSvc.updateClient(id).then((data) => {
              console.log(id);
            //}).catch((error) => {
            //    console.log(error);
            //}).finally(() => {

            //})
        }

        DeleteClient = (ClientId) => {
            var confirm = this.$mdDialog.confirm()
                .title('Are you sure you want to delete')
                .textContent('If you delete you will lose all your data permanently')
                .ariaLabel('')
                .targetEvent(null)
                .ok('Yes Delete')
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
        joindata: IStudentModel[];
        joindatas = () => {
            this.dataSvc.joindata(this.$scope.project).then((data) => {
                this.joindata = data;

                console.log(data);
                //this.ClientGrid();
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
            });
        };

        ShowInfo = (id: number) => {
            window.location.href = "/Student/Update?ClientId="+id;
        }
    }
    ListCtrl.$inject = ['$scope', 'StudentDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];

    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', StudentDataService.StudentDataServiceFactory]);
    app.controller('ListCtrl', ListCtrl);
}