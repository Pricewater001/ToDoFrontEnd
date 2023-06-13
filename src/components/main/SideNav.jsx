import styles from './SideNav.module.css'

function SideNav() {
  return (
    <div className={styles.container}>
      <ul>
        <a href="">
          <li> FAQs </li>
        </a>
        <a href="">
          <li> How-to Guides</li>
        </a>
        <a href="">
          <li> Contact Us </li>
        </a>
      </ul>
    </div>
  )
}

export default SideNav
