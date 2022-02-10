import styles from './styles.module.scss'

export default function Bookmarks({ 
	children,
  className,
}) {
  return (
    <div className={styles.Bookmarks}>
      <ul className={styles.list + " "}>
        
        <li>
          <a href="http://www.reddit.com/" target="_blank">
            Reddit
          </a>
        </li>

        <li>
          <a href="https://open.spotify.com/" target="_blank">
            Spotify
          </a>
        </li>

        <li>
          <a href="https://www.facebook.com/messages/t" target="_blank">
            Messager
          </a>
        </li>

        <li>
          <a href="https://www.youtube.com/" target="_blank">
            YouTube
          </a>
        </li>

        <li>
          <a href="https://reverb.com/" target="_blank">
            Reverb
          </a>
        </li>

        <li>
          <a href="https://smile.amazon.com/" target="_blank">
            Amazon
          </a>
        </li>

        


      </ul>
    </div>
  )
}
