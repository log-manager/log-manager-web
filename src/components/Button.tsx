import { classNames } from '@utils/classNames';

type BaseButtonProps = JSX.IntrinsicElements['button'];
type BaseLinkProps = JSX.IntrinsicElements['a'];

const VariantMap = {
  primary: 'font-bold bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 focus:ring px-4 py-3 rounded-md text-white',
  secondary: 'font-bold bg-gray-100 hover:bg-gray-200 focus:bg-blue-600 focus:ring px-4 py-3 rounded-md text-blue-900',
  tertiary: 'font-bold border px-4 py-3 rounded-md text-blue-900 hover:bg-gray-50',
  text: 'font-medium text-indigo-600 hover:text-indigo-500',
} as const;

interface ButtonVariantProps {
  variant?: keyof typeof VariantMap;
}

interface ButtonProps extends BaseButtonProps, ButtonVariantProps {}

export function Button({ variant = 'primary', className, ...buttonProps }: ButtonProps) {
  const VariantStyles = VariantMap[variant];
  const classes = classNames(VariantStyles, className);
  return <button {...buttonProps} className={classes} />;
}

interface LinkButtonProps extends BaseLinkProps, ButtonVariantProps {}

export function LinkButton(props: LinkButtonProps) {
  return <a {...props} />;
}
