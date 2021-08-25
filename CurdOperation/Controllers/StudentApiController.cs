using CurdOperation.Models;
using CurdOperation.ViewModel;
using System.Web.Mvc;

namespace CurdOperation.Controllers
{
    public class StudentApiController : Controller
    {
        // GET: StudentApi

        StudentService service = new StudentService();
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
            var result = service.GetClientList(id);
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
        public JsonResult DeleteClient(int Id)
        {
            var result = service.DeleteClient(Id);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
       
    }
}
