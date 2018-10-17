using Microsoft.SqlServer.TransactSql.ScriptDom;
using System;
using System.Collections.Generic;
using System.IO;
using System.Web.Mvc;

namespace WebBased_Database_SQLServer.Controllers
{
    public class SqlQueryController : Controller
    {
        // GET: SqlQuery
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Index(String RequestSQL)
        {
            ViewBag.RequestSQL = RequestSQL;
            List<string> error = Parse(RequestSQL);
            ViewBag.error = error;
            return View(error);
        }

        public List<string> Parse(string sql)
        {
            TSql100Parser parser = new TSql100Parser(false);
            Microsoft.SqlServer.TransactSql.ScriptDom.TSqlFragment fragment;
            IList<ParseError> errors;
            fragment = parser.Parse(new StringReader(sql), out errors);
            if (errors != null && errors.Count > 0)
            {
                List<string> errorList = new List<string>();
                foreach (var error in errors)
                {
                    errorList.Add(error.Message);
                }
                return errorList;
            }
            return null;
        }
    }
}