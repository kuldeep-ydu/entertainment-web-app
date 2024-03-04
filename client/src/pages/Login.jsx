import { Link, useNavigation } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import Input from '../components/Input';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  email: z.string().min(1, 'Cant be empty').email(),
  password: z.string().min(1, 'Cant be empty').min(5, 'Too small'),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
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
    </>
  );

  const footer = (
    <>
      Don&apos;t have an account?{' '}
      <Link
        to="/signup"
        className="ml-2 pb-1 text-accent border-b-[1px] border-transparent hover:border-accent focus-visible:border-accent transition"
      >
        Sign Up
      </Link>
    </>
  );

  return (
    <AuthForm
      title="Login"
      body={body}
      buttonLabel="Login to your account"
      footer={footer}
      handleSubmit={handleSubmit}
    />
  );
}
