import styles from './page.module.css'
import { getProjects } from '@/sanity/sanity-utils'

export default async function Home() {
  const projects = await getProjects()

  return (
    <div className={styles.container}>
      <h1>my projects go here</h1>
      {projects.map((project) => (
        <div className={styles.title} key={project._id}>
          {project.name}
        </div>
      ))}
    </div>
  )
}
