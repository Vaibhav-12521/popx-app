import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FloatingInput from '../components/FloatingInput.jsx'
import styles from './Login.module.css'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const isValid = email.trim() !== '' && password.trim() !== ''

  const handleLogin = (e) => {
    e.preventDefault()
    if (!isValid) return
    localStorage.setItem(
      'popx-user',
      JSON.stringify({ name: 'Marry Doe', email }),
    )
    navigate('/account')
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>
        Signin to your
        <br />
        PopX account
      </h1>
      <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <form onSubmit={handleLogin}>
        <FloatingInput
          id="email"
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email address"
        />
        <FloatingInput
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />

        <button
          type="submit"
          className={`${styles.loginBtn} ${isValid ? styles.active : ''}`}
          disabled={!isValid}
        >
          Login
        </button>
      </form>
    </div>
  )
}
