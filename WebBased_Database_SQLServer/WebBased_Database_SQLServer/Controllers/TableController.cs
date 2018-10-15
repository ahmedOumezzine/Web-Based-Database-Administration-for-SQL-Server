using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
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

        public ActionResult show(String name,String tablename)
        {
            ViewBag.database_name = name;
            ViewBag.tablename = tablename;
            DataSet ds = new DataSet();
            string constr = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
            using (SqlConnection con = new SqlConnection(constr))
            {
                string query = "SELECT * FROM [" + name+ "].[dbo].[" + tablename+ "];";
                using (SqlCommand cmd = new SqlCommand(query))
                {
                    cmd.Connection = con;
                    using (SqlDataAdapter sda = new SqlDataAdapter(cmd))
                    {
                        sda.Fill(ds);
                    }
                }
            }

            return View(ds);
        }
    }
}