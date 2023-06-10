import styles from "@/styles/components/goal.module.scss";
import { dateBefore } from '@/utils/DateTimeFormatter';
import Link from 'next/link';

type Props = {
  id: number,
  content: string,
  completedAt: string,
  progress: number,
};

export default function Goal({ id, content, completedAt, progress }: Props) {
  return (
    <Link href={`/goal/${id}`} className={styles.goal}>
      <div className={styles.progress}>
        <div className={styles.percentage}
             style={{
               width: `${progress}%`
             }}
        />
      </div>
      <p className={styles.title}>{content}</p>
      <p className={styles.completedAt}>{dateBefore(completedAt)}</p>
    </Link>
  )
}
