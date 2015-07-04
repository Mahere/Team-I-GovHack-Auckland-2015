using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection.Emit;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;

namespace StatsGovHack.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        
        public JsonResult GetPopulationBySuburb(string suburb, string year)
        {
            if (HttpContext != null)
            {
                string fileName = Path.Combine(HttpContext.Request.PhysicalApplicationPath, "vw_popproj.json");

                using (var r = new StreamReader(fileName))
                {
                    string json = r.ReadToEnd();
                    var items = JsonConvert.DeserializeObject<List<Item>>(json);
                    var res = items.FirstOrDefault(i => (suburb.Equals(i.suburb, StringComparison.OrdinalIgnoreCase) &&
                                                         year.Equals(i.year, StringComparison.OrdinalIgnoreCase)));
                    if (res != null)
                    {
                        return Json(res.value, JsonRequestBehavior.AllowGet);
                    }
                }
            }

            return Json("0", JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetCrimeBySuburbAndYear(string suburb, string year)
        {
            if (HttpContext != null)
            {
                string fileName = Path.Combine(HttpContext.Request.PhysicalApplicationPath, "vw_crime.json");

                using (var r = new StreamReader(fileName))
                {
                    string json = r.ReadToEnd();
                    var items = JsonConvert.DeserializeObject<List<Item>>(json);
                    var res = items.FirstOrDefault(i => (suburb.Equals(i.suburb, StringComparison.OrdinalIgnoreCase) &&
                                                         year.Equals(i.year, StringComparison.OrdinalIgnoreCase)));
                    if (res != null)
                    {
                        return Json(res.value, JsonRequestBehavior.AllowGet);
                    }
                }
            }

            return Json("0", JsonRequestBehavior.AllowGet);
        }

    }

    public class Item
    {
        public string year { get; set; }
        public string suburb { get; set; }
        public string value { get; set; }
    }
}