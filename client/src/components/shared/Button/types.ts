type ButtonType =
  'primary' |
  'secondary' |
  'error'

export interface ButtonProps {
  externalClassname?: string;
  name: string;
  type: ButtonType;
  icon?: JSX.Element;
  onClick?: () => void;
  disabled?: boolean;
  showLoadingIcon?: boolean
}