import styles from './FloatingInput.module.css'

export default function FloatingInput({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
}) {
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {required && <span className={styles.asterisk}>*</span>}
      </label>
      <input
        id={id}
        type={type}
        className={styles.input}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}
