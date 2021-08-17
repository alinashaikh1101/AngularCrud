using CurdOperation.Models;
using CurdOperation.Views.Student;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CurdOperation.Controllers
{
    public class StudentController : Controller
    {
        // GET: Student

        DemoEntities1 db =  new DemoEntities1();

        public object dbContext { get; private set; }

        public ActionResult Index()
        {
          var Student = db.Students.Select(std => new StudentDto { Id = std.Id, ClientName = std.ClientName, Project_Type = std.Project_Type, Description = std.Description, ClientEmail = std.ClientEmail, Hourly_Rate = std.Hourly_Rate }).ToList();

        return View(Student);
        }
            
        

        
    }
}

