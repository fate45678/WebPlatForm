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

        public ActionResult urgentFreeze()
        {
            return PartialView();
        }
        public ActionResult agreePage()
        {
            return PartialView();
        }

        public ActionResult NewUser()
        {
            return PartialView();
        }

        public ActionResult LoginCheck(string Account, string Password)
        {
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

        public ActionResult Logout()
        {
            try
            {
                FormsAuthentication.SignOut();

                //清除session
                Session.RemoveAll();

                //建立同名Cookie覆蓋原本Cookie
                HttpCookie cookie1 = new HttpCookie(FormsAuthentication.FormsCookieName, "");
                cookie1.Expires = DateTime.Now.AddYears(-1);
                Response.Cookies.Add(cookie1);

                //建立 ASP.NET Session Cookie
                HttpCookie cookie2 = new HttpCookie("ASP.NET_SessionId", "");
                cookie2.Expires = DateTime.Now.AddYears(-1);
                Response.Cookies.Add(cookie2);

                var identity = HttpContext.User.Identity as FormsIdentity;

                //KWLogger.LogEvent(identity.Ticket.Name, KWLogger.actionType.logout, "");
                return Json(new { Success = true }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string error = ex.ToString();
                return Json(new { Success = false, error }, JsonRequestBehavior.AllowGet);
            }   
        }

        public ActionResult Register(string Account, string Password)
        {
            var model = new User();
            model.username = Account.Trim();
            model.password = Password.Trim();
            model.regTime = DateTime.Now;
            model.balance = 0;
            model.grade = 1;

            var rep = new login();
            bool isScuess = rep.insertUserinfo(model);
            return Json(new { Success = isScuess }, JsonRequestBehavior.AllowGet);
        }
    }
}