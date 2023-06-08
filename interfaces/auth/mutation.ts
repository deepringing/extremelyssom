import { getAccessTokenByGoogle, } from "./api";
import { Storage } from "@/lib/storage";
import { useRouter } from "next/navigation";
import { useMutation } from "react-query";
import { ACCESS_KEY } from '@/constants/auth';

// 구글 로그인
export const useGoogleLoginMutation = () => {
  const router = useRouter();

  return useMutation((code: string) => getAccessTokenByGoogle(code), {
    onSuccess: (data) => {
      Storage.setItem(ACCESS_KEY, data.accessToken);

      router.push("/");
    },
    onError: (err) => {
      alert("로그인 실패");
      router.push("/login");
    }
  });
}


