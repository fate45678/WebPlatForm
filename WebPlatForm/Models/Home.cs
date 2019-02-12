using System;
using System.Collections.Generic;
using System.Data.Entity;
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

        public IEnumerable<ShiShiBet> selectUserBetInfo(string userName)
        {
            return from q in db.ShiShiBet
                   where q.userName == userName
                   select q;
        }


        public void updateUserBetInfo(string betid)
        {
            var fromDB = db.ShiShiBet.Find(int.Parse(betid));
            fromDB.status = 1;
            db.SaveChanges();
        }
    }
}