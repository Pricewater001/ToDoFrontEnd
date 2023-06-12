import styles from './Header.module.css'
import PwCLogo from '../../assets/PwC_Outline_Logo_Black_RGB_cropped.png'
import searchIcon from '../../assets/PwC_Funct_Icons_Search_Outline_Black_RGB.png'
import notification from '../../assets/PwC_Funct_Icons_Notifications_Outline_Black_RGB.png'
import profile from '../../assets/PwC_Funct_Icons_Avatar_Outline_Orange_RGB.png'
import question from '../../assets/PwC_Funct_Icons_HelpQuestion_Outline_Black_RGB.png'


function Header() {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={PwCLogo} alt="PwC Logo" />
                <p>To Do List</p>
            </div>
            {/* <nav className={styles.headerNav}>
                <a href="#">Main</a>
                <a href="#">Contact</a>
                <a href="#">Help</a>
            </nav> */}
            <div className={styles.icons}>
                <img src={searchIcon} alt="" />
                <img src={notification} alt="" />
                <img src={question} alt="" />
                <img className={styles.profile} src={profile} alt="" />
            </div>
        </div>
    </>
  )
}

export default Header
