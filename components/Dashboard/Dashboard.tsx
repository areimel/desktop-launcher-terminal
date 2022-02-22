import styles from './styles.module.scss'
import styled from "styled-components";

import Bookmarks from '@components/Bookmarks'
import LocalApps from '@components/LocalApps'
import Caution from '@components/Caution'
import DotBG from '@components/DotBG'
import DateTime from '@components/DateTime'
import Weather from '@components/Weather'
import FilterImage from '@components/FilterImage'


const Component = styled.div`
    
`;

const Cell = styled.div`
    width: ${props => props.width || "25%"};
`;

export default function Dashboard({ 
	children,
  classname,
  heading,
  angle,
}) {
  return (
    <Component 
      className={ styles.Component +' '+ classname}
    >
      <Cell 
        className={styles.Cell}
        width="20%"
      >
        <h2>Bookmarks</h2>
        <Bookmarks subSet="web" />
      </Cell>

      <Cell 
        className={styles.Cell}
        width="20%"
      >
        <h2>Local Apps</h2>
        <LocalApps/>
      </Cell>

      <Cell 
        className={styles.Cell}
        width="60%"
      >
        <DotBG>
          <DateTime/>
          {/*<Weather/>*/}
        </DotBG>
      </Cell>

      <Cell 
        className={styles.Cell}
        width="40%"
      >
        <FilterImage
          image="/img/daily-img/given-1.jpg"
        />
      </Cell>

      <Cell 
        className={styles.Cell}
        width="20%"
      >
        <h2>DEV LINKS</h2>
        <Bookmarks subSet="dev" />
      </Cell>

      <Cell 
        className={styles.Cell}
        width="20%"
      >
        <Caution>MUSIC LINKS</Caution>
      </Cell>

      <Cell 
        className={styles.Cell}
        width="20%"
      >
        <Caution>ART LINKS</Caution>
      </Cell>

    </Component>
  )
}
