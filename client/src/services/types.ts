export interface Investment {
  name: string,
  status: string,
  date: string,
  value: number
}

export interface MutationDataProps<T> {
  url: string;
  method: string;
  data?: T
}