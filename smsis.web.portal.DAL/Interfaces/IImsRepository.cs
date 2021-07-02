using smsis.web.portal.DAL.Entityes;
using System;
using System.Collections.Generic;
using System.Text;

namespace smsis.web.portal.DAL.Interfaces
{
    public interface IImsRepository : IBaseRepository<ImsEntity>
    {
        //List<ImsEntity> GetAllData();

        //List<ImsEntity> FindByColumns(string findString, string[] columns, string table);

        //List<ImsEntity> FindByColumns(string findString);
    }
}
