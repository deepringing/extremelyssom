import styles from "@/styles/pages/goal.module.scss";
import { useRouter } from 'next/router';
import SideBar from '@/components/shared/SideBar';
import { dateBefore } from '@/utils/DateTimeFormatter';
import Todo from '@/components/goal/Todo';
import { useQuery } from 'react-query';
import { GOAL } from '@/constants/keys';
import { getGoal } from '@/interfaces/goal/api';
import Head from 'next/head';
import { useAddTodo } from '@/hooks/useAddTodo';
import { useToggleTodoMutation } from '@/interfaces/todo/mutation';

export default function Goal() {
  const router = useRouter();
  const { slug } = router.query;
  const { data } = useQuery([GOAL, slug], () => getGoal(slug));
  const addTodo = useAddTodo({
    goalId: slug
  });
  const toggleMutation = useToggleTodoMutation(slug);

  return (
    <>
      <Head>
        <title>{data?.content} | 쏨</title>
      </Head>
      <SideBar />
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.title}>
            <button className={styles.back}
                    onClick={router.back}
            >
              &lt;
            </button>
            {data?.content}
          </div>
          <p className={styles.date}>
            {data?.createdAt.substr(0, 10)} ~ {data?.completedAt} ({dateBefore(data?.completedAt)})
          </p>
        </div>
        <div className={styles.progress}>
          <div className={styles.percentage}
               style={{
                 width: `${data?.progress}%`
               }}
          >
            <div className={styles.percentageInner}>
              {
                data?.progress > 25 &&
                <img src="/images/rocket.svg" alt="rocket" className={styles.rocket} />
              }
            </div>
          </div>
        </div>
        <div className={styles.todoList}>
          {data?.todoList.map((t: {
            content: string,
            status: 'STARTED' | 'COMPLETED' | 'DELETED'
            id: number
          }) => (
            <Todo
              key={t.id}
              id={t.id}
              content={t.content}
              status={t.status}
              toggle={() => toggleMutation.mutate(String(t.id))}
            />
          ))}
          <input
            type="text"
            value={addTodo.data.content}
            onKeyPress={addTodo.onEnter}
            onChange={addTodo.handleData}
            name="content"
            className={styles.input}
            placeholder="+ 할 일 추가하기"
          />
        </div>
      </main>
    </>
  )
}
