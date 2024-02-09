import { Investment } from '../../services/investmentsService/types';

export const sumInvestmentsFromType = (type: string, investments?: Investment[]) => {
  return Number(investments?.filter((investment) => investment.type === type)
  .reduce((accumulator, currentValue) => accumulator + currentValue.value, 0)
  .toFixed(2));
}
