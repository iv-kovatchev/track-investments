import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

type Inputs = {
  firstName: string;
}

const testSchema = z.object({
  firstName: z.string()
    .max(100, 'Max length for first name is 100 letters.')
}).required({
  firstName: true
});

const TestForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<Inputs> ({
    defaultValues: {
      firstName: ''
    },
    resolver: zodResolver(testSchema)
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log (data);

  console.log('re-render');

  return (
    <form className='testForm' onSubmit={handleSubmit(onSubmit)}>
      <div className='testForm__field'>
        <label>First name</label>
        <div>
          <input
            id='firstName'
            type="text"
            placeholder="First name"
            {...register ('firstName', )}
          />
        </div>

        {errors.firstName && (
          <p role="alert">{`${errors.firstName.message}`}</p>
        )}
      </div>
      <div>
        <input type="submit"/>
      </div>
    </form>
  )
}

export default TestForm;
