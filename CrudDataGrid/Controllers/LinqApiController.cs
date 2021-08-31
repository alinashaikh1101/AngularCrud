﻿using CrudDataGrid.Service;
using CrudDataGrid.ViewModel;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CrudDataGrid.Controllers
{
    public class LinqApiController : Controller
    {
        LinqService service = new LinqService();
        // GET: LinqApi
       
        [HttpGet]
        public JsonResult filter()
        {
            var result = service.filter();
            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}