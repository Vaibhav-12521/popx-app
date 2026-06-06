import { useNavigate } from 'react-router-dom'
import styles from './Welcome.module.css'

export default function Welcome() {
  const navigate = useNavigate()

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to PopX</h1>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <button
          className={`${styles.btn} ${styles.btnPrimary}`}
          onClick={() => navigate('/register')}
        >
          Create Account
        </button>
        <button
          className={`${styles.btn} ${styles.btnSecondary}`}
          onClick={() => navigate('/login')}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  )
}
