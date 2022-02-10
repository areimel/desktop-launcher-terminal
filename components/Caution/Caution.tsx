import styles from './styles.module.scss'

export default function Caution({ 
	children,
  className,
}) {
  return (
    <div className={styles.Caution}>
      <p className={styles.inner}>
        {children}
      </p>
    </div>
  )
}
