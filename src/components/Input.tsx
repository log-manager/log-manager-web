import { FormControl, FormControlProps } from './FormControl';

type BaseInputProps = JSX.IntrinsicElements['input'];

export interface InputProps extends Omit<BaseInputProps, 'name'>, Omit<FormControlProps, 'children'> {}

export function Input({ label, errors, ...props }: InputProps) {
  return (
    <FormControl name={props.name} label={label} errors={errors}>
      <input
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        {...props}
      />
    </FormControl>
  );
}
