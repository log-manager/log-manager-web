import { Input } from '@components/Input';
import { useForm } from 'react-hook-form';
import { Button } from '@components/Button';
import { useLogin } from '@app/api/hooks/auth';

interface LoginState {
  email: string;
  password: string;
}

export default function LoginScreen() {
  const { control, watch, handleSubmit } = useForm<LoginState>();

  const { mutate, error } = useLogin();

  const onSubmit = (data: LoginState) => {
    mutate(data);
  };

  return (
    <div className="w-screen h-screen md:grid grid-cols-2">
      <div className="hidden md:block w-full h-full bg-gray-100" />
      <div className="flex flex-col p-8 items-center justify-center">
        <form className="w-full max-w-lg p-4 flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <p className="font-bold text-3xl">Login</p>
            <p className="text-gray-500">Enter your credentials to access your account</p>
          </div>
          {error && <p>Invalid credentials</p>}
          <Input name="email" label="Email Address" className="w-full" control={control} defaultValue="" />
          <Input
            name="password"
            label="Password"
            type="password"
            className="w-full"
            control={control}
            defaultValue=""
          />
          <Button type="submit">Login</Button>
        </form>
        <pre>{JSON.stringify(watch(), null, 2)}</pre>
      </div>
    </div>
  );
}
