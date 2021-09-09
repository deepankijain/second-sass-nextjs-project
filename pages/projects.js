import styles from '../styles/Projects.module.scss'

const ProjectsPage = () => {
  return (
    <>
      <section className={styles.projects}>
        <div className={styles.projects__bioImage}>
          <h1 className={styles.secondaryText}>My Projects</h1>
        </div>

        <div className={styles.projects__items}>
          <div className={styles.projects__item}>
            <img src='/project-1.jpg' alt='My Project' />
            <div className={styles.projects__btns}>
              <a href='#!' className={styles.projects__btn}>
                <i className='fas fa-eye'></i> Preview
              </a>
              <a href='#!' className={styles.projects__btn}>
                <i className='fab fa-github'></i> Github
              </a>
            </div>
          </div>
          <div className={styles.projects__item}>
            <img src='/project-2.jpg' alt='My Project' />
            <div className={styles.projects__btns}>
              <a href='#!' className={styles.projects__btn}>
                <i className='fas fa-eye'></i> Preview
              </a>
              <a href='#!' className={styles.projects__btn}>
                <i className='fab fa-github'></i> Github
              </a>
            </div>
          </div>
          <div className={styles.projects__item}>
            <img src='/project-1.jpg' alt='My Project' />
            <div className={styles.projects__btns}>
              <a href='#!' className={styles.projects__btn}>
                <i className='fas fa-eye'></i> Preview
              </a>
              <a href='#!' className={styles.projects__btn}>
                <i className='fab fa-github'></i> Github
              </a>
            </div>
          </div>
          <div className={styles.projects__item}>
            <img src='/project-2.jpg' alt='My Project' />
            <div className={styles.projects__btns}>
              <a href='#!' className={styles.projects__btn}>
                <i className='fas fa-eye'></i> Preview
              </a>
              <a href='#!' className={styles.projects__btn}>
                <i className='fab fa-github'></i> Github
              </a>
            </div>
          </div>
          <div className={styles.projects__item}>
            <img src='/project-1.jpg' alt='My Project' />
            <div className={styles.projects__btns}>
              <a href='#!' className={styles.projects__btn}>
                <i className='fas fa-eye'></i> Preview
              </a>
              <a href='#!' className={styles.projects__btn}>
                <i className='fab fa-github'></i> Github
              </a>
            </div>
          </div>
          <div className={styles.projects__item}>
            <img src='/project-2.jpg' alt='My Project' />
            <div className={styles.projects__btns}>
              <a href='#!' className={styles.projects__btn}>
                <i className='fas fa-eye'></i> Preview
              </a>
              <a href='#!' className={styles.projects__btn}>
                <i className='fab fa-github'></i> Github
              </a>
            </div>
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

export default ProjectsPage
