using CrudDataGrid.Models;
using CrudDataGrid.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace CrudDataGrid.Service
{
    public class ClientService
    {
        DemoEntities entities = new DemoEntities();

        public int InsertClient(ClientViewModel model)
        {
            Employe clientObj = new Employe()
            {
                ClientId = model.ClientId,
                Description = model.Description,
                ClientName = model.ClientName,
                ProjectType = model.ProjectType,
                ClientEmail = model.ClientEmail,
                HourlyRate = model.HourlyRate,
                Tos = model.TermsAndService,
                Special = model.Special
            };
            entities.Employes.Add(clientObj);
            return entities.SaveChanges();
        }
        public List<ClientViewModel> GetClientList()
        {
            //var clientRecord = entities.Clients.ToList();
            var clientRecord = entities.Employes.OrderByDescending(s => s.ClientId);
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
                     
                    Special = client.Special != null && client.Special
                };
                vm.Add(clientView);
            }
            return vm;
        }


        public ClientViewModel GetClientById(int id)
        {
            var clientRecord = entities.Employes.Where(s => s.ClientId == id).FirstOrDefault();
            if (clientRecord != null)
            {
                ClientViewModel clientView = new ClientViewModel()
                {
                    ClientId = clientRecord.ClientId,
                    Description = clientRecord.Description,
                    ClientName = clientRecord.ClientName,
                    HourlyRate = clientRecord.HourlyRate,
                    ClientEmail = clientRecord.ClientEmail,
                    ProjectType = clientRecord.ProjectType,
                    //TermsAndService = clientRecord.TermsAndService,
                    special = clientRecord.Special != null && clientRecord.Special
                };
                return clientView;
            }
            else
            {
                return null;
            }
        }
        public int UpdateClient(ClientViewModel data)
        {
            var clientRecord = entities.Employes.Where(s => s.ClientId == data.ClientId).FirstOrDefault();
            if (clientRecord != null)
            {
                clientRecord.ClientId = data.ClientId;
                clientRecord.Description = data.Description;
                clientRecord.ClientName = data.ClientName;
                clientRecord.ProjectType = data.ProjectType;
                clientRecord.ClientEmail = data.ClientEmail;
                clientRecord.HourlyRate = data.HourlyRate;
                //clientRecord.TermsAndService = data.TermsAndService;
                //clientRecord.special = data.special != null && data.special.Value;

                entities.Entry<Employe>(clientRecord).State = System.Data.Entity.EntityState.Modified;
                return entities.SaveChanges();
            }
            else
            {
                return -1;
            }
        }
        public int DeleteClient(int ClientId)
        {
            var data = entities.Employes.Where(s => s.ClientId == ClientId).FirstOrDefault();
            if (data != null)
            {
                entities.Employes.Remove(data);
                return entities.SaveChanges();
            }
            else
            {
                return 0;
            }
        }


    }
}