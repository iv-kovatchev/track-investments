export interface SelectOption {
  label: string;
  value: string | number;
}

export interface SelectProps {
  //options:  SelectOption[];
  onChange: (selectedOption: string | number) => void;
  selectedValue: string | number | null
}