import Link from 'next/link'
import styles from './navbar.module.css'
import React from 'react'
import { getPages } from '@/sanity/sanity-utils'

const Navbar = async () => {
  const pages = await getPages()
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <span className="gradient_hawaii">Edasaki</span>
      </Link>
      <div className={styles.links}>
        {pages.map((page) => (
          <Link href={`/${page.slug}`} key={page._id} className={styles.link}>
            {page.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar
