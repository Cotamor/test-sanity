import Link from 'next/link'
import styles from './navbar.module.css'
import React from 'react'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/" className={styles.logo}>
          Edasaki
        </Link>
        <div className={styles.links}>
          <Link href="#" className={styles.link}>
            link
          </Link>
          <Link href="#" className={styles.link}>
            link
          </Link>
          <Link href="#" className={styles.link}>
            link
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
