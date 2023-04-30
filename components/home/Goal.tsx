import styles from "@/styles/components/goal.module.scss";
import { dateBefore } from '@/utils/DateTimeFormatter';
import Link from 'next/link';

type Props = {
  content: string,
  completedAt: string,
  progress: number,
};

export default function Goal({ content, completedAt, progress }: Props) {
  return (
    <Link href={`/goal/${content}`} className={styles.goal}>
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
