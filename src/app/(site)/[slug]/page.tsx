import { getPage } from '@/sanity/sanity-utils'
import styles from './page.module.css'

import React from 'react'
import { PortableText } from '@portabletext/react'

type Props = {
  params: {
    slug: string
  }
}

const Page = async ({ params }: Props) => {
  const page = await getPage(params.slug)
  return (
    <div className={styles.container}>
      <h1>{page.title}</h1>
      <div className={styles.content}>
        <PortableText value={page.content} />
      </div>
    </div>
  )
}

export default Page
