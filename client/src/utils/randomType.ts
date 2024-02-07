import { Type } from '../services/investmentsService/types';

export const getRandomType = (): Type => {
  const types: Type[] = ['Cash', 'Crypto', 'Stocks', 'Gold', 'Property', 'Land'];
  return types[Math.floor(Math.random() * types.length)];
}