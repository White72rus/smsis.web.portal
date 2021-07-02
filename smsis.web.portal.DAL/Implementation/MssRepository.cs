using Microsoft.EntityFrameworkCore;
using smsis.web.portal.DAL.Entityes;
using smsis.web.portal.DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace smsis.web.portal.DAL.Implementation
{
    public class MssRepository : IMssRepository
    {
        public async Task<bool> AddNewDataAsync(MssEntity data)
        {
            using (var context = new DataBaseContext())
            {
                var r = await context.Mss.AddAsync(data);

                await context.SaveChangesAsync().ConfigureAwait(false);
            }

            return true;
        }

        public List<MssEntity> FindByColumns(string findString, string[] columns, string table)
        {
            StringBuilder @string = new StringBuilder();

            for (int i = 0; i < columns.Length; i++)
            {
                var item = columns[i];

                @string.Append($"{item} LIKE '%{findString}%' ");

                if (i + 1 < columns.Length)
                {
                    @string.Append("OR ");
                }
            }

            List<MssEntity> result;

            using (var context = new DataBaseContext())
            {
                result = context.Mss.FromSqlRaw($"SELECT * FROM {table} WHERE " + @string.ToString() + ";").ToList();
            }
            return result;
        }

        public List<MssEntity> FindByColumns(string findString)
        {
            throw new NotImplementedException();
        }

        public List<MssEntity> GetAllData()
        {
            List<MssEntity> result;

            using (var context = new DataBaseContext())
            {
                result = context.Mss.ToList();
            }
            return result;
        }

        public int GetLastId()
        {
            List<MssEntity> result;
            using (var context = new DataBaseContext())
            {
                result = context.Mss.ToList();
            }
            return result[result.Count - 1].Id;
        }

        public async Task<bool> UpdateById(int id, MssEntity data)
        {
            if (id != data?.Id)
                return false;

            using (var context = new DataBaseContext())
            {
                context.Entry(data).State = EntityState.Modified;

                try
                {
                    await context.SaveChangesAsync().ConfigureAwait(false);
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!context.Ims.Any(e => e.Id == id))
                        return false;
                }
            }
            return true;
        }
    }
}
