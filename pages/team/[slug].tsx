import Head from 'next/head'
import styles from '@/styles/pages/home.module.scss';
import SideBar from '@/components/shared/SideBar';
import TeamMember from '@/components/home/TeamMember';
import Goal from '@/components/home/Goal';
import AddMemberModal from '@/components/modal/AddMemberModal';
import { useState } from 'react';
import { useRouter } from 'next/router';

type Props = {
  team: {
    name: string,
    memberList?: {
      name: string,
    }[],
  },
  goalList: {
    id: number,
    content: string,
    completedAt: string,
    progress: number,
  }[]
}

export default function Home() {
  const router = useRouter();
  const { slug } = router.query;
  const [addMemberModalIsOpen, setAddMemberModalOpen] = useState(false);

  const data: Props = {
    team: {
      name: "다울림",
      memberList: [{
        name: "용의딸킹유림",
      }, {
        name: "뽕뽕뽕"
      }]
    },
    goalList: [
      {
        id: 1,
        content: "2023 버킷리스트",
        completedAt: "2023-12-31T15:16:30.431",
        progress: 44,
      },
      {
        id: 2,
        content: "2024 버킷리스트",
        completedAt: "2023-04-31T15:16:30.431",
        progress: 44,
      },
      {
        id: 3,
        content: "2025 버킷리스트",
        completedAt: "2023-05-31T15:16:30.431",
        progress: 44,
      },
    ]
  }

  return (
    <>
      <Head>
        <title>{data.team.name} | 쏨</title>
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
      <AddMemberModal
        isOpen={addMemberModalIsOpen}
        onRequestClose={() => setAddMemberModalOpen(false)}
      />
    </>
  )
}
