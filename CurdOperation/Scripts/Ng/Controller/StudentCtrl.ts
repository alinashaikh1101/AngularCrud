/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />
module CurdOperationExtension {
    export interface IPathwayScope extends ng.IScope {
        loading: boolean;
        loadingTask: boolean;
    }
    export class PathwayCtrl extends wp.angularBase.BaseCtrl implements angular.IController {
        $scope: CurdOperationExtension.IPathwayScope;
        firstName: string;
        lastName: string;
        rollNumber: number;
        myDate: any;
        constructor($scope: CurdOperationExtension.IPathwayScope, private dataSvc: StudentDataService, $timeout, $mdDialog: any, $mdSelect: any, $mdToast: any) {
            super($scope, $mdToast);
            this.$scope = $scope;
            this.firstName = "alina";
            this.lastName = "shaikh";
            this.rollNumber = 1;
            this.myDate = new Date();

            angular.module('studentApp', ['ngMaterial', 'ngMessages'])

                .controller('PathwayCtrl', function ($scope) {
                    $scope.project = {
                        description: 'Nuclear Missile Defense System',
                        rate: 500,
                        special: true

                    };
                });     
        }

        $onInit() {
        }

        private init(): void {
        }
        getStudent() {

        }


    }

    PathwayCtrl.$inject = ['$scope', 'StudentDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];

    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', StudentDataService.StudentDataServiceFactory]);
    app.controller('PathwayCtrl', PathwayCtrl);

}