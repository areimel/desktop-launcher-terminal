import styles from './styles.module.scss';
import styled from "styled-components";

import Cell from './Cell.tsx';

export default function AugmentedTest({ 
	children,
  heading,
  augStyle,
}) {
  return (
    <div className={ styles.AugmentedTest}
    >
     
      <div className={styles.row}>
        <Cell augStyle="aug1">
          <p>TopLeft</p>
        </Cell>
        <Cell augStyle="TopMid">
          <p>TopMid</p>
        </Cell>
        <Cell augStyle="TopRight">
          <p>TopRight</p>
        </Cell>
      </div>
      
     

    </div>
  )
}
