type ButtonType =
  'primary' |
  'secondary' |
  'error'

type Type  =
  'submit' |
  'reset' |
  'button'

export interface ButtonProps {
  externalClassname?: string;
  name: string;
  btnType: ButtonType;
  type?: Type;
  icon?: JSX.Element;
  onClick?: () => void;
  disabled?: boolean;
  showLoadingIcon?: boolean
}