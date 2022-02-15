import styles from './styles.module.scss'
import Clock from 'react-live-clock';

export default function DateTime({ 
	children,
  className,
}) {
  return (
    <div className={styles.DateTime}>
      <div className={styles.cell +' '+ styles.day}>
        <span>Today is </span>
        <Clock
          format={'dddd'}
          timezone={'America/New_York'} 
          //check date every 2hrs
          interval={7200000} ticking={true}
        />
        <span>,</span>
      </div>

      <div className={styles.cell +' '+ styles.month}>
        <Clock
          format={'MMMM Mo, YYYY'}
          timezone={'America/New_York'} 
          //check date every 24hrs
          interval={86400000} ticking={true}
        />
      </div>

      <div className={styles.cell +' '+ styles.clock}>
        <Clock
          format={'h:mm:ss A'}
          timezone={'America/New_York'} 
          interval={1000} ticking={true}
          className={styles.clockMain}
        />
      </div>
      
      
    </div>
  )
}
