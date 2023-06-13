import styles from './DoneTasksList.module.css'
import TaskCard from './TaskCard';

function DoneTasksList() {
//   const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Completed Tasks</h2>
      </div>
      <TaskCard title='Task 3' description='edit code' button1='Remove' button2='Mark as incomplete' />
      </div>
    </>
  )
}

export default DoneTasksList
