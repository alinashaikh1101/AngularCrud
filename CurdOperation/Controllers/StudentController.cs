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
            
        public Action result Index()
        {

            var client = new Studentview.StudentDto
            {
                Id = "1",
                ClientName = "alina",
                ClientEmail = "alina@gmail.com",
                Description = "workpulse",
                HourlyRate = "800",
                ProjecType = "Application"
            };
            service.AddClient(client);
            service.UpdateClient(new StudentDto
             {
                Id = 2,
                ClientName = "sumit",
                ClientEmail = "sumit@gmail.com",
                Description = "workpulse",
                HourlyRate = 900,
                ProjecType = "project"
             });
            var clientList = service.GetClientList();
            var StudentDto = service.GetClientList(2);
            return View();
        }

        [HttpPost]
        public JsonResult PostClient(StudentDto model)
        {
            var result = service.AddClient(model);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult UpdateClient(StudentDto model)
        {
            var result = service.UpdateClient(model);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult GetAllClient()
        {
            var result = service.GetClientList();
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]

        public JsonResult GetClientList(int ClientId)
        {
            var result = service.GetClientList(ClientId);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        [HttpDelete]
        public JsonResult DeleteClient(int ClientId)
        {
            var result = service.DeleteClient(ClientId);
            return Json(result, JsonRequestBehavior.AllowGet);
        }



    }
}

