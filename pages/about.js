import styles from '../styles/About.module.scss'

const About = () => {
  return (
    <>
      <section className={styles.about}>
        <div className={styles.about__bioImage}>
          <div className={styles.about__bio}>
            <h2 className={styles.secondaryText}>BIO</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              culpa sapiente rerum dolores aliquam, fugiat eveniet commodi. Vel,
              nihil, numquam possimus deserunt officiis rerum in omnis error
              esse iusto quas.
            </p>
          </div>
        </div>

        <div className={styles.jobs}>
          <div className={styles.jobs__job}>
            <h2 className={styles.secondaryText}>2017 - Current</h2>
            <h3>Google</h3>
            <h6>Full Stack Developer</h6>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              vero dolores eum ut, culpa ullam quis quasi exercitationem in
              adipisci.
            </p>
          </div>
          <div className={styles.jobs__job}>
            <h2 className={styles.secondaryText}>2015 - 2017</h2>
            <h3>Microsoft</h3>
            <h6>Front End Developer</h6>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              vero dolores eum ut, culpa ullam quis quasi exercitationem in
              adipisci.
            </p>
          </div>
          <div className={styles.jobs__job}>
            <h2 className={styles.secondaryText}>2012 - 2015</h2>
            <h3>Web Design Co.</h3>
            <h6>Graphic Designer</h6>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              vero dolores eum ut, culpa ullam quis quasi exercitationem in
              adipisci.
            </p>
          </div>
        </div>

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

export default About
