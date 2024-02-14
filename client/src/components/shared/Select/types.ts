export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  options:  SelectOption[];
  onChange: (selectedOption: SelectOption) => void;
  selectedValue: SelectOption | null,
  placeholder: string
}