import { useForm } from 'react-hook-form';

type Inputs = {
  firstName: string;
}

const TestForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<Inputs> ();

  const onSubmit = () => console.log ('Submit!');

  console.log('re-render');

  return (
    <form onSubmit={handleSubmit (onSubmit)}>
      <input
        type="text"
        placeholder="First name"
        {...register ('firstName', {
          required: 'First name is required',
          maxLength: {value: 100, message: 'Maximus length for first name is 100 letters.'}
        })}
      />
      <input type='submit' />
      {errors.firstName?.type === "required" && (
        <p role="alert">First name is required</p>
      )}
    </form>
  )
}

export default TestForm;
