using backend.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/investment")]
    [ApiController]
    public class InvestmentController : ControllerBase
    {
        private readonly ApplicationDBContext _context;

        public InvestmentController(ApplicationDBContext context)
        {
           _context = context;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var investments = _context.Investments.ToList();

            return Ok(investments);
        }

        [HttpGet("{id}")]
        public IActionResult GetById([FromRoute] int id)
        {
            var investment = _context.Investments.Find(id);

            if(investment == null)
            {
                return NotFound();
            }

            return Ok(investment);
        }
    }
}
