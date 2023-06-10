import Head from 'next/head'
import styles from '@/styles/pages/home.module.scss';
import SideBar from '@/components/shared/SideBar';
import Goal from '@/components/home/Goal';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { TEAM } from '@/constants/keys';
import { getTeamGoal } from '@/interfaces/goal/api';
import AddModal from '@/components/modal/AddModal';
import { useState } from 'react';
import { useAddMember } from '@/hooks/useAddMember';
import Plus from '@/components/goal/Plus';
import { useCreateGoal } from '@/hooks/useCreateGoal';
import TeamMember from '@/components/home/TeamMember';

export default function TeamGoal() {
  const router = useRouter();
  const { slug } = router.query;
  const { data } = useQuery([TEAM, slug], () => getTeamGoal(slug));
  const [addMemberModalIsOpen, setAddMemberModalOpen] = useState(false);
  const [addGoalModalIsOpen, setAddGoalModalOpen] = useState(false);
  const addMember = useAddMember({
    closeModal: () => setAddMemberModalOpen(false),
    teamId: slug
  });
  const createGoal = useCreateGoal({
    closeModal: () => setAddGoalModalOpen(false),
    teamId: slug
  });

  return (
    <>
      <Head>
        <title>{data?.team.name} | 쏨</title>
      </Head>
      <SideBar />
      <main className={styles.home}>
        <div className={styles.header}>
          <p>{data?.team.name}</p>
          {data?.team.memberList &&
            <TeamMember
              team={data.team}
              addMember={() => setAddMemberModalOpen(true)}
            />
          }
        </div>
        <div className={styles.goalList}>
          {data?.goalList.map((g: {
              id: number,
              content: string,
              completedAt: string,
              progress: number
            }) =>
              <Goal
                key={g.id}
                id={g.id}
                content={g.content}
                completedAt={g.completedAt}
                progress={g.progress}
              />
          )}
          <Plus onClick={() => setAddGoalModalOpen(true)} />
        </div>
      </main>
      <AddModal
        title={`${data?.team.name} 멤버 추가`}
        onClick={addMember.mutation.mutate}
        isOpen={addMemberModalIsOpen}
        onRequestClose={() => setAddMemberModalOpen(false)}
      >
        <input
          type={"text"}
          value={addMember.data.email}
          onChange={addMember.handleData}
          name={addMember.name}
        />
      </AddModal>
      <AddModal title={"목표 추가"}
                onClick={createGoal.mutation.mutate}
                isOpen={addGoalModalIsOpen}
                onRequestClose={() => setAddGoalModalOpen(false)}
      >
        <input
          type={"text"}
          value={createGoal.data.content}
          onChange={createGoal.handleData}
          name={"content"}
          placeholder={"내용"}
        />
        <input
          type={"text"}
          value={createGoal.data.completedAt}
          onChange={createGoal.handleData}
          name={"completedAt"}
          placeholder={"완료일 YYYY-MM-DD"}
        />
      </AddModal>
    </>
  )
}
