import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FloatingInput from '../components/FloatingInput.jsx'
import styles from './CreateAccount.module.css'

const initialForm = {
  fullName: 'Marry Doe',
  phone: '+1 234 567 8900',
  email: 'marry@gmail.com',
  password: 'Marry@123',
  company: 'PopX',
  isAgency: 'yes',
}

export default function CreateAccount() {
  const navigate = useNavigate()
  const [form, setForm] = useState(initialForm)

  const update = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem(
      'popx-user',
      JSON.stringify({
        name: form.fullName || 'Marry Doe',
        email: form.email || 'Marry@Gmail.Com',
      }),
    )
    navigate('/account')
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>
        Create your
        <br />
        PopX account
      </h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <FloatingInput
          id="fullName"
          label="Full Name"
          value={form.fullName}
          onChange={update('fullName')}
          placeholder="Enter full name"
          required
        />
        <FloatingInput
          id="phone"
          label="Phone number"
          value={form.phone}
          onChange={update('phone')}
          placeholder="Enter phone number"
          required
        />
        <FloatingInput
          id="email"
          label="Email address"
          type="email"
          value={form.email}
          onChange={update('email')}
          placeholder="Enter email address"
          required
        />
        <FloatingInput
          id="password"
          label="Password"
          type="password"
          value={form.password}
          onChange={update('password')}
          placeholder="Enter password"
          required
        />
        <FloatingInput
          id="company"
          label="Company name"
          value={form.company}
          onChange={update('company')}
          placeholder="Enter company name"
        />

        <p className={styles.radioQuestion}>
          Are you an Agency?<span className={styles.asterisk}>*</span>
        </p>
        <div className={styles.radioGroup}>
          <label className={styles.radioOption}>
            <input
              type="radio"
              name="isAgency"
              value="yes"
              checked={form.isAgency === 'yes'}
              onChange={update('isAgency')}
            />
            <span>Yes</span>
          </label>
          <label className={styles.radioOption}>
            <input
              type="radio"
              name="isAgency"
              value="no"
              checked={form.isAgency === 'no'}
              onChange={update('isAgency')}
            />
            <span>No</span>
          </label>
        </div>

        <button type="submit" className={styles.submitBtn}>
          Create Account
        </button>
      </form>
    </div>
  )
}
