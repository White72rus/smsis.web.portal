using Microsoft.AspNetCore.Mvc;
using smsis.web.portal.DAL.Interfaces;
using System.Text.Json;
using System.Collections.Generic;
using smsis.web.portal.DAL.Entityes;
using smsis.web.portal.host.Infrastructure;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace smsis.web.portal.host.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseApiController : ControllerBase
    {
        IImsRepository _ims;
        IMssRepository _mss;
        public BaseApiController(IImsRepository ims, IMssRepository mss)
        {
            _ims = ims;
            _mss = mss;
        }

        // GET: api/<BaseApiController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<BaseApiController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<BaseApiController>
        [HttpPost]
        public IActionResult Post([FromBody] QMessage value)
        {
            if (value.Table == "ims")
            {
                string[] columns = new string[]{
                "FILIAL",
                "REGION",
                "DISTRICT",
                "CITY",
                "ADDRES",
                "IP_CONTROL",
                "NUMBERS_RANGE",
                "USS",
                "CAPACITY",
                "USE_CAPACITY",
                "TECH_PROTOCOL",
                "CPE_TYPE",
                "OBJ_TYPE",
                "HOSTNAME",
                "IP_VOICE",
                };
                var list = JsonSerializer.Serialize(_ims.FindByColumns(value.Query, columns, value.Table));
                return Ok(list);
            }

            if (value.Table == "mss")
            {
                string[] columns = new string[]{
                "LINK_MGCF",
                "PORT_NUMBER_E1",
                "SIGNAL_TYPE",
                "DPC",
                "TS",
                "SL",
                "MCTET_GCTET",
                "DISTRICT",
                "CITY",
                "OBJ_MSS",
                "TRUNK_GROUP",
                "TRANSPORT_SDH",
                "PREFIX",
                "STATE",
                };
                var list = JsonSerializer.Serialize(_mss.FindByColumns(value.Query, columns, value.Table));
                return Ok(list);
            }

            return Ok("Bad query message, check you indy-code!");
        }

        [HttpPost("json/{id}")]
        [Authorize]
        public IActionResult JsonPost(int id, QMessage value)
        {
            var data = _ims.GetLastId();

            if (value.Table == "ims")
            {
                _ims.UpdateById(id, JsonSerializer.Deserialize<ImsEntity>(value.Data));
                
            }

            if (value.Table == "mss")
            {
                _mss.UpdateById(id, JsonSerializer.Deserialize<MssEntity>(value.Data));
            }

            return Ok();
        }

        // PUT api/<BaseApiController>/5
        [HttpPut]
        [Authorize]
        public void Put(QMessage value)
        {
            if (value.Table == "ims")
            {
                ImsEntity entity = JsonSerializer.Deserialize<ImsEntity>(value.Data);
                _ims.AddNewDataAsync(entity);
            }

            if (value.Table == "mss")
            {
                MssEntity entity = JsonSerializer.Deserialize<MssEntity>(value.Data);
                _mss.AddNewDataAsync(entity);
            }
        }

        // DELETE api/<BaseApiController>/5
        [HttpDelete("{id}")]
        [Authorize]
        public void Delete(int id)
        {
        }
    }
}
