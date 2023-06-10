// 팀 추가
import { useMutation, useQueryClient } from 'react-query';
import { createTeam, TeamParams } from '@/interfaces/team/api';
import { MY, TEAM } from '@/constants/keys';

export const useCreateTeamMutation = ({ closeModal, data }: {
  closeModal: () => void,
  data: TeamParams
}) => {
  const queryClient = useQueryClient();

  return useMutation(() => createTeam(data), {
    onSuccess: () => {
      queryClient.invalidateQueries([TEAM, MY]);
      closeModal();
    }
  })
}
