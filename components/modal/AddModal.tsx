import styles from "@/styles/components/add-modal.module.scss";
import Modal from "react-modal";
import { ReactNode } from 'react';

interface Props extends Modal.Props {
  title: string,
  onClick: () => void,
  children: ReactNode
}

export default function AddModal({ title, onClick, children, isOpen, onRequestClose }: Props) {

  return (
    <Modal
      isOpen={isOpen}
      className={styles.addModal}
      onRequestClose={onRequestClose}
    >
      <p className={styles.title}>
        {title}
      </p>
      {children}
      <button className={styles.button} onClick={onClick}>
        확인
      </button>
    </Modal>
  )
}
