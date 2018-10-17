using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebBased_Database_SQLServer.Controllers
{
    public class DatabasesController : Controller
    {
        // GET: Databases
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Show(String name)
        {
            ViewBag.database_name = name;
            return View();
        }

        [HttpGet]
        public ActionResult add(String name)
        {
            ViewBag.database_name = name;
            return View();
        }
        [HttpPost]
        public ActionResult add()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Edit(String name)
        {
            ViewBag.database_name = name;
            return View();
        }
        [HttpPost]
        public ActionResult Edit()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Delet(String name)
        {
            ViewBag.database_name = name;
            return View();
        }
        [HttpPost]
        public ActionResult Delet()
        {
            return View();
        }

    }
}