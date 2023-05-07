import styles from "@/styles/pages/goal.module.scss";
import { useRouter } from 'next/router';
import SideBar from '@/components/shared/SideBar';
import { dateBefore } from '@/utils/DateTimeFormatter';
import Todo from '@/components/goal/Todo';

export default function Goal() {
  const router = useRouter();
  const { slug } = router.query;

  const data = {
    content: "2023년 버킷리스트",
    createdAt: "2023-01-01",
    completedAt: "2023-12-31",
    progress: 100,
    todoList: [
      {
        content: "53kg까지 빼기",
        status: "COMPLETED"
      },
      {
        content: "54kg까지 빼기",
        status: "STARTED"
      }
    ]
  }

  return (
    <>
      <SideBar />
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.title}>
            <button className={styles.back}
                    onClick={router.back}
            >
              &lt;
            </button>
            {data.content}
          </div>
          <p className={styles.date}>
            {data.createdAt} ~ {data.completedAt} ({dateBefore(data.completedAt)})
          </p>
        </div>
        <div className={styles.progress}>
          <div className={styles.percentage}
               style={{
                 width: `${data.progress}%`
               }}
          >
            <div className={styles.percentageInner}>
              {
                data.progress > 25 &&
                <img src="/images/rocket.svg" alt="rocket" className={styles.rocket} />
              }
            </div>
          </div>
        </div>
        <div className={styles.todoList}>
          {data.todoList.map(t => (
            <Todo
              content={t.content}
              status={t.status}
            />
          ))}
        </div>
      </main>
    </>
  )
}
