using CrudDataGrid.Models;
using CrudDataGrid.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CrudDataGrid.Service
{
    public class LinqService
    {
        


        DemoEntities entities = new DemoEntities();
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
    }
}
