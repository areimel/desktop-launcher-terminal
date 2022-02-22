import styles from './styles.module.scss'

export default function Bookmarks({ 
	children,
  className,
  subSet
}) {
  return (
    <div className={styles.Bookmarks}>


      {subSet == "web" &&
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
      }

      {subSet == "dev" &&
        <ul className={styles.list + " "}>
         <li>
           <a href="https://app.netlify.com/teams/areimel/overview" target="_blank">
             Netlify
           </a>
         </li>

         <li>
           <a href="https://shadows.brumm.af/" target="_blank">
             Fancy Shadows
           </a>
         </li>

         <li>
           <a href="https://unminify.com/" target="_blank">
             UnMinify
           </a>
         </li>

         <li>
           <a href="https://www.transparenttextures.com/" target="_blank">
             Textures
           </a>
         </li>

         <li>
           <a href="https://web.dev/measure/" target="_blank">
             web.dev
           </a>
         </li>

         <li>
           <a href="https://developers.facebook.com/tools/debug/" target="_blank">
             Share Debug
           </a>
         </li>

       </ul>
      }
      
    </div>
  )
}
