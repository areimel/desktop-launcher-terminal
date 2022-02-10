import styles from './styles.module.scss'

export default function LocalApps({ 
	children,
  className,
}) {
  return (
    <div className={styles.LocalApps}>
      <ul className={styles.list + " "}>
        
        <li>
          <a href="#/" target="_blank">
            Photoshop
          </a>
        </li>
        

        <li>
          <a href="#" target="_blank">
            Reaper
          </a>
        </li>

        <li>
          <a href="#" target="_blank">
            Git
          </a>
        </li>

        <li>
          <a href="#" target="_blank">
            CMD
          </a>
        </li>

        <li>
          <a href="#" target="_blank">
            PuTTy
          </a>
        </li>

        <li>
          <a href="#" target="_blank">
            Screenshot
          </a>
        </li>

        <li>
          <a href="#" target="_blank">
            Calc
          </a>
        </li>

        


      </ul>
    </div>
  )
}
