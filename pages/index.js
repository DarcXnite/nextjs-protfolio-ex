import Head from 'next/head'
import styles from '../styles/Home.module.css'

import About from '../components/about'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Contact from '../components/contact'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <meta name='description' content='Davis Nguyen Portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>Portfolio</h1>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
