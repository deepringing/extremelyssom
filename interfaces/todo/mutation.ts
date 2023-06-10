import { addTodo, TodoParams } from '@/interfaces/todo/api';
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
