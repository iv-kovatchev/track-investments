using AutoMapper;
using backend.Data.Dto.Investment;
using backend.Data.Models;

namespace backend.Data.Profiles
{
    public class InvestmentProfile : Profile
    {
        public InvestmentProfile() 
        {
            CreateMap<Investment, GetInvestmentDto> ()
                .ForMember(dto => dto.Id, i => i.MapFrom(src => src.Id))
                .ReverseMap();
        }
    }
}
