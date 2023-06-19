import Link from 'next/link'
import styles from './page.module.css'
import { getProjects } from '@/sanity/sanity-utils'
import Image from 'next/image'

export default async function Home() {
  const projects = await getProjects()

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>I&apos;m <span className='gradient_hawaii'>Edasaki</span>!</h1>
      <p className={styles.desc}>Konnichiwa everyone! Check out my projects!</p>
      <h2 className={styles.title}>My Projects</h2>
      <div className={styles.projects}>
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className={styles.project}
          >
            {project.image && (
              <Image
                alt={project.slug}
                src={project.image}
                width={350}
                height={270}
                className={styles.img}
              />
            )}
            <div className={styles.projectTitle}>{project.name}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
