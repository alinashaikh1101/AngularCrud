using CrudDataGrid.Service;
using CrudDataGrid.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CrudDataGrid.Controllers
{
    public class StudentApiController : Controller
    {
        ClientService service = new ClientService();
        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public JsonResult InsertClient(ClientViewModel model)
        {
            var result = service.InsertClient(model);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult GetClientById(int id)
        {
            var result = service.GetClientById(id);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult GetClientList()
        {
            var result = service.GetClientList();
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult UpdateClient(ClientViewModel model)
        {
            var result = service.UpdateClient(model);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        public JsonResult DeleteClient(int ClientId)
        {
            var result = service.DeleteClient(ClientId);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}