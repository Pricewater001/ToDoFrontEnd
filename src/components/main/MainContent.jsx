import TasksList from "./TasksList"
import styles from './MainContent.module.css'

function MainContent() {
  return (
    <div className={styles.container}>
      <TasksList />
    </div>
  )
}

export default MainContent
