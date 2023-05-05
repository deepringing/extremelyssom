import styles from "@/styles/components/add-member-modal.module.scss";
import Modal from "react-modal";

interface Props extends Modal.Props {
}

export default function AddMemberModal({ isOpen, onRequestClose }: Props) {

  return (
    <Modal
      isOpen={isOpen}
      className={styles.addMemberModal}
      onRequestClose={onRequestClose}
    >
      <p className={styles.title}>
        다울림에 멤버 추가
      </p>
      <button className={styles.button}>
        확인
      </button>
    </Modal>
  )
}
