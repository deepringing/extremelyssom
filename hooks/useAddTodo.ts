import { ChangeEvent, useState } from "react";
import { useAddTodoMutation } from '@/interfaces/todo/mutation';
import { TodoParams } from '@/interfaces/todo/api';

export const useAddTodo = ({ goalId }: {
  goalId: string
}) => {
  const [data, setData] = useState<TodoParams>({
    content: "",
    goalId: goalId
  });


  const handleData = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const mutation = useAddTodoMutation({
    clearData: () => setData({ ...data, content: "" }),
    data: data
  });

  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.isComposing || e.key === "Enter") {
      mutation.mutate();
    }
  }

  return { data, handleData, onEnter };
};
