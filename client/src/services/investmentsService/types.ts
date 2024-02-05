type Type =
  'Cash' |
  'Crypto' |
  'Stocks' |
  'Gold' |
  'Property' |
  'Land'

export interface Investment {
  name: string,
  status: string,
  date: string,
  value: number,
  type: Type
}