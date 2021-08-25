/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />
module CurdOperationExtension {
    export interface IPathwayScope extends ng.IScope {


        loading: boolean;
        loadingTask: boolean;

        project: IStudentModel

    }
    export class PathwayCtrl extends wp.angularBase.BaseCtrl implements angular.IController {
        studentId(studentId: any) {
            throw new Error("Method not implemented.");
        }
        // firstName: String;
        // lastName: String;
        // rollNumber: Number;
        // myDate: any;

        $scope: CurdOperationExtension.IPathwayScope;
        private $mdDialog: any;
        constructor($scope: CurdOperationExtension.IPathwayScope, private dataSvc: StudentDataService, $timeout, $mdDialog: any, $mdSelect: any, $mdToast: any) {

            super($scope, $mdToast);
            this.$scope = $scope;
            this.$mdDialog = $mdDialog;

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
                    this.GetClientList();

                }).catch((error) => {
                    console.log(error);
                }).finally(() => {

                })
            }, () => {
            });



        }
        getStudentData = () => {
            this.dataSvc.ViewClient(this.studentId).then((data) => {
                this.$scope.project = data;
            }).catch((error) => {

            }).finally(() => {

            })

        }

        UpdateClient = (id) => {
            window.location.href = "/Student/UpdateClient/" + id;
            //this.dataSvc.UpdateClient(this.$scope.project).then((data) => {
            //this.showMessage("Updated Sucesfully");
            //console.log(data);
            //}).catch((error) => {
            // console.log(error);
            //}).finally(() => {



            //})
        }


        ViewClient = (Id) => {
            window.location.href = "/Student/ViewClient/" + Id;

            this.dataSvc.ViewClient(Id).then((data) => {
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

function id_(id_: any) {
    throw new Error("Function not implemented.");
}
