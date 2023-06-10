// 팀 추가
import { useMutation, useQueryClient } from 'react-query';
import { createTeam, TeamParams } from '@/interfaces/team/api';
import { MY_TEAM } from '@/constants/keys';

export const useCreateTeamMutation = ({ closeModal, data }: {
  closeModal: () => void,
  data: TeamParams
}) => {
  const queryClient = useQueryClient();

  return useMutation(() => createTeam(data), {
    onSuccess: () => {
      queryClient.invalidateQueries(MY_TEAM);
      closeModal();
    }
  })
}
