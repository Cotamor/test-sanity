import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.copy}>
        @{new Date().getFullYear()} Edasaki. All rights reserved.
      </div>
      <div className={styles.socials}>
        <a href="#" target="_blank" rel="noopener  noreferrer" className={styles.link}>
          Twitter
        </a>
        <a href="#" target="_blank" rel="noopener  noreferrer">
          Youtube
        </a>
      </div>
    </div>
  )
}

export default Footer
