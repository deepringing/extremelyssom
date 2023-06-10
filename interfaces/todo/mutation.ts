import { addTodo, TodoParams, toggleTodo } from '@/interfaces/todo/api';
import { useMutation, useQueryClient } from 'react-query';
import { GOAL } from '@/constants/keys';

// 멤버 추가
export const useAddTodoMutation = ({ clearData, data }: {
  clearData: () => void,
  data: TodoParams
}) => {
  const queryClient = useQueryClient();

  return useMutation(() => addTodo(data), {
    onSuccess: () => {
      queryClient.invalidateQueries([GOAL, data.goalId]);
      clearData();
    }
  })
}

// 할 일 토글
export const useToggleTodoMutation = (goalId: string) => {
  const queryClient = useQueryClient();

  return useMutation((todoId: string) => toggleTodo(todoId), {
    onSuccess: () => {
      queryClient.invalidateQueries([GOAL, goalId]);
    }
  })
}
