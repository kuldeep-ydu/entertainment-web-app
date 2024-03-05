import { Link, useNavigation } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import Input from '../components/Input';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z
  .object({
    email: z.string().min(1, 'Cant be empty').email(),
    password: z.string().min(1, 'Cant be empty').min(5, 'Too small'),
    repeatPassword: z.string().min(1, 'Cant be empty').min(5, 'Too small'),
  })
  .refine(({ password, repeatPassword }) => password === repeatPassword, {
    message: 'Passwords do not match',
    path: ['repeatPassword'],
  });

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const { state } = useNavigation();

  const body = (
    <>
      <Input
        label="email"
        type="text"
        disabled={state === 'submitting'}
        register={register}
        error={errors.email}
        placeholder="Email address"
        required
      />

      <Input
        label="password"
        type="password"
        disabled={state === 'submitting'}
        error={errors.password}
        placeholder="Password"
        register={register}
        required
      />

      <Input
        label="repeatPassword"
        type="password"
        disabled={state === 'submitting'}
        error={errors.repeatPassword}
        placeholder="Repeat Password"
        register={register}
        required
      />
    </>
  );

  const footer = (
    <>
      Already have an account?{' '}
      <Link
        to="/"
        className="ml-2 pb-1 text-accent border-b-[1px] border-transparent hover:border-accent focus-visible:border-accent transition"
      >
        Login
      </Link>
    </>
  );

  return (
    <AuthForm
      title="Sign Up"
      body={body}
      buttonLabel="Create an account"
      footer={footer}
      handleSubmit={handleSubmit}
    />
  );
}
