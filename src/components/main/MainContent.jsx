import TasksList from "./TasksList"
import styles from './MainContent.module.css'
import SideNav from "./SideNav"
import DoneTasksList from "./DoneTasksList"

function MainContent() {
  return (
    <div className={styles.container}>
      <SideNav />
      <TasksList />
      <DoneTasksList />
    </div>
  )
}

export default MainContent
