import styles from './Footer.module.css'

function Footer() {
  return (
    <>
    <div className={styles.container}>
        <p>
         ©2023 PwC. All rights reserved. PwC refers to the PwC network and/or one or more of its member firms, each of which is a separate legal entity. Please see pwc.com/structure for further details.
        </p>
        <div className={styles.footerLinks}>
            <strong><a href="#">Privacy</a></strong>
            <strong><a href="#">Terms and Conditions</a></strong>
        </div>
    </div>
    </>
  )
}

export default Footer
