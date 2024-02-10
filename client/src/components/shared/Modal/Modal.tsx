import Button from '../Button';
import { ModalProps } from './types';
import './Modal.scss';
import { useEffect } from 'react';

const Modal = ({ title, children, onClose }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    }
  }, [])

  return (
    <dialog open className='modal'>
      <div className='modal__container'>
        <div className='modal__content'>
          <h1 className='modal__title'>{title}</h1>
          <div className='modal__body'>
            {children}
          </div>
        </div>
        {onClose &&
          <div className='modal__close-button'>
            <Button name='Close' onClick={onClose} type='primary'/>
          </div>}
      </div>
    </dialog>
  )
}

export default Modal;
