using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using WebPlatForm.Models;

namespace WebPlatForm.Controllers
{
    public class LoginController : Controller
    {
        // GET: Login
        public ActionResult Login()
        {
            return PartialView();
        }

        //凍結帳號
        public ActionResult urgentFreezeLogin()
        {
            return PartialView();
        }

        public ActionResult LoginCheck(string Account, string Password)
        {
            //var Tpgis = new TpgisRepository();
            //string DecodePassWord = Encrypt(UserPassWord);
            //string incode = Decrypt("g+6vf6FEzITr01oh1NaBXQ==");
            var rep = new login();
            var UserInfo = rep.selectUserInfo(Account, Password).ToList();
            if (UserInfo.Count == 0)
                return Json(new { Success = false }, JsonRequestBehavior.AllowGet);
            else
            {
                Session["UserAccount"] = UserInfo[0].username;

                var ticket = new FormsAuthenticationTicket(
                version: 1,
                name: UserInfo[0].username,
                issueDate: DateTime.Now,
                expiration: DateTime.Now.AddMinutes(60),
                isPersistent: false,
                userData: UserInfo[0].username + "," + UserInfo[0].balance,
                cookiePath: FormsAuthentication.FormsCookiePath);

                var encryptedTicket = FormsAuthentication.Encrypt(ticket);
                var cookie = new HttpCookie(FormsAuthentication.FormsCookieName, encryptedTicket);
                cookie.HttpOnly = true;
                Response.Cookies.Add(cookie);

                return Json(new { Success = ticket, UserInfo }, JsonRequestBehavior.AllowGet);
            }
        }
    }
}