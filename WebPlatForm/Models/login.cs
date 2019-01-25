using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebPlatForm.Models
{
    public class login
    {
        hyEntities db = new hyEntities();

        public IEnumerable<User> selectUserInfo(string Account, string Password)
        {
            return from q in db.User
                    where q.username == Account && q.password == Password
                    select q;
            
        }

        public bool insertUserinfo(User model)
        {
            try
            {               
                db.User.Add(model);
                db.SaveChanges();
                return true;              
            }
            catch (Exception ex)
            {
                return false;
            }          
        }
    }
}