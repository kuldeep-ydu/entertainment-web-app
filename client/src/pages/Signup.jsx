import { Link, redirect, useNavigation } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import Input from '../components/Input';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const schema = z
  .object({
    avatar: z.custom().superRefine(validateFileInput),
    email: z.string().min(1, 'Cant be empty').email(),
    password: z.string().min(1, 'Cant be empty').min(5, 'Too small'),
    repeatPassword: z.string().min(1, 'Cant be empty').min(5, 'Too small'),
  })
  .refine(({ password, repeatPassword }) => password === repeatPassword, {
    message: 'Passwords do not match',
    path: ['repeatPassword'],
  });

function validateFileInput(fileList, ctx) {
  if (!fileList) {
    ctx.addIssue({
      code: z.ZodIssueCode.too_small,
      message: 'Cant be empty',
    });

    return;
  }
  if (!fileList[0].type.includes('image'))
    ctx.addIssue({
      code: z.ZodIssueCode.invalid_type,
      message: 'Invalid image',
    });
}

export async function action({ request }) {
  const formData = await request.formData();
  delete formData.delete('repeatPassword');

  try {
    await axios.post('/api/sign-up', formData);
    return redirect('/');
  } catch (error) {
    toast.error(error.message);
  }

  return null;
}

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      avatar: null,
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const { state } = useNavigation();

  const body = (
    <>
      <Input
        label="avatar"
        type="file"
        disabled={state === 'submitting'}
        register={register}
        error={errors.avatar}
        placeholder="Avatar"
        required
      />

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
