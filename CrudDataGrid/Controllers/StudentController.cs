using CrudDataGrid.Service;
using CrudDataGrid.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CrudDataGrid.Controllers
{
    public class StudentController : Controller
    {
        // GET: Student

        public ActionResult Index()
        {

            return View();
        }
        public ActionResult Update(int? ClientId=null)
        {
            ViewBag.Id = ClientId;
            return View();
        }

        public ActionResult DataGridView()
        {
            return View();
        }
        public ActionResult DataList()
        {
            return View();

       }
        



    }

}