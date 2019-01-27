using System;
using Microsoft.AspNetCore.Mvc;

namespace aspnetapp.Controllers
{
    [Route("/")]
    public class MeController : Controller
    {
        [HttpGet]
        public string Get()
        {
            Response.Headers["X-Auth-User"] = Request.Headers["X-Auth-User"];
            return "cs-" + Environment.MachineName;
        }
    }
}
