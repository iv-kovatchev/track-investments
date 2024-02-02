using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("InvestmentTypes")]
    public class InvestmentType
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public bool isActive { get; set; }

        public List<Investment> Investments { get; set; }
    }
}
