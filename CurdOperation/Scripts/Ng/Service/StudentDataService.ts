/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />

module CurdOperationExtension {

    import ajaxApi = Workpulse.Site.AjaxApi;


    export class StudentDataService {

        constructor(private httpService: ng.IHttpService, private qService: ng.IQService) {
        }



        postSkill(pathway: IStudentModel): ng.IPromise<IStudentModel> {
            var self = this;
            var deferred = self.qService.defer<IStudentModel>();
            var apiUrl = "https://localhost:44301/Student/InsertClient";
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
            var apiUrl = "https://localhost:44301/student/GetClientList";
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
            var apiUrl = "https://localhost:44301/student/DeleteClientById/"+id;
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
        UpdateClient(id): ng.IPromise<IStudentModel> {
            var self = this;
            var deferred = self.qService.defer<IStudentModel>();
            var apiUrl = "https://localhost:44301/Student/UpdateClientById" + id;
            ajaxApi({
                type: 'POST',
                contentType:-'application/json',
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
            var apiUrl = "https://localhost:44301/Student/ViewClientById/" + Id;
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

        




        public static StudentDataServiceFactory($http: ng.IHttpService, $q: ng.IQService): StudentDataService {
            return new StudentDataService($http, $q);
        }

    }


    function StudentDataServiceFactory($http: any, IHttpService: any, $q: any, IQService: any) {
        throw new Error("Function not implemented.");
    }
}