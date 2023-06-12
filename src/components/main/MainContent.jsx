import TasksList from "./TasksList"
import styles from './MainContent.module.css'
import SideNav from "./SideNav"

function MainContent() {
  return (
    <div className={styles.container}>
      <SideNav />
      <TasksList />
    </div>
  )
}

export default MainContent
