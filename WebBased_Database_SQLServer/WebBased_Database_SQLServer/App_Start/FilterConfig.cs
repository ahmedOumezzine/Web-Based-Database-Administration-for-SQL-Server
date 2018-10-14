using System.Web;
using System.Web.Mvc;

namespace WebBased_Database_SQLServer
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
