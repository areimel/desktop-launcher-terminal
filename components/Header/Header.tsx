import styles from './styles.module.scss'

export default function Header({ 
	children,
  className,
}) {
  return (
    <nav className={styles.Header}>
      <div>
        <header>
          <h1 className={styles.logo}>
            Sandoz Computing Institute
          </h1>
          {/*<ul>
            <li>A better way to Think.</li>
            <li>A better way to Live.</li>
            <li>A better way to Be.</li>
          </ul>*/}
        </header>
      </div>
    </nav>
  )
}
