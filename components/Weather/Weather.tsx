import styles from './styles.module.scss'
import ReactWeather, { useOpenWeather } from 'react-open-weather';



export default function Weather({ 
	children,
  className,
}) {

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '359ee762ac121057ddc8fc321cb0c8da',
    lat: '40.304640',
    lon: '-75.127194',
    lang: 'en',
    unit: 'imperial', // values are (metric, standard, imperial)
  });

    const customStyles = {
      fontFamily:  'commodore_64_pixelizedregular',
      gradientStart:  'transparent',
      gradientMid:  'transparent',
      gradientEnd:  'transparent',
      locationFontColor:  '#FFF',
      todayTempFontColor:  '#FFF',
      todayDateFontColor:  '#fff',
      todayRangeFontColor:  '#fff',
      todayDescFontColor:  '#fff',
      todayInfoFontColor:  '#fff',
      todayIconColor:  '#FFB000',
      forecastBackgroundColor:  'transparent',
      forecastSeparatorColor:  '#FFB000',
      forecastDateColor:  '#fff',
      forecastDescColor:  '#fff',
      forecastRangeColor:  '#fff',
      forecastIconColor:  '#FFB000',
    };

  return (
    <div className={styles.Weather}>
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="Doylestown, PA"
        unitsLabels={{ temperature: 'F', windSpeed: 'mph' }}
        showForecast
        theme={customStyles}
      />    
    </div>
  )
}
