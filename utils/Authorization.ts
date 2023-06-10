import { ACCESS_KEY } from '@/constants/auth';
import { Storage } from "@/lib/storage";

export const Authorization = () => {
  return {
    headers: {
      Authorization: `Bearer ${Storage.getItem(ACCESS_KEY)}`,
    },
  };
};
