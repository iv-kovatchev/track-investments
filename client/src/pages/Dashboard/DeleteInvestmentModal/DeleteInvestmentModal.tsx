import Modal from '../../../components/shared/Modal';
import Button from '../../../components/shared/Button';
import React from 'react';
import { DeleteInvestmentModalProps } from './types';
import useDeleteInvestmentModal from './useDeleteInvestmentModal';
import './DeleteInvestmentModal.scss';

const DeleteInvestmentModal = ({ modalProps, setModalProps  }: DeleteInvestmentModalProps) => {
  const { handleDeleteInvestment, handleCloseDeleteModal, isPending } = useDeleteInvestmentModal({ modalProps, setModalProps });

  return (
    <Modal
        title={`Delete investment`}
        children={<div>
          <p className='delete-investment-modal__description'>Are you sure you want to delete the investment?</p>
          <div className='delete-investment-modal__buttons'>
            <Button
              externalClassname='delete-investment-modal__confirm-button'
              name='Confirm'
              type='error'
              showLoadingIcon={isPending}
              disabled={isPending}
              onClick={handleDeleteInvestment}
            />
            <Button
              onClick={handleCloseDeleteModal}
              name='Cancel'
              type='primary'
              showLoadingIcon={isPending}
              disabled={isPending}
            />
          </div>
        </div>}
      />
  )
}

export default DeleteInvestmentModal;
