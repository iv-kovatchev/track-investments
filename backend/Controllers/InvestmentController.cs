using AutoMapper;
using backend.Data;
using backend.Data.Dto.Investment;
using backend.Data.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/investment")]
    [ApiController]
    public class InvestmentController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        private readonly IMapper _mapper;

        public InvestmentController(ApplicationDBContext context, IMapper mapper)
        {
           _context = context;
           _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            IEnumerable<Investment> dummyData = new List<Investment>
            {
                new Investment
                {
                    Id = 1,
                    Name = "Test",
                    Date = DateTime.Now,
                    Status = StatusType.Active,
                    Value = 22
                },
                new Investment
                {
                    Id = 2,
                    Name = "Test2",
                    Date = DateTime.Now,
                    Status = StatusType.Closed,
                    Value = 22
                }
            };

            var investmentsDtoList = _mapper.Map<IEnumerable<GetInvestmentDto>>(dummyData);
            

            return Ok(investmentsDtoList);
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
