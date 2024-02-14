import { FieldValues, UseFormRegister } from 'react-hook-form';

type TextFieldType = 'text' | 'number'


export interface TextFieldProps {
  label: string;
  type: TextFieldType;
  placeholder?: string;
  formName?: string
  register?: UseFormRegister<FieldValues>
}