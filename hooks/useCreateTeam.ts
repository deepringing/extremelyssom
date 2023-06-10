import { ChangeEvent, useState } from "react";
import { TeamParams } from '@/interfaces/team/api';
import { useCreateTeamMutation } from '@/interfaces/team/mutation';

export const useCreateTeam = ({ closeModal }: {
  closeModal: () => void
}) => {
  const name = "name";

  const [data, setData] = useState<TeamParams>({
    name: "",
  });

  const handleData = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const mutation = useCreateTeamMutation({
    closeModal: closeModal,
    data: data
  });

  return { name, data, handleData, mutation };
};
