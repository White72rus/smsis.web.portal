using Microsoft.EntityFrameworkCore;
using smsis.web.portal.DAL.Entityes;
using System;
using System.Reflection;

namespace smsis.web.portal.DAL
{
    public class DataBaseContext : DbContext
    {
        public DbSet<ImsEntity> Ims { get; set; }
        public DbSet<MssEntity> Mss { get; set; }
        public DbSet<UserEntity> Users { get; set; }
        public DbSet<ClaimEntity> Claims { get; set; }
        public DbSet<LogEntity> Logs { get; set; }

        public DataBaseContext()
        {
            Database.EnsureCreated();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql("userid=root;Server=localhost;password=Mysql11001@@@;database=smsis_portal",
                mySqlOptionsAction: sqlOption => {
                    sqlOption.MigrationsAssembly(Assembly.GetExecutingAssembly().GetName().Name);
                    sqlOption.EnableRetryOnFailure(maxRetryCount: 5, maxRetryDelay: TimeSpan.FromSeconds(30), errorNumbersToAdd: null);
                });
            optionsBuilder?.EnableSensitiveDataLogging();
        }
    }
}
