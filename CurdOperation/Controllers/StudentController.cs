using CurdOperation.Models;
using CurdOperation.ViewModel;
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



        StudentService service = new StudentService();


        public ActionResult Index()
        {

            return View();
        }
        public ActionResult Edit(int ClientId)
        {
            ViewBag.Id = ClientId;
            return View();
        }
        
        
        public ActionResult Delete(int Id)
        {
          return View();
        }
        
        public ActionResult List()
        {
           return View();
        }

        public ActionResult ViewClient(int ClientId)
        {
            ViewBag.Id = ClientId;
            return View();
        }
        public ActionResult Update(int ClientId)
        {
            ViewBag.Id = ClientId;
            return View();
        }

        public ActionResult UpdateClient(int ClientId)
        {
            ViewBag.Id = ClientId;
            return View();
        }
        public ActionResult DeleteClient(int Id)
        {
            
            return View();
        }


    }
}



