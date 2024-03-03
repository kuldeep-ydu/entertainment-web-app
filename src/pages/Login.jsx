import { Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import Input from '../components/Input';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  email: z.string().min(1, 'Cant be empty').email(),
  password: z.string().min(1, 'Cant be empty').min(5),
});

// export async function loginAction({ request }) {
//   const formData = await request.formData();
//   const email = formData.get('email');
//   const password = formData.get('password');
//   console.log({ email, password });
//   return null;
// }

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  const body = (
    <>
      <Input
        label="email"
        type="email"
        disabled={isSubmitting}
        register={register}
        error={errors.email}
        placeholder="Email address"
        required
      />

      <Input
        label="password"
        type="password"
        disabled={isSubmitting}
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
      <Link to="/signup" className="ml-2 text-accent">
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
      // action={loginAction}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
}
