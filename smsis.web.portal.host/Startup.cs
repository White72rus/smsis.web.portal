using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using smsis.web.portal.DAL.Implementation;
using smsis.web.portal.DAL.Interfaces;
using smsis.web.portal.host.Infrastructure;
using smsis.web.portal.host.Infrastructure.Interfaces;
using System;
using System.Security.Claims;
using System.Text;

namespace smsis.web.portal.host
{
    public class Startup
    {
        private readonly string _key = "RLMSZZWQWVNWBSIMKBRHYJBKPQPWMGBCBWAAKOMNXFYPEQNEVKLLXWGHKCDIJADP";

        private readonly IConfiguration _configuration;

        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAuthentication("OAuth")
                .AddJwtBearer("OAuth", options => {

                    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_key));

                    options.TokenValidationParameters = new TokenValidationParameters {
                        ValidIssuer = "http://localhost:5010",
                        ValidAudience = "http://localhost:5010",
                        IssuerSigningKey = key,
                        ValidateLifetime = true,
                    };
                });

            services.AddAuthorization(config =>
            {
                config.AddPolicy("Administrator", builder => {
                    builder.RequireClaim(ClaimTypes.Role, "Administrator");
                });
            });
            
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });

            services.AddScoped<IImsRepository, ImsRepository>();
            services.AddScoped<IMssRepository, MssRepository>();
            services.AddScoped<IUsersRepository, UsersRepository>();
            services.AddScoped<IClaimsRepository, ClaimsRepository>();
            services.AddScoped<IUserManager, UserManager>();

            services.AddCors();
            services.AddSignalR();
            services.AddControllersWithViews();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            if (!env.IsDevelopment())
            {
                app.UseSpaStaticFiles();
            }

            app.Use(async(context, next) => {

                //if (context.Request.Method == "POST")
                //{
                //    var c = context.Request.Body;

                //    Console.WriteLine($"\nID: {context.Connection.Id}\n" +
                //    $"IP: {context.Connection.LocalIpAddress}:{context.Connection.LocalPort}\n" +
                //    $"Remote IP: {context.Connection.RemoteIpAddress}:{context.Connection.RemotePort}");

                //}
                //await context.Response.WriteAsync("");
                await next.Invoke();
            });

            app.UseRouting();

            app.UseCors(builder =>
                builder.AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod()
            );

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapDefaultControllerRoute();
                endpoints.MapHub<SignalRHub>("/siglalr");
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    // Запуск своего Angular сервера
                    //spa.UseAngularCliServer(npmScript: "start");

                    // Подключение к уже запушенному Angular серверу
                    // Запуск сервера вручную "ng start" из коммандной строки.
                    spa.UseProxyToSpaDevelopmentServer("http://localhost:4200");
                }
            });
        }
    }
}
