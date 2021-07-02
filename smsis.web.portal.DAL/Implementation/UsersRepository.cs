using smsis.web.portal.DAL.Entityes;
using smsis.web.portal.DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace smsis.web.portal.DAL.Implementation
{
    public class UsersRepository : IUsersRepository
    {
        public bool Create(UserEntity user)
        {
            if (IsUserExixst(user.Name))
                return false;

            using (var context = new DataBaseContext())
            {
                context.Users.Add(user);
                context.SaveChanges();
            }
            return IsUserExixst(user.Name);
        }

        public bool Delete(UserEntity user)
        {
            if (!IsUserExixst(user.Name))
                return false;

            using (var context = new DataBaseContext())
            {
                context.Users.Remove(user);
                context.SaveChanges();
            }
            return !IsUserExixst(user.Name);
        }

        public UserEntity FindByName(string name)
        {
            List<UserEntity> list;
            using (var context = new DataBaseContext())
            {
                list = context.Users.Where(x => x.Name == name).ToList();
            }
            if (list.Count > 0)
                return list[0];
            return null;
        }

        public IList<UserEntity> GetAll()
        {
            using (var context = new DataBaseContext())
            {
                return context.Users.ToList();
            }
        }

        /// <summary>
        /// Существует ли юзер.
        /// </summary>
        /// <param name="userName"></param>
        /// <returns>True если да и False если нет.</returns>
        private bool IsUserExixst(string userName)
        {
            UserEntity user = FindByName(userName);
            if (user != null)
                return true;
            return false;
        }
    }
}
