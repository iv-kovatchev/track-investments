import { FieldValues, UseFormRegister } from 'react-hook-form';

type TextFieldType = 'text' | 'number'


export interface TextFieldProps {
  label: string;
  type: TextFieldType;
  placeholder?: string;
  value?: string | number;
  formName?: string
  register?: UseFormRegister<FieldValues>
}