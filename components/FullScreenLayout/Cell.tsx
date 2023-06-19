import styles from './styles.module.scss'

export default function Cell({ 
	children,
  augStyle,
}) {
  return (
    <div 
      className={styles.Cell +" "}
      data-augStyle={augStyle}

      data-augmented-ui="
        tl-clip tr-clip br-clip-y bl-clip border
      "
    >
     {children}
    </div>
  )
}
