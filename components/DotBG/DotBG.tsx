import styles from './styles.module.scss'

export default function DotBG({ 
	children,
  className,
}) {
  return (
    <div className={styles.DotBG}>
      <p className={styles.inner}>
        {children}
      </p>
    </div>
  )
}
