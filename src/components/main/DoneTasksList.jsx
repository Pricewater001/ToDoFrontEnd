import styles from "./DoneTasksList.module.css";
import DoneCard from "./DoneCard";

function DoneTasksList() {
  //   const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Completed Tasks</h2>
        </div>
        <DoneCard
          title="Task 3"
          description="edit code"
          button1="Remove"
          button2="Mark as incomplete"
        />
      </div>
    </>
  );
}

export default DoneTasksList;
