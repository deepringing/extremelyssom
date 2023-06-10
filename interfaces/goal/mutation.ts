import { useMutation, useQueryClient } from 'react-query';
import { createGoal, GoalParams } from '@/interfaces/goal/api';
import { GOAL, MY } from '@/constants/keys';

export const useCreateGoalMutation = ({ closeModal, data }: {
  closeModal: () => void,
  data: GoalParams
}) => {
  const queryClient = useQueryClient();

  return useMutation(() => createGoal(data), {
    onSuccess: () => {
      if (data.teamId) {
        queryClient.invalidateQueries([GOAL, data.teamId]);
      } else {
        queryClient.invalidateQueries([GOAL, MY]);
      }
      closeModal();
    }
  })
}
