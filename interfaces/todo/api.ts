import server from '@/lib/axios';
import { Authorization } from '@/utils/Authorization';

// 할 일 생성
export interface TodoParams {
  content: string,
  goalId: string
}

export const addTodo = async (data: TodoParams) => {
  return (await server.post('/todo', data, Authorization())).data;
}
