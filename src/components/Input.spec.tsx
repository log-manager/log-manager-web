import { fireEvent, render, screen } from '@testing-library/react';
import { Input, InputProps } from './Input';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import userEvent from '@testing-library/user-event';

const renderComponent = (props: Omit<InputProps, 'control'>) => {
  let watchRef: () => Record<string, any> = () => ({});
  const Component = () => {
    const { control, watch } = useForm();

    useEffect(() => {
      watchRef = watch;
    }, [watch]);

    return <Input control={control} {...props} />;
  };
  render(<Component />);
  return watchRef;
};

describe('Input', () => {
  it('will render an Input', async () => {
    renderComponent({ name: 'input', defaultValue: '', label: 'This is the label' });
    expect(await screen.findByRole('textbox')).toBeInTheDocument();
  });

  it('will type into the Input', async () => {
    const props = { name: 'input', defaultValue: '', label: 'This is the label' };
    const value = 'test@example.com';

    const watch = renderComponent(props);
    const input = await screen.findByRole('textbox');
    await userEvent.type(input, value);

    expect(input).toHaveValue(value);
    expect(watch()).toEqual(expect.objectContaining({ [props.name]: value }));
  });

  it('will toggle password input', async () => {
    const props = { name: 'input', defaultValue: '', label: 'This is the label', type: 'password' };
    renderComponent(props);

    const input = await screen.findByRole('textbox');
    const togglePasswordButton = await screen.findByTestId('toggle-password-button');

    expect(togglePasswordButton).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'password');

    await userEvent.click(togglePasswordButton);
    expect(input).toHaveAttribute('type', 'text');
  });
});
