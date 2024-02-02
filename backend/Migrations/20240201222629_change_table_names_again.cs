using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class change_table_names_again : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Investment_InvestmentType_InvestmentTypeId",
                table: "Investment");

            migrationBuilder.DropPrimaryKey(
                name: "PK_InvestmentType",
                table: "InvestmentType");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Investment",
                table: "Investment");

            migrationBuilder.RenameTable(
                name: "InvestmentType",
                newName: "InvestmentTypes");

            migrationBuilder.RenameTable(
                name: "Investment",
                newName: "Investments");

            migrationBuilder.RenameIndex(
                name: "IX_Investment_InvestmentTypeId",
                table: "Investments",
                newName: "IX_Investments_InvestmentTypeId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_InvestmentTypes",
                table: "InvestmentTypes",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Investments",
                table: "Investments",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Investments_InvestmentTypes_InvestmentTypeId",
                table: "Investments",
                column: "InvestmentTypeId",
                principalTable: "InvestmentTypes",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Investments_InvestmentTypes_InvestmentTypeId",
                table: "Investments");

            migrationBuilder.DropPrimaryKey(
                name: "PK_InvestmentTypes",
                table: "InvestmentTypes");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Investments",
                table: "Investments");

            migrationBuilder.RenameTable(
                name: "InvestmentTypes",
                newName: "InvestmentType");

            migrationBuilder.RenameTable(
                name: "Investments",
                newName: "Investment");

            migrationBuilder.RenameIndex(
                name: "IX_Investments_InvestmentTypeId",
                table: "Investment",
                newName: "IX_Investment_InvestmentTypeId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_InvestmentType",
                table: "InvestmentType",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Investment",
                table: "Investment",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Investment_InvestmentType_InvestmentTypeId",
                table: "Investment",
                column: "InvestmentTypeId",
                principalTable: "InvestmentType",
                principalColumn: "Id");
        }
    }
}
