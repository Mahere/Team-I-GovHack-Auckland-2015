using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection.Emit;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;

namespace StatsGovHack.Controllers
{
    public class HomeController : Controller
    {

        private string[] fileNames = new[] { "aucklandcentralarea.json", "aucklandeastarea.json", "aucklandnortharea.json", "aucklandsoutharea.json", "aucklandwestarea.json" };
        private const string DataFolder = "data";

        public ActionResult Index()
        {
            return View();
        }
        
        public JsonResult GetPopulationBySuburb(string suburb, string year)
        {
            if (HttpContext != null)
            {
                string fileName = Path.Combine(HttpContext.Request.PhysicalApplicationPath, DataFolder, "vw_popprojrev.json");
                string fileName2 = Path.Combine(HttpContext.Request.PhysicalApplicationPath, DataFolder, "vw_pastpoprev.json");

                using (var r = new StreamReader(fileName))
                using(var r2 = new StreamReader(fileName2))
                {
                    var items = JsonConvert.DeserializeObject<List<Item>>(r.ReadToEnd());
                    var items2 = JsonConvert.DeserializeObject<List<Item>>(r2.ReadToEnd());
                    
                    items.AddRange(items2);
                    
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

        public JsonResult GetAllPopulationBySuburb(string suburb)
        {
            if (HttpContext != null)
            {
                string fileName = Path.Combine(HttpContext.Request.PhysicalApplicationPath, DataFolder, "vw_popprojrev.json");

                using (var r = new StreamReader(fileName))
                {
                    string json = r.ReadToEnd();
                    var items = JsonConvert.DeserializeObject<List<Item>>(json);
                    var filteredList = items.FindAll(x => x.suburb == suburb);
                    if (filteredList != null)
                    {
                        return Json(filteredList, JsonRequestBehavior.AllowGet);
                    }
                }
            }
            return Json("0", JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetCrimeBySuburbAndYear(string suburb, string year)
        {
            if (HttpContext != null)
            {
                string fileName = Path.Combine(HttpContext.Request.PhysicalApplicationPath, DataFolder, "vw_crime.json");

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

        public JsonResult GetCrimeDataBySuburb(string suburb)
        {
            if (HttpContext != null)
            {
                string fileName = Path.Combine(HttpContext.Request.PhysicalApplicationPath, DataFolder, "vw_crime.json");
                using (var r = new StreamReader(fileName))
                {
                    string json = r.ReadToEnd();
                    var items = JsonConvert.DeserializeObject<List<Item>>(json);

                    var filteredItems = items.FindAll(x => x.suburb == suburb);

                    if (filteredItems != null)
                    {
                        return Json(filteredItems, JsonRequestBehavior.AllowGet);
                    }
                }
            }
            return Json("0", JsonRequestBehavior.AllowGet); 
        }

    

    
    public JsonResult GetSchoolDecileDataBySuburb(string suburb)
        {
            if (HttpContext != null)
            {
                string fileName = Path.Combine(HttpContext.Request.PhysicalApplicationPath, DataFolder, "vw_deciles2014primary.json");
                using (var r = new StreamReader(fileName))
                {
                    string json = r.ReadToEnd();
                    var items = JsonConvert.DeserializeObject<List<Item>>(json);

                    var filteredItems = items.FindAll(x => x.suburb == suburb);

                    if (filteredItems != null)
                    {
                        return Json(filteredItems, JsonRequestBehavior.AllowGet);
                    }
                }
            }
            return Json("0", JsonRequestBehavior.AllowGet); 
        }

    public JsonResult GethousePriceDataBySuburb(string suburb)
    {
        if (HttpContext != null)
        {
            string fileName = Path.Combine(HttpContext.Request.PhysicalApplicationPath, DataFolder, "houseprice.json");
            using (var r = new StreamReader(fileName))
            {
                string json = r.ReadToEnd();
                var items = JsonConvert.DeserializeObject<List<BaseModel>>(json);

                var filteredItems = items.FindAll(x => x.suburb == suburb).OrderBy(x => x.year);

                if (filteredItems != null)
                {
                    return Json(filteredItems, JsonRequestBehavior.AllowGet);
                }
            }
        }
        return Json("0", JsonRequestBehavior.AllowGet);
    }

        public JsonResult GetSuburbCoordinates(string suburb)
        {
            foreach (var name in fileNames)
            {
                var f = new FileInfo(Path.Combine(HttpContext.Request.PhysicalApplicationPath, DataFolder, name));
                using (var r = new StreamReader(f.FullName))
                {
                    var suburbs = JsonConvert.DeserializeObject<List<SuburbItem>>(r.ReadToEnd());
                    var res = suburbs.FirstOrDefault(i => (suburb.Equals(i.suburb, StringComparison.OrdinalIgnoreCase)));
                    if (res != null)
                    {
                        return Json(new { area = f.Name.Substring(0, f.Name.LastIndexOf('.')), res.suburb, res.latitude, res.longitude }, JsonRequestBehavior.AllowGet);
                    }
                }
            }
            return Json(null, JsonRequestBehavior.AllowGet); 
        }

        public JsonResult GetAllSuburbs()
        {
            var ret = new List<SuburbItem>();
            
            foreach (var name in fileNames)
            {
                var f = new FileInfo(Path.Combine(HttpContext.Request.PhysicalApplicationPath, DataFolder, name));
                using (var r = new StreamReader(f.FullName))
                {
                    var suburbs = JsonConvert.DeserializeObject<List<SuburbItem>>(r.ReadToEnd());
                    suburbs.ForEach(s => s.area = f.Name.Substring(0, f.Name.LastIndexOf('.')));
                    ret.AddRange(suburbs);
                }
            }

            return Json(ret, JsonRequestBehavior.AllowGet);
    }



    }


    public class Item
    {
        public string year { get; set; }
        public string suburb { get; set; }
        public string value { get; set; }
    }

    public class BaseModel
    {
        public int year { get; set; }
        public string suburb { get; set; }
        public string value { get; set; }
    }

    public class SuburbItem
    {
        public string area { get; set; }
        public string suburb { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
    }
}