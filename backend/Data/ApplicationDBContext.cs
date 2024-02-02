using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions dbContextOptions)
            :base(dbContextOptions)
        {
            
        }

        public DbSet<Investment> Investments { get; set; }
        public DbSet<InvestmentType> InvestmentTypes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Investment>()
                .ToTable("Investments");

            modelBuilder.Entity<InvestmentType>()
                .ToTable("InvestmentTypes");

            modelBuilder.Entity<Investment>()
                .Property(i => i.Status)
                .HasConversion<string>();

            base.OnModelCreating(modelBuilder);
        }
    }
}
