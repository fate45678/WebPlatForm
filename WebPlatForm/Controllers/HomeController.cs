using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using WebPlatForm.Models;

namespace WebPlatForm.Controllers
{
    public class HomeController : Controller
    {
        [Authorize]
        public ActionResult Index()
        {
            return PartialView();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult GetApiNextIssue()
        {
            //string CloseTime = ""; //頭獎倒數
            //string SerialNumber = ""; //期號
            string info = "";
            //JArray ja = new JArray();
            try
            {
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create("http://hyqa.azurewebsites.net/Bet/GetCurrentIssueByGameName?name=TENCENTFFC");
                request.Method = WebRequestMethods.Http.Get;
                request.ContentType = "application/json";

                using (var response = (HttpWebResponse)request.GetResponse())
                {
                    if (response.StatusCode == HttpStatusCode.OK)
                    {
                        using (var stream = response.GetResponseStream())
                        using (var reader = new StreamReader(stream))
                        {
                            info = reader.ReadToEnd();
                            //ja = (JArray)JsonConvert.DeserializeObject(temp);
                            //處理最近開獎號碼
                            //CloseTime = ja[0]["CloseTime"].ToString(); //頭獎倒數
                            //SerialNumber = ja[0]["SerialNumber"].ToString(); //期號
                        }
                    }
                    else
                    { }
                }
            }
            catch (Exception ex)
            {
                info = ex.ToString();
            }
            return Json(new { data = info }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult betInsert(string betJsonString)
        {
            try
            {
                JArray betJa = (JArray)JsonConvert.DeserializeObject(betJsonString);
                //var iii = betJa[1]["betid"];
                var model = new ShiShiBet();
                var rep = new Home();
                foreach (var item in betJa)
                {
                    //model.betId = int.Parse(item["betid"].ToString());
                    model.userName = item["Name"].ToString();
                    model.amount = decimal.Parse(item["amount"].ToString());
                    model.betUnit = decimal.Parse(item["betUnit"].ToString());
                    model.betNumber = item["betNumber"].ToString();
                    model.playType = 0; //int.Parse(item["playType"].ToString());
                    model.lotteryType = 0;//int.Parse(item["lotteryType"].ToString());
                    model.betTime = DateTime.Now;
                    model.betIssue = decimal.Parse(item["betIssue"].ToString());
                    model.serialNumber = null;//item["serialNumber"].ToString();
                    model.status = int.Parse(item["status"].ToString());
                    model.prize = decimal.Parse(item["prize"].ToString());
                    model.position = item["position"].ToString();
                    model.returnRate = int.Parse(item["returnRate"].ToString());
                    rep.insertBetInfo(model);
                }

                var result = rep.selectUserBetInfo(betJa[0]["Name"].ToString()).ToList();
                return Json(new { data = result }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { data = ex.ToString() }, JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult selectBetInfo(string user)
        {
            try
            {
                var rep = new Home();
                var result = rep.selectUserBetInfo(user).ToList();
                return Json(new { data = result }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { data = ex.ToString() }, JsonRequestBehavior.AllowGet);
            }
        }
        public void betCancelUpdate(string betid)
        {
            try
            {
                var rep = new Home();
                rep.updateUserBetInfo(betid);

                //return Json(new { data = result }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                var iii = ex.ToString();
                //return Json(new { data = ex.ToString() }, JsonRequestBehavior.AllowGet);
            }
        }       
    }
}