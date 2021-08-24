using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CurdOperation.Controllers
{
    public class StudentUpdateController : Controller
    {
        // GET: StudentUpdate
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Update(int id)
        {
            ViewBag.Id = id;

            return View();


        }

    }
}