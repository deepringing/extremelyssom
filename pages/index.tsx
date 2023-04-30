import Head from 'next/head'
import styles from '@/styles/pages/home.module.scss';
import SideBar from '@/components/shared/SideBar';
import TeamMember from '@/components/home/TeamMember';
import Goal from '@/components/home/Goal';

type Props = {
  team: {
    name: string,
    memberList?: {
      name: string,
    }[],
  },
  goalList?: {
    content: string,
    completedAt: string,
    progress: number,
  }[]
}

export default function Home() {
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
        content: "2023 버킷리스트",
        completedAt: "2023-12-31T15:16:30.431",
        progress: 44,
      },
      {
        content: "2024 버킷리스트",
        completedAt: "2023-04-31T15:16:30.431",
        progress: 44,
      },
      {
        content: "2025 버킷리스트",
        completedAt: "2023-05-31T15:16:30.431",
        progress: 44,
      },
    ]
  }

  return (
    <>
      <Head>
        <title>쏨</title>
      </Head>
      <SideBar />
      <main className={styles.home}>
        <div className={styles.header}>
          <p>{data.team.name}</p>
          {data.team.memberList &&
            <TeamMember
              team={data.team}
            />
          }
        </div>
        <div className={styles.goalList}>
          {data.goalList?.map(g =>
            <Goal
              content={g.content}
              completedAt={g.completedAt}
              progress={g.progress}
            />
          )}
        </div>
      </main>
    </>
  )
}
