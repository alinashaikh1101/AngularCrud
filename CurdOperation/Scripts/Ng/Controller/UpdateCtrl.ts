/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />
module CurdOperationExtension {
    export interface IPathwayScope extends ng.IScope {


        loading: boolean;
        loadingTask: boolean;

        Id: number;
        Description: String;
        ClientName: String;
        ClientEmail: String;
        ProjectType: String;
        HourlyRate: string;
        
        project: IStudentModel

    }
    export class UpdateCtrl extends wp.angularBase.BaseCtrl implements angular.IController {
        // firstName: String;
        // lastName: String;
        // rollNumber: Number;
        // myDate: any;
        Id: number;
        Description: String;
        ClientName: String;
        ClientEmail: String;
        ProjectType: String;
        HourlyRate: number;
                      

        $scope: CurdOperationExtension.IPathwayScope;
        private $mdDialog: any;
        studentId: number;
        constructor($scope: CurdOperationExtension.IPathwayScope, private dataSvc: StudentDataService, $timeout, $mdDialog: any, $mdSelect: any, $mdToast: any) {

            super($scope, $mdToast);
            this.$scope = $scope;
            this.studentId = Number($("#hdnId").val());
            console.log(this.studentId);
            this.getStudentData();
        }

        $onInit() {
        }

        private init(): void {
        }

        getStudentData = () => {
            this.dataSvc.ViewClient(this.studentId).then((data) => {
                this.$scope.project = data;
            }).catch((error) => {

            }).finally(() => {

            })

        }
        UpdateClient = () => {
            console.log(this.$scope.project)
            this.dataSvc.UpdateClient(this.$scope.project).then((data) => {
                this.showMessage("updated sucesfully");
                console.log(data);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {



            })
        }
        
    }
    UpdateCtrl.$inject = ['$scope', 'StudentDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];

    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', StudentDataService.StudentDataServiceFactory]);
    app.controller('UpdateCtrl', UpdateCtrl);
}


