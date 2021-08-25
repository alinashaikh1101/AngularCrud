/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />

module CurdOperationExtension {

    import ajaxApi = Workpulse.Site.AjaxApi;


    export class StudentDataService {
        getInfoByid(id: any): ng.IPromise<IStudentModel> {
            var self = this;
            var deferred = self.qService.defer<IStudentModel>();
            var apiUrl = "https://localhost:44301/StudentApi/ViewClientById/" + id;
            ajaxApi({
                type: 'POST',
                contentType: -'application/json',
                url: apiUrl,
                success: (response: IStudentModel) => {
                    deferred.resolve(response);
                },
                error: (xhr) => {
                    console.log(xhr)
                    Workpulse.Site.AlertJS(xhr)
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        }

        constructor(private httpService: ng.IHttpService, private qService: ng.IQService) {
        }



        postSkill(pathway: IStudentModel): ng.IPromise<IStudentModel> {
            var self = this;
            var deferred = self.qService.defer<IStudentModel>();
            var apiUrl = "https://localhost:44301/StudentApi/InsertClient";
            ajaxApi({
                url: apiUrl,
                data: JSON.stringify(pathway),
                type: 'POST',
                contentType: 'application/json',
                success: (response: IStudentModel) => {
                    deferred.resolve(response);
                },
                error: (xhr) => {
                    console.log(xhr)
                    Workpulse.Site.AlertJS(xhr)
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        }

        getPathwayDetail(): ng.IPromise<IStudentModel[]> {
            var self = this;
            var deferred = self.qService.defer<IStudentModel[]>();
            var apiUrl = "https://localhost:44301/studentApi/getClientList";
            ajaxApi({
                type: 'GET',
                url: apiUrl,
                success: (response: IStudentModel[]) => {
                    deferred.resolve(response);
                },
                error: (xhr) => {
                    console.log(xhr)
                    Workpulse.Site.AlertJS(xhr)
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        }

        DeleteClient(id): ng.IPromise<IStudentModel> {
            var self = this;
            var deferred = self.qService.defer<IStudentModel>();
            var apiUrl = "https://localhost:44301/StudentApi/DeleteClient/" + id;
            ajaxApi({
                type: 'GET',
                url: apiUrl,
                success: (response: IStudentModel) => {
                    deferred.resolve(response);
                },
                error: (xhr) => {
                    console.log(xhr)
                    Workpulse.Site.AlertJS(xhr)
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        }
        UpdateClient(pathway: IStudentModel): ng.IPromise<IStudentModel> {
            var self = this;
            var deferred = self.qService.defer<IStudentModel>();
            var apiUrl = "https://localhost:44301/StudentApi/UpdateClient";
            ajaxApi({
                type: 'POST',
                data: JSON.stringify(pathway),
                contentType: -'application/json',
                url: apiUrl,
                success: (response: IStudentModel) => {
                    deferred.resolve(response);
                },
                error: (xhr) => {
                    console.log(xhr)
                    Workpulse.Site.AlertJS(xhr)
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        }


        ViewClient(Id): ng.IPromise<IStudentModel> {
            var self = this;
            var deferred = self.qService.defer<IStudentModel>();
            var apiUrl = "https://localhost:44301/StudentApi/GetClientById/" + Id;
            ajaxApi({
                type: 'GET',
                contentType: -'application/json',
                url: apiUrl,
                success: (response: IStudentModel) => {
                    deferred.resolve(response);
                },
                error: (xhr) => {
                    console.log(xhr)
                    Workpulse.Site.AlertJS(xhr)
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        }







        public static StudentDataServiceFactory($http: ng.IHttpService, $q: ng.IQService): StudentDataService {
            return new StudentDataService($http, $q);
        }

    }



}