import styles from "@/styles/components/sidebar.module.scss"
import Link from 'next/link';
import { useQuery } from 'react-query';
import { MY_TEAM } from '@/constants/keys';
import { getMyTeam } from '@/interfaces/team/api';
import { useState } from 'react';
import AddModal from '@/components/modal/AddModal';
import { useCreateTeam } from '@/hooks/useCreateTeam';

export default function SideBar() {
  const [addTeamModalIsOpen, setAddTeamModalOpen] = useState(false);
  const createTeam = useCreateTeam({
    closeModal: () => setAddTeamModalOpen(false)
  });
  const { data } = useQuery(MY_TEAM, getMyTeam);

  return (
    <>
      <aside className={styles.aside}>
        <div className={styles.headerWrapper}>
          <div className={styles.header}>
            <img src="/images/logo.svg" alt="logo" />
            <p>SSOM</p>
          </div>
          <div className={styles.teams}>
            <Link href={'/'}>나의 공간</Link>
            {
              data?.teamList.map(t => <>
                <Link href={`/space/${t.id}`} key={t.id}>
                  {t.name}
                </Link>
              </>)
            }
          </div>
        </div>
        <button className={styles.addTeam}
                onClick={() => setAddTeamModalOpen(true)}
        >
          + 팀 추가하기
        </button>
      </aside>
      <AddModal
        title={"팀 추가"}
        onClick={createTeam.mutation.mutate}
        isOpen={addTeamModalIsOpen}
        data={createTeam.data.name}
        handleChange={createTeam.handleData}
        name={createTeam.name}
        onRequestClose={() => setAddTeamModalOpen(false)}
      />
    </>
  )
}
