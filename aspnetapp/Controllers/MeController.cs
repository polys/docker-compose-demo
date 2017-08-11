using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace aspnetapp.Controllers
{
    [Route("api/[controller]")]
    public class MeController : Controller
    {
        // GET api/me
        [HttpGet]
        public string Get()
        {
            return Environment.MachineName;
        }
    }
}
