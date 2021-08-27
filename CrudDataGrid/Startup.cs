using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CrudDataGrid.Startup))]
namespace CrudDataGrid
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
