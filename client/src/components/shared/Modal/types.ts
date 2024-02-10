export interface ModalProps {
  title?: string;
  children?: JSX.Element | string;
  onClose?: () => void;
}
