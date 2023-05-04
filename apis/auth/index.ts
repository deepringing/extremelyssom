import server from '@/apis/axios/axios';

export const getGoogleAuthLink = async (): Promise<string> => {
  return (await server.get('/auth/google/')).data;
}
