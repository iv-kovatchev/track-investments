import Modal from '../../../components/shared/Modal';
import TextField from '../../../components/shared/TextField';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import DateField from '../../../components/shared/DateField';
import Select from '../../../components/shared/Select';
import React, { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from './schema';
import { Investment } from '../../../services/investmentsService/types';
import { faker } from '@faker-js/faker';
import { createInvestment } from '../../../services/investmentsService';
import Button from '../../../components/shared/Button';
import { CreateInvestmentModalProps, types } from './types';
import './CreateInvestmentModal.scss';
import useCreateInvestmentModal from './useCreateInvestmentModal';

const CreateInvestmentModal = ({
  setIsCreateInvestmentModalOpen,
  currentUser
}: CreateInvestmentModalProps) => {
  const {
    isPending,
    onSubmit,
    handleClick
  } = useCreateInvestmentModal({ setIsCreateInvestmentModalOpen, currentUser });

  const {
    control,
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm({
    resolver: zodResolver(schema)
  });

  return (
    <>
      <Modal
        title='Create investment'
        children={
          <form className="create-investment-form" onSubmit={handleSubmit(onSubmit)}>
            <div className='create-investment-form__input-field'>
              <TextField label="Name" type="text" {...register('name')} />
              {errors.name && (<p className='create-investment-form__error'>{`${errors.name.message}`}</p>)}
            </div>
            <div className='create-investment-form__input-field'>
              <TextField label="Value" type="number" {...register('value')} />
              {errors.value && (<p className='create-investment-form__error'>{`${errors.value.message}`}</p>)}
            </div>
            <div className='create-investment-form__input-container'>
              <div className='create-investment-form__input-field'>
                <label className='create-investment-form__label'>Start date</label>
                <Controller render={(
                  {field: {onChange, value}}) => (
                  <DateField
                    selectedDate={value}
                    onChange={onChange}
                    placeholder="Choose date..."/>
                )}
                            name="date"
                            control={control}/>
                {errors.date &&
                  (<p className='create-investment-form__error'>{`${errors.date.message}`}</p>)}
              </div>
              <div className="create-investment-form__input-field">
                <label className='create-investment-form__label'>Type</label>
                <Controller render={(
                  {
                    field: {onChange, value}
                  }) => (
                  <Select
                    {...control}
                    options={types}
                    onChange={onChange}
                    selectedValue={value}
                    placeholder="Select type..."
                  />
                )} name="type" control={control}/>

                {errors.type &&
                  (<p className='create-investment-form__error'>{`${errors.type.message}`}</p>)}
              </div>
            </div>

            <div className='create-investment-form__buttons'>
              <Button
                externalClassname="create-investment-form__submit-button"
                btnType="primary"
                type="submit"
                name='Create'
                disabled={isPending}
                showLoadingIcon={isPending}
              />
              <Button
                disabled={isPending}
                showLoadingIcon={isPending}
                name="Close"
                btnType="error"
                onClick={handleClick}
              />
            </div>
          </form>
        }
        modalSize='medium'
      />
    </>
  )
}

export default CreateInvestmentModal;
