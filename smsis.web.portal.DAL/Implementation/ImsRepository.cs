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
    public class ImsRepository : IImsRepository
    {
        public async Task<bool> AddNewDataAsync(ImsEntity data)
        {
            using (var context = new DataBaseContext())
            {
                var r = await context.Ims.AddAsync(data);

                await context.SaveChangesAsync().ConfigureAwait(false);
                
            }

            return true;
        }

        public List<ImsEntity> FindByColumns(string findString, string[] columns, string table)
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

            List<ImsEntity> result;

            using (var context = new DataBaseContext())
            {
                result = context.Ims.FromSqlRaw($"SELECT * FROM {table} WHERE " + @string.ToString() + ";").ToList();
            }
            return result;
        }

        public List<ImsEntity> FindByColumns(string findString)
        {
            List<ImsEntity> result;

            using (var context = new DataBaseContext())
            {
                result = context.Ims.Where(o => 
                EF.Functions.Like(o.Region, $"%{findString}%") || 
                EF.Functions.Like(o.District, $"%{findString}%") ||
                EF.Functions.Like(o.City, $"%{findString}%") ||
                EF.Functions.Like(o.Addres, $"%{findString}%") ||
                EF.Functions.Like(o.NumbersRange, $"%{findString}%") ||
                EF.Functions.Like(o.Uss, $"%{findString}%") ||
                EF.Functions.Like(o.Capacity, $"%{findString}%") ||
                EF.Functions.Like(o.UseCapacity, $"%{findString}%") ||
                EF.Functions.Like(o.Technology, $"%{findString}%") ||
                EF.Functions.Like(o.Protocol, $"%{findString}%") ||
                EF.Functions.Like(o.CpeType, $"%{findString}%") ||
                EF.Functions.Like(o.ObjType, $"%{findString}%") ||
                EF.Functions.Like(o.Hostname, $"%{findString}%") ||
                EF.Functions.Like(o.IpVoice, $"%{findString}%") ||
                EF.Functions.Like(o.IpControl, $"%{findString}%")
                ).ToList(); 
            }
            return result;
        }

        public List<ImsEntity> GetAllData()
        {
            List<ImsEntity> result;

            using (var context = new DataBaseContext())
            {
                result = context.Ims.ToList();
            }
            return result;
        }

        public int GetLastId()
        {
            //int result = 0;
            List<ImsEntity> result;
            using (var context = new DataBaseContext())
            {
                result = context.Ims.ToList();
            }
            return result[result.Count - 1].Id;
        }

        public async Task<bool> UpdateById(int id, ImsEntity data)
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
