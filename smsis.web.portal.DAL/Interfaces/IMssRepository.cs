using smsis.web.portal.DAL.Entityes;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace smsis.web.portal.DAL.Interfaces
{
    public interface IMssRepository
    {
        List<MssEntity> GetAllData();

        List<MssEntity> FindByColumns(string findString, string[] columns, string table);

        List<MssEntity> FindByColumns(string findString);

        Task<bool> UpdateById(int id, MssEntity data);

        Task<bool> AddNewDataAsync(MssEntity data);

        int GetLastId();
    }
}
