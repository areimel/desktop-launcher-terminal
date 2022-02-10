import styles from './styles.module.scss'

export default function Header({ 
	children,
  className,
}) {
  return (
    <nav className={styles.Header}>
      <div>
        <header>
          <h1>Sandoz Computing Institute</h1>
          <ul>
            <li>A better way to think.</li>
            <li>A better way to live.</li>
            <li>A better way to be.</li>
          </ul>
        </header>
      </div>
    </nav>
  )
}
