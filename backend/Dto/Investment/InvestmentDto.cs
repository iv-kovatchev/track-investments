using System.ComponentModel.DataAnnotations.Schema;
using static backend.Models.Investment;

namespace backend.Dto.Investment
{
    public class InvestmentDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public DateTime Date { get; set; } = DateTime.Now;

        [Column(TypeName = "decimal(18,2)")]
        public decimal Value { get; set; }

        public StatusType Status { get; set; }
    }
}
