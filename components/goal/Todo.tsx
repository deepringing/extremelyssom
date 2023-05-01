import styles from "@/styles/components/todo.module.scss";

type Props = {
  content: string,
  status: 'STARTED' | 'COMPLETED' | 'DELETED'
}

export default function Todo({ content, status }: Props) {

  return (
    <>
    <label className={`${styles.label} ${status === 'COMPLETED' ? styles.checked : null}`}>
      <input className={styles.check} type="checkbox" checked={status === 'COMPLETED'}/>
      {content}
    </label>
    </>
  )
}
