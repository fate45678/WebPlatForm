using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebPlatForm.Models
{
    public class Home
    {
        hyEntities db = new hyEntities();

        public void insertBetInfo(ShiShiBet model)
        {
            db.ShiShiBet.Add(model);
            db.SaveChanges();
        }
    }
}