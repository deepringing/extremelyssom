import styles from '@/styles/components/plus.module.scss';

export interface Props {
  onClick: () => void
}

export default function Plus({ onClick }: Props) {
  return (
    <button className={styles.plus} onClick={onClick}>
      + 목표 추가
    </button>
  )
}
