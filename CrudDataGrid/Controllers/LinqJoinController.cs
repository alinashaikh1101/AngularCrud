using CrudDataGrid.Models;
using CrudDataGrid.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CrudDataGrid.Controllers
{
    public class LinqJoinController : Controller
    {
        // GET: LinqJoin
        public ActionResult Index()
        {
            DemoEntities entities = new DemoEntities();
            {
                List<Employe> employees = entities.Employes.ToList();
                List<Faculty> departments = entities.Faculties.ToList();

                var employeeRecord = from emp in employees
                                     join dept in departments on emp.faculty equals dept.FacultyId into table1
                                     from dept in table1.ToList()
                                     
                                     select new ClientViewModel
                                     {
                                         employees = emp,
                                         
                                         
                                     };
            }
            return View();
        }
    }
}