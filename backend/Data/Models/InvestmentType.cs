using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Data.Models
{
    [Table("InvestmentTypes")]
    public class InvestmentType
    {
        public int Id { get; set; }

        public string Name { get; set; } = string.Empty;

        public bool isActive { get; set; }

        public List<Investment> Investments { get; set; } = new List<Investment>();
    }
}
