using System.ComponentModel.DataAnnotations.Schema;
using static backend.Data.Models.Investment;

namespace backend.Data.Dto.Investment
{
    public class GetInvestmentDto
    {
        public string Id { get; set; }

        public string Name { get; set; } = string.Empty;

        public DateTime Date { get; set; } = DateTime.Now;

        [Column(TypeName = "decimal(18,2)")]
        public decimal Value { get; set; }
    }
}
