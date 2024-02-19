export type Type =
  'Cash' |
  'Crypto' |
  'Stocks' |
  'Gold' |
  'Property' |
  'Land'

type Status =
  'Active' |
  'Closed'

export interface Investment {
  id: string,
  name: string,
  status: Status,
  date: string,
  value: number,
  type: Type,
  investorId: string
}