using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Data.Models
{
    [Table("Users")]
    public class User
    {
        public int Id { get; set; }

        public string FirstName { get; set; } = string.Empty;

        public string LastName { get; set; } = string.Empty;

        public int Age { get; set; }

        public List<Investment> Investments { get; set; } = new List<Investment>();
    }
}
