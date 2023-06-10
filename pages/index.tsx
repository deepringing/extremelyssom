import Head from 'next/head'
import styles from '@/styles/pages/home.module.scss';
import SideBar from '@/components/shared/SideBar';
import Goal from '@/components/home/Goal';
import { useState } from 'react';
import AddModal from '@/components/modal/AddModal';
import { useQuery } from 'react-query';
import { getMyGoal } from '@/interfaces/goal/api';
import { GOAL, MY } from '@/constants/keys';
import Plus from '@/components/goal/Plus';
import { useCreateGoal } from '@/hooks/useCreateGoal';

export default function MyGoal() {
  const [addGoalModalIsOpen, setAddGoalModalOpen] = useState(false);
  const { data } = useQuery([GOAL, MY], getMyGoal);
  const createGoal = useCreateGoal({
    closeModal: () => setAddGoalModalOpen(false)
  });

  return (
    <>
      <Head>
        <title>나의 공간 | 쏨</title>
      </Head>
      <SideBar />
      <main className={styles.home}>
        <div className={styles.header}>
          <p>나의 공간</p>
        </div>
        <div className={styles.goalList}>
          {data?.goalList.map(g =>
            <Goal
              key={g.id}
              content={g.content}
              completedAt={g.completedAt}
              progress={g.progress}
            />
          )}
          <Plus onClick={() => setAddGoalModalOpen(true)} />
        </div>
      </main>
      <AddModal title={"목표 추가"}
                onClick={createGoal.mutation.mutate}
                data={createGoal.data.content}
                handleChange={createGoal.handleData}
                name={createGoal.name}
                isOpen={addGoalModalIsOpen}
                onRequestClose={() => setAddGoalModalOpen(false)}
      />
    </>
  )
}
