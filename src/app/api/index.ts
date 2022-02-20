import axios from 'axios';
import { AccessToken } from '@app/services/AccessToken';

export const apiClient = axios.create({
  baseURL: 'http://localhost:3333/api',
});

apiClient.interceptors.response.use((response) => {
  if (response?.data?.access_token) {
    AccessToken.make().store(response?.data?.access_token);
  }

  return response;
});

apiClient.interceptors.request.use((config) => {
  const accessToken = AccessToken.make();

  if (accessToken.get()) {
    config.headers = {
      ...(config.headers ?? {}),
      Authorization: `Bearer ${accessToken.get()}`,
    };
  }

  return config;
});
