import {
  Control,
  FieldPath,
  FieldPathValue,
  FieldValues,
  Path,
  UnpackNestedValue,
  useController,
} from 'react-hook-form';
import { FormControl } from './FormControl';
import { MouseEventHandler, useCallback, useState } from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import { classNames } from '@utils/classNames';
import { BaseInput } from '@components/BaseInput';

type BaseInputProps = JSX.IntrinsicElements['input'];

export interface InputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<BaseInputProps, 'name'> {
  name: Path<TFieldValues>;
  label: string;
  control: Control<TFieldValues>;
  defaultValue: UnpackNestedValue<FieldPathValue<TFieldValues, TName>>;
}

export function Input<TFieldValues extends FieldValues = FieldValues>({
  name,
  label,
  control,
  defaultValue,
  type: baseType = 'text',
  className,
  ...props
}: InputProps<TFieldValues>) {
  const [type, setType] = useState(baseType);

  const {
    field: { onChange, value },
    formState: { errors },
  } = useController<TFieldValues>({
    name,
    control,
    defaultValue,
  });

  const togglePassword = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => {
      event.preventDefault();
      if (type === 'password') {
        setType('text');
        return;
      }
      setType('password');
    },
    [type],
  );

  const isPassword = baseType === 'password';
  const hasIcon = isPassword;
  const PasswordIcon = type === 'password' ? EyeIcon : EyeOffIcon;

  const inputClasses = classNames(BaseInput, hasIcon && 'pr-16');

  return (
    <FormControl name={name} label={label} errors={[]} className={className}>
      <div className="relative">
        <input
          role="textbox"
          className={inputClasses}
          type={type}
          {...props}
          onChange={onChange}
          value={value}
          id={name}
        />
        {isPassword && (
          <button
            data-testid="toggle-password-button"
            onClick={togglePassword}
            className="absolute right-0 top-0 flex h-full items-center justify-center w-12"
          >
            <PasswordIcon className="w-4 h-4 text-gray-500 hover:text-gray-600" />
          </button>
        )}
      </div>
    </FormControl>
  );
}
