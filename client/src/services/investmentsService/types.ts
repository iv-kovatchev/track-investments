type Type =
  'Cash' |
  'Crypto' |
  'Stocks' |
  'Gold' |
  'Property' |
  'Land'

export interface Investment {
  id: string,
  name: string,
  status: string,
  date: string,
  value: number,
  type: Type
}