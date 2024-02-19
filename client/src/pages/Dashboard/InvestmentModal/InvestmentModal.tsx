import Modal from '../../../components/shared/Modal';
import TextField from '../../../components/shared/TextField';
import { Controller, useForm } from 'react-hook-form';
import DateField from '../../../components/shared/DateField';
import Select from '../../../components/shared/Select';
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from './schema';
import Button from '../../../components/shared/Button';
import { InvestmentModalProps, types } from './types';
import './InvestmentModal.scss';
import useInvestmentModal from './useInvestmentModal';
import { SelectOption } from '../../../components/shared/Select/types';

const InvestmentModal = ({
  setIsOpen,
  currentInvestor,
  isEdit,
  investment
}: InvestmentModalProps) => {
  const {
    isPending,
    isEditPending,
    onSubmit,
    handleClick
  } = useInvestmentModal({setIsOpen, currentInvestor, isEdit, investment});
  const {
    control,
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: investment ? investment.name : '',
      value: investment ? investment.value : '',
      type: investment ? {label: investment.type, value: investment.type} as SelectOption : null,
      date: investment ? new Date(investment.date) : null
    }
  });

  return (
    <>
      <Modal
        title={isEdit ? 'Edit investment' : 'Create investment'}
        children={
          <form className="investment-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="investment-form__input-field">
              <TextField label="Name" type="text" {...register('name')} />
              {errors.name && (<p className="investment-form__error">{`${errors.name.message}`}</p>)}
            </div>
            <div className="investment-form__input-field">
              <TextField label="Value" type="number" {...register('value')} />
              {errors.value && (<p className="investment-form__error">{`${errors.value.message}`}</p>)}
            </div>
            <div className="investment-form__input-container">
              <div className="investment-form__input-field">
                <label className="investment-form__label">Start date</label>
                <Controller render={({field: {onChange, value}}) => {
                  return (<DateField
                    selectedDate={value}
                    onChange={onChange}
                    placeholder="Choose date..."
                  />)
                }
                }
                            name="date"
                            control={control}/>
                {errors.date &&
                  (<p className="investment-form__error">{`${errors.date.message}`}</p>)}
              </div>
              <div className="investment-form__input-field">
                <label className="investment-form__label">Type</label>
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
                  (<p className="investment-form__error">{`${errors.type.message}`}</p>)}
              </div>
            </div>

            <div className="investment-form__buttons">
              <Button
                externalClassname="investment-form__submit-button"
                btnType="primary"
                type="submit"
                name={isEdit ? 'Edit' : 'Create'}
                disabled={isPending || isEditPending}
                showLoadingIcon={isPending || isEditPending}
              />
              <Button
                disabled={isPending || isEditPending}
                showLoadingIcon={isPending || isEditPending}
                name="Close"
                btnType="error"
                onClick={handleClick}
              />
            </div>
          </form>
        }
        modalSize="medium"
      />
    </>
  )
}

export default InvestmentModal;
