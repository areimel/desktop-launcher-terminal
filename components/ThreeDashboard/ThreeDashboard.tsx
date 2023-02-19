import styles from './styles.module.scss';
import styled from "styled-components";

import Cell from './Cell.tsx';

export default function ThreeDashboard({ 
	children,
  heading,
  angle,
}) {
  return (
    <div className={ styles.ThreeDashboard}
    >
     
      <div className={styles.row}>
        <Cell angle="TopLeft">
          <p>TopLeft</p>
        </Cell>
        <Cell angle="TopMid">
          <p>TopMid</p>
        </Cell>
        <Cell angle="TopRight">
          <p>TopRight</p>
        </Cell>
      </div>
      
      <div className={styles.row}>
        <Cell angle="MidLeft">
          <p>MidLeft</p>
        </Cell>
        <Cell angle="MidMid">
          <p>MidMid</p>
        </Cell>
        <Cell angle="MidRight">
          <p>MidRight</p>
        </Cell>
      </div>

      <div className={styles.row}>
        <Cell angle="BottomLeft">
          <p>BottomLeft</p>
        </Cell>
        <Cell angle="BottomMid">
          <p>BottomMid</p>
        </Cell>
        <Cell angle="BottomRight">
          <p>BottomRight</p>
        </Cell>
      </div>

    </div>
  )
}
