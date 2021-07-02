using smsis.web.portal.DAL.Entityes;
using System;
using System.Collections.Generic;

namespace smsis.web.portal.DAL.Interfaces
{
    public interface IUsersRepository
    {
        bool Create(UserEntity user);
        bool Delete(UserEntity user);
        UserEntity FindByName(string name);
        IList<UserEntity> GetAll();
    }
}
