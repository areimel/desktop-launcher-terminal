import styles from './styles.module.scss'

export default function ContentGrid({ 
	children,
  className,
}) {
  return (
    <div 
      className={ styles.grid +' '+ className}>
      {children}
    </div>
  )
}
