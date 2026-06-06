import styles from './AccountSettings.module.css'

function getUser() {
  try {
    const stored = JSON.parse(localStorage.getItem('popx-user'))
    if (stored?.name) return stored
  } catch {
    /* ignore malformed storage */
  }
  return { name: 'Marry Doe', email: 'Marry@Gmail.Com' }
}

export default function AccountSettings() {
  const user = getUser()

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Account Settings</h1>
      </header>

      <section className={styles.body}>
        <div className={styles.profile}>
          <div className={styles.avatarWrap}>
            <img
              className={styles.avatar}
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt={user.name}
            />
            <span className={styles.cameraBadge} aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff">
                <path d="M9 3L7.17 5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.17L15 3H9zm3 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
              </svg>
            </span>
          </div>
          <div className={styles.info}>
            <p className={styles.name}>{user.name}</p>
            <p className={styles.email}>{user.email}</p>
          </div>
        </div>

        <p className={styles.bio}>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </section>
    </div>
  )
}
