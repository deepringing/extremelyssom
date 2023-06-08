import server from '@/lib/axios';
import { Simulate } from 'react-dom/test-utils';
import error = Simulate.error;

// 구글 OAuth Link 조회
export const getGoogleAuthLink = async () => {
  return (await server.get("/auth/google")).data;
};


// 구글 액세스토큰으로 로그인
export const getAccessTokenByGoogle = async (code?: string) => {
  if (code == null) {
    throw error;
  }

  console.log(`in api ${code}`);

  return (await server.post(`/auth/google/callback`, null, {
    params: {
      code: code,
    }
  })).data;
};


// 로그인
export interface loginUserParams {
  email: string,
  password: string
}

export const loginUser = async ({ email, password }: loginUserParams) => {
  return (
    await server.post("/auth", { email, password })
  ).data;
};
