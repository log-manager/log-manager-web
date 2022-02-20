import { useMutation } from 'react-query';
import { apiClient } from '@app/api';

interface UseLoginArgs {
  email: string;
  password: string;
}

export function useLogin() {
  return useMutation(async (payload: UseLoginArgs) => {
    const { data } = await apiClient.post('/auth/login', payload);
    return data;
  });
}
