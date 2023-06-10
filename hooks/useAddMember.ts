import { ChangeEvent, useState } from "react";
import { MemberParams } from '@/interfaces/member/api';
import { useAddMemberMutation } from '@/interfaces/member/mutation';

export const useAddMember = ({ closeModal, teamId }: {
  closeModal: () => void,
  teamId: string
}) => {
  const name = "email";

  const [data, setData] = useState<MemberParams>({
    email: "",
    teamId: teamId
  });

  const handleData = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const mutation = useAddMemberMutation({
    closeModal: closeModal,
    data: data
  });

  return { name, data, handleData, mutation };
};
