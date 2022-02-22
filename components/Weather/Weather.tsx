import styles from './styles.module.scss'
import ReactWeather, { useOpenWeather } from 'react-open-weather';

const { data, isLoading, errorMessage } = useOpenWeather({
    key: '359ee762ac121057ddc8fc321cb0c8da',
    lat: '40.304640',
    lon: '-75.127194',
    lang: 'en',
    unit: 'imperial', // values are (metric, standard, imperial)
  });

export default function Weather({ 
	children,
  className,
}) {
  return (
    <div className={styles.Weather}>
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="Doylestown"
        unitsLabels={{ temperature: 'F', windSpeed: 'mph' }}
        showForecast
      />    
    </div>
  )
}
