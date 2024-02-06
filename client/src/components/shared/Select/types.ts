export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  options:  SelectOption[];
  onChange: (selectedOption: string) => void;
  selectedValue: string | null,
  placeholder: string
}