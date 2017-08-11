using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace aspnetapp.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        [HttpGet]
        public IDictionary<string, string> Get()
        {
            var values = Request.Headers.ToDictionary(i => i.Key, i => string.Join(" | ", i.Value));
            values["_now"] = DateTimeOffset.UtcNow.ToString("s");
            values["_host"] = Environment.MachineName;
            return values;
        }
    }
}
