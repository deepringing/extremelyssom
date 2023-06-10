import styles from "@/styles/components/add-modal.module.scss";
import Modal from "react-modal";
import { ChangeEvent } from 'react';

interface Props extends Modal.Props {
  title: string,
  onClick: () => void,
  data: string,
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  name: string
}

export default function AddModal({ title, onClick, data, handleChange, name, isOpen, onRequestClose }: Props) {

  return (
    <Modal
      isOpen={isOpen}
      className={styles.addModal}
      onRequestClose={onRequestClose}
    >
      <p className={styles.title}>
        {title}
      </p>
      <input
        type={"text"}
        value={data}
        onChange={handleChange}
        className={styles.input}
        name={name}
      />
      <button className={styles.button} onClick={onClick}>
        확인
      </button>
    </Modal>
  )
}
