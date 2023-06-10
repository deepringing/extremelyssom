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

export default function TeamGoal() {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  const { data } = useQuery([TEAM, slug], () => getTeamGoal(slug));
  const [addMemberModalIsOpen, setAddMemberModalOpen] = useState(false);

  return (
    <>
      <Head>
        {/*<title>{data.team.name} | 쏨</title>*/}
      </Head>
      <SideBar />
      <main className={styles.home}>
        <div className={styles.header}>
          {/*<p>{data?.team.name}</p>*/}
          <p>아앙</p>
          {/*{data?.team.memberList &&*/}
          {/*  <TeamMember*/}
          {/*    team={data.team}*/}
          {/*    addMember={() => setAddMemberModalOpen(true)}*/}
          {/*  />*/}
          {/*}*/}
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
        </div>
      </main>
      <AddModal
        title={'다울림에 멤버 추가'}
        onClick={() => {}}
        isOpen={addMemberModalIsOpen}
        onRequestClose={() => setAddMemberModalOpen(false)}
      />
    </>
  )
}
