using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebBased_Database_SQLServer.Startup))]

namespace WebBased_Database_SQLServer
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}