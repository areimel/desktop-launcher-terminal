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
            Saturn V
          </h1>
          <p>COMMAND MODULE</p>
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
