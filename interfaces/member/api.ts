import server from '@/lib/axios';
import { Authorization } from '@/utils/Authorization';

// 멤버 추가
export interface MemberParams {
  email: string,
  teamId: string
}

export const addMember = async (data: MemberParams) => {
  return (await server.post('/member/', data, Authorization())).data;
}
