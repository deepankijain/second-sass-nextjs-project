import styles from '../styles/Contact.module.scss'

const Contact = () => {
  return (
    <>
      <section className={styles.contact}>
        <h2>Contact Me..</h2>

        <div className={styles.contact__list}>
          <div className={styles.contact__email}>
            <i className='fas fa-envelope'></i> Email
            <div className={styles.secondaryText}>email@email.com</div>
          </div>
          <div className={styles.contact__phone}>
            <i className='fas fa-mobile-alt'></i> Phone
            <div className={styles.secondaryText}>+1 (555) 555-5555</div>
          </div>
          <div className={styles.contact__address}>
            <i className='fas fa-marker-alt'></i> Address
            <div className={styles.secondaryText}>
              123 First St. Houston, TX
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

export default Contact
