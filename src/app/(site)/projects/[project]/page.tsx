import { getProject } from '@/sanity/sanity-utils'
import styles from './page.module.css'
import React from 'react'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'

type Props = {
  params: { project: string }
}

const Project = async ({ params }: Props) => {
  const slug = params.project
  const project = await getProject(slug)

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <span className="gradient_hawaii">{project.name}</span>
        </h1>
        <a
          href={project.url ? project.url : '#'}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          View Project
        </a>
      </div>
      {/* content */}
      <div className={styles.content}>
        <PortableText value={project.content} />
      </div>
      {/* image */}
      <div className={styles.imageContainer}>
        <Image
          alt={project.name}
          src={project.image}
          fill
          className={styles.image}
        />
      </div>
    
    </div>
  )
}

export default Project
