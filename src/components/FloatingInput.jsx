import styles from './FloatingInput.module.css'

/**
 * Input with the purple floating label that sits on the top border,
 * matching the PopX form fields. `required` adds the red asterisk.
 */
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
