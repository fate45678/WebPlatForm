using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;

namespace WebPlatForm.Helper
{
    public class WebSiteHelper
    {
        public static string userDataInfo
        {
            get
            {
                var httpContext = HttpContext.Current;
                var identity = httpContext.User.Identity as FormsIdentity;

                if (identity == null)
                {
                    return string.Empty;
                }
                else
                {
                    var userData = identity.Ticket.UserData;
                    return userData;
                }
            }
        }

        public static List<string> RoleFunction
        {
            get
            {
                var httpContext = HttpContext.Current;
                var roleList = new List<string>();
                if (httpContext.Session["RoleFunction"] != null)
                {
                    var roles = httpContext.Session["RoleFunction"].ToString().Split(',');
                    roleList = roles.ToList();
                }
                return roleList;
            }
        }
    }
}