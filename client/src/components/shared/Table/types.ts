export interface TableProps<T extends object> {
  columns: string[];
  data?: T[];
  extendClassname?: string;
  isLoading?: boolean;
}