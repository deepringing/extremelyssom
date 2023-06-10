import { useMutation, useQueryClient } from 'react-query';
import { createGoal, GoalParams } from '@/interfaces/goal/api';
import { GOAL, MY } from '@/constants/keys';

export const useCreateGoalMutation = ({ closeModal, data}: {
  closeModal: () => void,
  data: GoalParams
}) => {
  const queryClient = useQueryClient();

  return useMutation(() => createGoal(data), {
    onSuccess: () => {
      queryClient.invalidateQueries([GOAL, data.teamId ?? MY]);
      closeModal();
    }
  })
}
