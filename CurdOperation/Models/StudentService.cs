using CurdOperation.Views.Student;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CurdOperation.Models
{
    public class StudentService
    {
        DemoEntities1 db = new DemoEntities1();


        public StudentService(DemoEntities1 db)
        {

        }
        public int AddStudent(StudentDto model)
        {
            Student Student = new Student()
            {
                Id = model.Id,
                ClientName = model.ClientName,
                Project_Type = model.Project_Type,
                Description = model.Description,
                ClientEmail = model.ClientEmail,
                Hourly_Rate = model.Hourly_Rate,
            };

            db.Students.Add(Student);

            return db.SaveChanges();
        }
    }
}
