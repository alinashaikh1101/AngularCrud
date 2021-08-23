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



        StudentService service = new StudentService();


        public ActionResult Index(StudentDto model)
        {

            return View();
        }
        //public ActionResult Edit()
        //{
            //return View();
        //}
        public ActionResult List()
        {

            return View();
        }
        public ActionResult Update()
        {

            return View();
        }
        public ActionResult DeleteClient()
        {

            return View();
        }

        public ActionResult ViewClient(int id)
        {
           ViewBag.Id = id;

           return View();
        }


        public JsonResult InsertClient(StudentDto model)
        {
            var result = service.AddClient(model);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
         public JsonResult UpdateClientById(int id)
        {
            int result = service.UpdateClient(id);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        public JsonResult GetClientList()
        {
            var result = service.GetClientList();
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        public JsonResult DeleteClientById(int id)
        {
        var result = service.DeleteClient(id);
        return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ViewClientById(int id)
        {
            var result = service.ViewClient(id);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}



