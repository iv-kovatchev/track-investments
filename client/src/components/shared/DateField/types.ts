export interface DateFieldProps {
  placeholder?: string;
  selectedDate: Date | null;
  onChange: (selectedDate: Date) => void;
}