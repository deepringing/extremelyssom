import server from '@/lib/axios';
import { Authorization } from '@/utils/Authorization';

// 팀 목표 조회
export const getTeamGoal = async (teamId: string) => {
  return (await server.get(`/goal/team/${teamId}`, Authorization())).data;
}

// 내 목표 조회
export const getMyGoal = async () => {
  return (await server.get('/goal/my', Authorization())).data;
}

// 목표 생성
export interface GoalParams {
  content: string,
  completedAt: string,
  teamId?: string,
}

export const createGoal = async (data: GoalParams) => {
  return (await server.post('/goal', data, Authorization())).data;
}
