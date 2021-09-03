using AutoMapper;
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

            Mapper.CreateMap<ClientViewModel, Faculty>()
                .ForMember(fac=>fac.FacultyName,opt => opt.MapFrom(d=>d.ClientName))
                .ForMember(fac=>fac.FacultyEmail, opt => opt.MapFrom(d=>d.ClientEmail))
                .ForMember(fac=>fac.Tos, opt => opt.MapFrom(d=>d.TermsAndService))
                .ForMember(fac=>fac.FacultyId, opt => opt.Ignore());
            
            var mapObj = Mapper.Map<ClientViewModel, Faculty>(model);

            //Faculty facultyObj = new Faculty()
            //{
            //    //ClientId = model.ClientId.Value,
            //    Description = model.Description,
            //    FacultyName = model.ClientName,
            //    FacultyEmail = model.ClientEmail,

            //    Tos = model.TermsAndService,
            //    Special = model.Special
            //};
            entities.Faculties.Add(mapObj);
            int facultyId = entities.SaveChanges();
            Employe clientObj = new Employe()
            {
                FacultyId = facultyId,
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
        public int InsertClient(FacultyViewModel model)
        {
            Faculty clientObj = new Faculty()
            {
                //ClientId = model.ClientId.Value,
                Description = model.Description,
                FacultyName = model.FacultyName,
                FacultyEmail = model.FacultyEmail,
                 Tos= model.Tos,
                Special= model.Special 
            };
            entities.Faculties.Add(clientObj);
            return entities.SaveChanges();
        }
        public List<ClientViewModel> GetClientList()
        {

            //Mapper.CreateMap<ClientViewModel, Faculty>()
               //.ForMember(fac => fac.FacultyName, opt => opt.MapFrom(d => d.ClientName));
            //List<ClientViewModel> ClientViews =Mapper.Map<List<Faculty>, List<ClientViewModel>>(model);




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
                    Special = client!= null && client.Special
                };
                vm.Add(clientView);
            }
            return vm;
        }


        public ClientViewModel GetClientById(int id)
        {
            var client = entities.Employes.Where(s => s.ClientId == id).FirstOrDefault();
            if (client != null)
            {
                ClientViewModel clientView = new ClientViewModel()
                {
                    ClientId = client.ClientId,
                    Description = client.Description,
                    ClientName = client.ClientName,
                    HourlyRate = client.HourlyRate,
                    ClientEmail = client.ClientEmail,
                    ProjectType = client.ProjectType,
                    //TermsAndService = client.TermsAndService,
                    Special = client != null && client.Special
                };
                return clientView;
            }
            else
            {
                return null;
            }
        }
        public int UpdateClient(ClientViewModel model)
        {
            var client = entities.Employes.Where(s => s.ClientId == model.ClientId).FirstOrDefault();
            if (client != null)
            {
                client.ClientId = model.ClientId.Value;
                client.Description = model.Description;
                client.ClientName = model.ClientName;
                client.ProjectType = model.ProjectType;
                client.ClientEmail = model.ClientEmail;
                client.HourlyRate = model.HourlyRate;
                //client.TermsAndService = model.TermsAndService;
                

                entities.Entry<Employe>(client).State = System.Data.Entity.EntityState.Modified;
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