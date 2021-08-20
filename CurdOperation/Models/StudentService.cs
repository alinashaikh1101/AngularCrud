using CurdOperation.Views.Student;
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
        
        public int AddClient(StudentDto model)
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
        public int UpdateClient(StudentDto model)
        {
            var client = db.Clients.Where(s => s.Id == model.Id).FirstOrDefault();
            if(client != null)
            {
                client.ClientName = model.ClientName;
                client.ProjectType = model.ProjectType;
                client.Description = model.Description;
                client.ClientEmail = model.ClientEmail;
                client.HourlyRate = model.HourlyRate;

                db.Entry(client).State = System.Data.Entity.EntityState.Modified;
                return db.SaveChanges();
            }
            else
            {
                return 1;
            }
        }

       
        public List<StudentDto> GetClientList()
        {
            var client = db.Clients.ToList();
            List<StudentDto> vm = new List<StudentDto>();
            foreach (var clients in client)
            {
                StudentDto studentview = new StudentDto()
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
        public StudentDto GetClientList(int id)

        {
            var client = db.Clients.Where(s => s.Id == id).FirstOrDefault();
            if (client != null)
            {
                StudentDto studentview = new StudentDto()
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
            if (client == null)
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

