import server from '@/lib/axios';
import { Authorization } from '@/utils/Authorization';

// 나의 팀 조회
export const getMyTeam = async () => {
  return (await server.get(`/team`, Authorization())).data;
};

// 팀 추가
export interface TeamParams {
  name: string
}

export const createTeam = async (data: TeamParams) => {
  return (await server.post('/team', data, Authorization())).data;
}
