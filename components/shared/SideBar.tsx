import styles from "@/styles/components/sidebar.module.scss"
import Link from 'next/link';
import { useQuery } from 'react-query';
import { MY, TEAM } from '@/constants/keys';
import { getMyTeam } from '@/interfaces/team/api';
import { useState } from 'react';
import AddModal from '@/components/modal/AddModal';
import { useCreateTeam } from '@/hooks/useCreateTeam';

export default function SideBar() {
  const [addTeamModalIsOpen, setAddTeamModalOpen] = useState(false);
  const createTeam = useCreateTeam({
    closeModal: () => setAddTeamModalOpen(false)
  });
  const { data } = useQuery([TEAM, MY], getMyTeam);

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
                <Link href={`/team/${t.id}`} key={t.id}>
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
        onRequestClose={() => setAddTeamModalOpen(false)}
      >
        <input
          type={"text"}
          value={createTeam.data.name}
          onChange={createTeam.handleData}
          name={createTeam.name}
        />
      </AddModal>
    </>
  )
}
