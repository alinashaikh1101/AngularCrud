/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />
module CurdOperationExtension {
    export interface IPathwayScope extends ng.IScope {


        loading: boolean;
        loadingTask: boolean;

        project: IStudentModel

    }
    export class PathwayCtrl extends wp.angularBase.BaseCtrl implements angular.IController {
        // firstName: String;
        // lastName: String;
        // rollNumber: Number;
        // myDate: any;

        $scope: CurdOperationExtension.IPathwayScope;
        private $mdDialog: any;
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
                description: '',
                clientEmail: '',
                clientName: '',
                projectType: '',
                hourlyRate: 800
            };

            this.GetClientList();

            // this.DeleteClient(id);

        }

        $onInit() {
        }

        private init(): void {
        }

        insertClient = () => {
            console.log(this.$scope.project);
            this.dataSvc.postSkill(this.$scope.project).then((data) => {
                console.log(data);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }

        studentList: IStudentModel[];
        GetClientList = () => {
            this.dataSvc.getPathwayDetail().then((data) => {
                this.studentList = data;
                console.log(data);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {



            })


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

        UpdateClient = (id) => {
            window.location.href = "/Student/Update/" + id;

            //this.dataSvc.UpdateClient(id).then((data) => {
               //console.log(data);

            //}).catch((error) => {
                //console.log(error);
            //}).finally(() => {

            //})
        }
        ViewClient = (id) => {
            window.location.href = "/Student/View/" + id;

            this.dataSvc.ViewClient(id).then((data) => {
                console.log(data);

            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }

        
    }

    PathwayCtrl.$inject = ['$scope', 'StudentDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];

    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', StudentDataService.StudentDataServiceFactory]);
    app.controller('PathwayCtrl', PathwayCtrl);
}

function id(id: any) {
    throw new Error("Function not implemented.");
}
