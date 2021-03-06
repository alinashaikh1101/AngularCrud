using CrudDataGrid.Models;
using CrudDataGrid.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;


namespace CrudDataGrid.Service
{
    public class LinqService
    {

        DemoEntities entities = new DemoEntities();

        //public string ProjectType { get; private set; }

        public List<ClientViewModel> filter()
        {
            var clientRecord = entities.Employes.Where(s => s.ClientName == "alina").ToList();

            List<ClientViewModel> vm = new List<ClientViewModel>();
            foreach (var client in clientRecord)
            {
                ClientViewModel clientView = new ClientViewModel()
                {
                    ClientId = client.ClientId,
                    Description = client.Description,
                    ClientName = client.ClientName,
                    ProjectType = client.ProjectType,
                    ClientEmail = client.ClientEmail,
                    HourlyRate = client.HourlyRate,
                    Special = client != null && client.Special
                };
                vm.Add(clientView);
            }
            return vm;
        }
        public List<ClientViewModel> Grouping()
        {
            //var ClientRecord = entities.Employes.Where(s => s.Description == "").ToList();
            var empGroup = from emp in entities.Employes group emp by emp.ProjectType;

            List<EmployeeViewModel> vm = new List<EmployeeViewModel>();
            foreach (var client in empGroup)
            {
                EmployeeViewModel vms = new EmployeeViewModel
                {
                    ProjectType = client.Key,
                    clientViews = new List<ClientViewModel>()
                };
                var employes = client.ToList();
                List<ClientViewModel> clientList = new List<ClientViewModel>();
                foreach (var emp in employes)
                {
                    ClientViewModel clientView = new ClientViewModel()
                    {
                        ClientId = emp.ClientId,
                        Description = emp.Description,
                        ClientName = emp.ClientName,
                        ProjectType = emp.ProjectType,
                        ClientEmail = emp.ClientEmail,
                        HourlyRate = emp.HourlyRate,
                        Special = emp != null && emp.Special
                    };
                    vms.clientViews.Add(clientView);
                }

                vm.Add(vms);
            }
            return null;
        }
        public List<FacultyViewModel> JoinData()
        {
            DemoEntities entities = new DemoEntities();
            {
                var result = entities.Faculties.GroupJoin(entities.Employes,
                     f => f.FacultyId,
                     e => e.FacultyId,
                      (Faculty, Employes) => new
                      {
                          facultys = Faculty,
                          employee = Employes
                      });
                List<FacultyViewModel> vm = new List<FacultyViewModel>();
                foreach (var Facultys in result)
                {
                    var employees = Facultys.employee.ToList();
                    List<ClientViewModel> empList = new List<ClientViewModel>();
                    foreach (var emp in employees)
                    {
                        ClientViewModel clientViews = new ClientViewModel()
                        {

                            ClientId = emp.ClientId,
                            ClientName = emp.ClientName,
                            ClientEmail = emp.ClientEmail,
                            ProjectType = emp.ProjectType,
                            HourlyRate = emp.HourlyRate,
                            Description = emp.Description,
                            Special = emp.Special
                        };
                        empList.Add(clientViews);
                    }
                    FacultyViewModel fact = new FacultyViewModel()
                    {
                        FacultyId = Facultys.facultys.FacultyId,
                        FacultyName = Facultys.facultys.FacultyName,
                        FacultyEmail = Facultys.facultys.FacultyEmail,
                        Description = Facultys.facultys.Description,
                        Tos = Facultys.facultys.Tos,
                        Special = Facultys.facultys.Special,
                        Employees = empList

                    };
                    vm.Add(fact);
                }
                return vm;
            }

        }

    }
}

