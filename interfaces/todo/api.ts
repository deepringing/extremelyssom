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

// 할 일 상태 토글
export const toggleTodo = async (id: string) => {
  return (await server.patch(`/todo/${id}/toggle`, Authorization())).data;
}
