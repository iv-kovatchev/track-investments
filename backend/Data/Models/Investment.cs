using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Data.Models
{
    [Table("Investments")]
    public class Investment
    {

        public int Id { get; set; }

        [Required]
        [StringLength(250)]
        public string Name { get; set; } = string.Empty;

        public DateTime Date { get; set; } = DateTime.Now;

        [Column(TypeName = "decimal(18,2)")]
        [Required]
        public decimal Value { get; set; }

        public StatusType Status { get; set; }

        public int? InvestmentTypeId { get; set; }
        public int UserId { get; set; }
    }

    public enum StatusType
    {
        Active,
        Closed
    }
}
