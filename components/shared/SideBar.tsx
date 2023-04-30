import styles from "@/styles/components/sidebar.module.scss"
import Link from 'next/link';

export default function SideBar() {
  return (
    <>
      <aside className={styles.aside}>
        <div className={styles.headerWrapper}>
          <div className={styles.header}>
            <img src="/images/logo.svg" alt="logo" />
            <p>SSOM</p>
          </div>
          <div className={styles.teams}>
            {
              ["나의 공간", "울림", "수렁", "밤돌이로"].map(t => <>
                <Link href={`/space/${t}`}>
                  {t}
                </Link>
              </>)
            }
          </div>
        </div>
        <button className={styles.addTeam}>
          + 팀 추가하기
        </button>
      </aside>
    </>
  )
}
