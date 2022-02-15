import styles from './styles.module.scss'
import styled from "styled-components";

import Bookmarks from '@components/Bookmarks'
import LocalApps from '@components/LocalApps'
import Caution from '@components/Caution'
import DotBG from '@components/DotBG'


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
        <Bookmarks/>
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
        <DotBG>DATE/TIME/WEATHER</DotBG>
      </Cell>

      <Cell 
        className={styles.Cell}
        width="50%"
      >
        <Caution>DEV TOOLS</Caution>
      </Cell>

      <Cell 
        className={styles.Cell}
        width="25%"
      >
        <Caution>DEV PROJECTS</Caution>
      </Cell>

      <Cell 
        className={styles.Cell}
        width="25%"
      >
        <Caution>TO DO</Caution>
      </Cell>

    </Component>
  )
}
