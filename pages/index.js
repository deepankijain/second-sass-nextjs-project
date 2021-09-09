import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <section className={styles.home}>
        <h2>Hi! My Name Is</h2>
        <h1 className={styles.home__name}>
          Mike <span className={styles.home__nameLast}>Smith</span>
        </h1>
        <h2>Web Developer, Designer & Programmer</h2>

        <div className={styles.socialIcons}>
          <a href='#!'>
            <i className='fab fa-twitter fa-2x'></i>
          </a>
          <a href='#!'>
            <i className='fab fa-facebook fa-2x'></i>
          </a>
          <a href='#!'>
            <i className='fab fa-instagram fa-2x'></i>
          </a>
          <a href='#!'>
            <i className='fab fa-github fa-2x'></i>
          </a>
        </div>
      </section>
    </>
  )
}
