using CurdOperation.ViewModel;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace CurdOperation.Models
{
    public class StudentService
    {
        DemoEntities2 db = new DemoEntities2();


        public StudentService(DemoEntities2 db)
        {

        }

        public StudentService()
        {
        }

        public int AddClient(ClientViewModel model)
        {
            Client Client = new Client()
            {
                Id = model.Id,
                ClientName = model.ClientName,
                ProjectType = model.ProjectType,
                Description = model.Description,
                ClientEmail = model.ClientEmail,
                HourlyRate = model.HourlyRate,
            };

            db.Clients.Add(Client);

            return db.SaveChanges();
        }
        public int InsertClient(ClientViewModel model)
        {
            Client Client = new Client()
            {
                Id = model.Id,
                ClientName = model.ClientName,
                ProjectType = model.ProjectType,
                Description = model.Description,
                ClientEmail = model.ClientEmail,
                HourlyRate = model.HourlyRate,
            };

            db.Clients.Add(Client);

            return db.SaveChanges();
        }
        
        public int GetClientById(ClientViewModel model)
        {
            Client Client = new Client()
            {
                Id = model.Id,
                ClientName = model.ClientName,
                ProjectType = model.ProjectType,
                Description = model.Description,
                ClientEmail = model.ClientEmail,
                HourlyRate = model.HourlyRate,
            };

            db.Clients.Add(Client);

            return db.SaveChanges();
        }
        public int UpdateClient(ClientViewModel model)
        {
            var client = db.Clients.Where(s => s.Id == model.Id).FirstOrDefault();
            if (client != null)
            {
                client.Id = model.Id;
                client.ClientName = model.ClientName;
                client.ClientEmail = model.ClientEmail;
                client.Description = model.Description;
                client.ProjectType = model.ProjectType;
                client.HourlyRate = model.HourlyRate;

                db.Entry<Client>(client).State = System.Data.Entity.EntityState.Modified;
                return db.SaveChanges();
            }
            else
            {
                return -1;
            }
        }

        public List<ClientViewModel> GetClientList()
        {
            var client = db.Clients.ToList();
            List<ClientViewModel> vm = new List<ClientViewModel>();
            foreach (var clients in client)
            {
                ClientViewModel studentview = new ClientViewModel()
                {
                    ClientEmail = clients.ClientEmail,
                    ClientName = clients.ClientName,
                    Description = clients.Description,
                    ProjectType = clients.ProjectType,
                    HourlyRate = clients.HourlyRate,
                    Id = clients.Id
                };
                vm.Add(studentview);
            }
            return vm;

        }
        public ClientViewModel GetClientList(int id)

        {
            var client = db.Clients.Where(s => s.Id == id).FirstOrDefault();
            if (client != null)
            {
                ClientViewModel studentview = new ClientViewModel()
                {
                    ClientEmail = client.ClientEmail,
                    ClientName = client.ClientName,
                    Description = client.Description,
                    ProjectType = client.ProjectType,
                    HourlyRate = client.HourlyRate,
                    Id = client.Id
                };
                return studentview;
            }
            else
            {
                return null;
            }
        }

        public int DeleteClient(int id)
        {
            var client = db.Clients.Where(s => s.Id == id).FirstOrDefault();
            if (client != null)
            {
                db.Clients.Remove(client);
                return db.SaveChanges();
            }
            else
            {
                return 0;
            }
        }




    }
}



