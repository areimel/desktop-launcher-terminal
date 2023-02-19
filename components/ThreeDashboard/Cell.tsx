import styles from './styles.module.scss'

export default function Cell({ 
	children,
  angle,
}) {
  return (
    <div 
      className={styles.Cell}
      data-angle={angle}
    >
     {children}
    </div>
  )
}
