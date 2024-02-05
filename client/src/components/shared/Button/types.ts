type ButtonType =
  'primary' |
  'secondary'

export interface ButtonProps {
  name: string;
  type: ButtonType;
  icon?: JSX.Element;
}