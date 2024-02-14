import Table from '../../components/shared/Table';
import useDashboard from './useDashboard';
import React, { useContext } from 'react';
import { UserContext } from '../../utils/contexts/UserContext';
import './Dashboard.scss';
import Widget from '../../components/shared/Widget';
import WidgetContext from './WidgetContent';
import DeleteInvestmentModal from './DeleteInvestmentModal';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Select from '../../components/shared/Select';
import TextField from '../../components/shared/TextField';
import { createInvestment } from '../../services/investmentsService';
import { Investment } from '../../services/investmentsService/types';
import { faker } from '@faker-js/faker';

const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  if (issue.code === z.ZodIssueCode.invalid_type && issue.path[0] === 'type') {
    if (issue.expected === 'object') {
      return { message: 'You need to select a type for the investment'}
    }
  }

  if (issue.code === z.ZodIssueCode.invalid_date && issue.path[0] === 'date') {
    return { message: 'Choose a valid date' }
  }

  return { message: ctx.defaultError };
}

z.setErrorMap(customErrorMap)

//Remove!!
const schema = z.object({
  name: z.string().min(3, 'The name should be at least 3 characters'),
  value: z.coerce.number()
  .min(100, 'The minimum value for one investment should be $100')
    .max(5000000, 'The maximum value for one investment can be $5.000.000'),
  date: z.coerce
  .date().refine((date) => date > new Date(), 'The date can\'t be in the past'),
  type: z.object({ value: z.string(), label: z.string() })
});

const Dashboard = (): JSX.Element => {
  const { addInvestment, data: investData, isPending, isError } = createInvestment();

  //Remove this!!!
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

  const onSubmit = (data: FieldValues) => {

    console.log(data);

    const investment: Investment = {
      id: faker.string.uuid(),
      name: data.name,
      value: data.value,
      date: data.date,
      type: data.type.value,
      status: 'Active',
      userId: currentUser?.userId
    }

    console.log(investment);

    addInvestment(investment);
  }

  const { currentUser} = useContext(UserContext);

  console.log(errors);

  const {
    data,
    isLoadingAllInvestments,
    investmentsColumns,
    tableData,
    deleteModalProps,
    setDeleteModalProps
  } = useDashboard({currentUser});
  return (
    <div className="investments">
      {deleteModalProps.isOpen &&
        <DeleteInvestmentModal
          modalProps={deleteModalProps}
          setModalProps={setDeleteModalProps}
        />}

      {/*Remove this!!!*/}
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField label='Name' type='text' {...register('name')} />
          {errors.name && (<p>{`${errors.name.message}`}</p>)}
          <TextField label='Value' type='number' {...register('value')} />

          {errors.value && (<p>{`${errors.value.message}`}</p>)}

          <label>Date</label>
          <input
            type="date"
            {...register('date')}
          />
          {errors.date && (<p>{`${errors.date.message}`}</p>)}

          <Controller render={(
            {
              field: {onChange, value}
            }) => (
            <Select
              {...control}
              options={[
                {
                  label: 'Cash',
                  value: 'Cash'
                },
                {
                  label: 'Crypto',
                  value: 'Crypto'
                },
                {
                  label: 'Stocks',
                  value: 'Stocks'
                },
                {
                  label: 'Gold',
                  value: 'Gold'
                }
              ]}
              onChange={onChange}
              selectedValue={value}
              placeholder="Select type"
            />
          )} name="type" control={control}/>

          {errors.type && (<p>{`${errors.type.message}`}</p>)}
          <input className="button button__primary" type="submit"/>
        </form>
      </div>

      <Widget
        externalClass="dashboard__widget"
        children={<WidgetContext isLoading={isLoadingAllInvestments} investments={data}/>}
      />

      <Table
        columns={investmentsColumns}
        data={tableData}
        isLoading={isLoadingAllInvestments}
      />
    </div>
  )
}

export default Dashboard;
