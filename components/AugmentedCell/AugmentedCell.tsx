import styles from './styles.module.scss';
import styled from "styled-components";
import DotBG from '@components/DotBG'
import Cell from './Cell.tsx';

export default function AugmentedCell({ 
	children,
  heading,
  augStyle,
}) {
  let augVals = ""

  //Set Augmented-UI styling
  if(augStyle == "aug1"){
    augVals = "tl-clip tr-clip br-clip-y bl-clip border"
  } else if(augStyle == "aug2"){
    augVals = "  tl-clip tr-clip-x br-clip bl-clip border"
  }
  else if(augStyle == "aug3"){
    augVals = "  tl-clip tr-clip-x br-clip bl-clip border"
  }

  return (
    <div className={styles.outer} data-augStyle={augStyle}>

      <div 
        className={styles.AugmentedCell}
        data-augmented-ui={augVals}
        data-augStyle={augStyle}
      >

        {/*Heading*/}
        <div className={styles.heading}>
          <p>{heading}</p>
          <img src="" alt="" loading="eager" />
        </div>

        {/*Main content*/}
        <div className={styles.overflow}>
          {children}
        </div>

      </div>

    </div>
  )
}
