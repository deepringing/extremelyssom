import { useMutation, useQueryClient } from 'react-query';
import { TEAM } from '@/constants/keys';
import { addMember, MemberParams } from '@/interfaces/member/api';

// 멤버 추가
export const useAddMemberMutation = ({ closeModal, data }: {
  closeModal: () => void,
  data: MemberParams
}) => {
  const queryClient = useQueryClient();

  return useMutation(() => addMember(data), {
    onSuccess: () => {
      queryClient.invalidateQueries([TEAM, data.teamId]);
      closeModal();
    }
  })
}
