/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />
module CurdOperationExtension {
    export interface IPathwayScope extends ng.IScope {


        loading: boolean;
        loadingTask: boolean;

        project: IStudentModel

    }
    export class DeleteCtrl extends wp.angularBase.BaseCtrl implements angular.IController {
        // firstName: String;
        // lastName: String;
        // rollNumber: Number;
        // myDate: any;

        $scope: CurdOperationExtension.IPathwayScope;
        private $mdDialog: any;
        GetClientList: any;
        constructor($scope: CurdOperationExtension.IPathwayScope, private dataSvc: StudentDataService, $timeout, $mdDialog: any, $mdSelect: any, $mdToast: any) {

            super($scope, $mdToast);
            this.$scope = $scope;
            // this.firstName = "Alina";
            // this.lastName = "";
            // this.rollNumber = 2;
            //  this.$scope.firstName = "alina";
            //   this.myDate = new Date();
            $scope.GetAllData = {

            }
            $scope.project = {
                description: 'NUCLEAR',
                clientEmail: '',
                clientName: '',
                projectType: '',
                hourlyRate: 800
            };

            //this.GetClientList();

            // this.DeleteClient(id);

        }

        $onInit() {
        }

        private init(): void {
        }

        DeleteClient = (id) => {



            this.dataSvc.DeleteClient(id).then((data) => {

                console.log(data);
                this.GetClientList();
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }
    }
    DeleteCtrl.$inject = ['$scope', 'StudentDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];

    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', StudentDataService.StudentDataServiceFactory]);
    app.controller('DeleteCtrl', DeleteCtrl);
}

function id(_id: any) {
    throw new Error("Function not implemented.");
}

