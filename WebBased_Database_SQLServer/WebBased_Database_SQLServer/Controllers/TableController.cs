using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebBased_Database_SQLServer.Controllers
{
    public class TableController : Controller
    {
        // GET: Table
        public ActionResult Index(String name)
        {
            ViewBag.database_name = name;
            return View();
        }
    }
}