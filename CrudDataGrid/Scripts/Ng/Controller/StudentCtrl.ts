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
        special: boolean;

        project: IStudentModel
    }
    export class StudentCtrl extends wp.angularBase.BaseCtrl implements angular.IController {
        Description: String;
        ClientName: String;
        ClientEmail: String;
        ProjectType: String;
        HourlyRate: number;
        TermsAndService: boolean;
        special: boolean;

        infoId: number;

        $scope: CrudDataGridExtension.IPathwayScope;
        private $mdDialog: any;
        constructor($scope: CrudDataGridExtension.IPathwayScope, private dataSvc: StudentDataService, $timeout, $mdDialog: any, $mdSelect: any, $mdToast: any) {

            super($scope, $mdToast);
            this.$scope = $scope;
            $scope.project = {
                Description: '',
                HourlyRate: 1234,
                special: true,
                TermsAndService: true,
                ClientEmail: '',
                ClientName: '',
                ProjectType: '',
            };
        }

        $onInit() {
        }

        private init(): void {
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
    }
    StudentCtrl.$inject = ['$scope', 'StudentDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];

    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', StudentDataService.StudentDataServiceFactory]);
    app.controller('StudentCtrl', StudentCtrl);
}