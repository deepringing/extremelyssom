import { ChangeEvent, useState } from "react";
import { GoalParams } from '@/interfaces/goal/api';
import { useCreateGoalMutation } from '@/interfaces/goal/mutation';

export const useCreateGoal = ({ closeModal, teamId }: {
  closeModal: () => void,
  teamId?: string
}) => {
  const name = "content";

  const [data, setData] = useState<GoalParams>({
    content: "",
    teamId: teamId
  });

  const handleData = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const mutation = useCreateGoalMutation({
    closeModal: closeModal,
    data: data
  });

  return { name, data, handleData, mutation };
};
