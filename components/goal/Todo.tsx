import styles from "@/styles/components/todo.module.scss";

type Props = {
  content: string,
  status: 'STARTED' | 'COMPLETED' | 'DELETED'
  id: number,
  toggle: () => void
}

export default function Todo({ content, status, toggle }: Props) {

  return (
    <>
      <label
        className={`${styles.label} ${status === 'COMPLETED' ? styles.checked : null}`}
        onClick={toggle}
      >
        <input className={styles.check} type="checkbox" checked={status === 'COMPLETED'} />
        {content}
      </label>
    </>
  )
}
