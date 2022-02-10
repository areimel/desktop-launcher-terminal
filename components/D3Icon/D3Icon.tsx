import styles from './styles.module.scss'

export default function D3Icon({ 
	children,
  className,
}) {
  return (
    <div className={styles.D3Icon}>
      {children}
      <i className="fas fa-code"></i>
      Sandoz Computing Research
    </div>
  )
}
