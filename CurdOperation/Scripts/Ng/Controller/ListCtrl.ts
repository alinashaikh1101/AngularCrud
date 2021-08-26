/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />
module CurdOperationExtension {
    export interface IPathwayScope extends ng.IScope {
        loading: boolean;
        loadingTask: boolean;
        Description: String;
        ClientName: String;
        ClientEmail: String;
        ProjectType: String;
        HourlyRate: string;
        
        

        project: IStudentModel

    }
    export class ListCtrl extends wp.angularBase.BaseCtrl implements angular.IController {
        // firstName: String;
        // lastName: String;
        // rollNumber: Number;
        // myDate: any;
        ClientId: number;
        Description: String;
        ClientName: String;
        ClientEmail: String;
        ProjectType: String;
        HourlyRate: String;



        infoId: number;
        project: IStudentModel;

        $scope: CurdOperationExtension.IPathwayScope;
        private $mdDialog: any;
        constructor($scope: CurdOperationExtension.IPathwayScope, private dataSvc: StudentDataService, $timeout, $mdDialog: any, $mdSelect: any, $mdToast: any) {

            super($scope, $mdToast);
            this.$scope = $scope;
            this.$mdDialog = $mdDialog;
            this.getClientList();
        }

        $onInit() {
        }

        private init(): void {
        }

        clientList: IStudentModel[];
        getClientList = () => {
            this.dataSvc.getPathwayDetail().then((data) => {
                this.clientList = data;
                console.log(data);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }

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

        UpdateClient = (id) => {
            window.location.href = "/Student/Update?ClientId=" + id;
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
    ListCtrl.$inject = ['$scope', 'StudentDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];

    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', StudentDataService.StudentDataServiceFactory]);
    app.controller('ListCtrl', ListCtrl);
}