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

        public string ProjectType { get; private set; }

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
                }
                //EmployeeViewModel employee = new EmployeeViewModel();
                //{

                //    ProjectType = client.Key;
                //    employes = clientList;

                //}
                //vm.Add(employee);
            }
            return null;
        }
        public List<ClientViewModel> joindata()
        {
            var innerJoinQuery = from employ in Employe
                                 join dist in Faculty on employ.Name equals dist.Name
                                 select new { ClientName = employ.Name, FacultyName = dist.Name };

            List<EmployeeViewModel> vm = new List<EmployeeViewModel>();
            foreach (var emp in employes)
            {

            }
        }
    }
}


