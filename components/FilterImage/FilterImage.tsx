import styles from './styles.module.scss'

export default function FilterImage({ 
	children,
  className,
  image,
  alt,
}) {
  return (
    <div className={styles.centerWrapper}>
      <div className={styles.FilterImage}>
        <div className={styles.colorFilter}></div>
        <img src={image} alt={alt} />
      </div>
    </div>    
  )
}
