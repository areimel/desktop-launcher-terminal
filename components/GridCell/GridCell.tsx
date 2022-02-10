import styles from './styles.module.scss'
import styled from "styled-components";

const Cell = styled.div`
  
  &.angleLeft_1{
    transform:
      perspective(1000px)
      rotateX(-5deg)
      rotateY(5deg)
      rotateZ(2deg);

      .inner{
         box-shadow: -10px -10px 15px 0 rgba(255,255,255, 0.8);

        /*&::before {
          content: ' ';
          width: 100%;
          height: 100%;
          position: absolute;
          border: solid 5px rgba(255,255,255, 0.8);
          background-color: transparent;
          transform: translateZ(4rem);
        }*/
      }
   
  }

  &.angleRight_1{
    transform:
      perspective(1000px)
      rotateX(-5eg)
      rotateY(-5deg)
      rotateZ(-2deg);
    .inner{
       box-shadow: 10px -10px 15px 0 rgba(255,255,255, 0.8);
    }
  }

  &.anglelLeft_2{
    transform:
      perspective(1000px)
      rotateX(-3deg)
      rotateY(3deg)
      rotateZ(0deg);
    .inner{
       box-shadow: -10px -5px 15px 0 rgba(255,255,255, 0.8);
    }
  }

  &.angleRight_2{
    transform:
      perspective(1000px)
      rotateX(-3deg)
      rotateY(0deg)
      rotateZ(-3deg);
    .inner{
       box-shadow: 10px -10px 15px 0 rgba(255,255,255, 0.8);
    }
  }
`;

export default function GridCell({ 
	children,
  classname,
  heading,
  angle,
}) {
  return (
    <Cell 
      className={ styles.outer +' '+ classname}
      angle={angle}
    >
      <div className={styles.inner + " inner"}>
        <div className={styles.heading}>
          <h2>{heading}</h2>
        </div>
        <div className={styles.content}>
          {children}
        </div>
        
      </div>
    </Cell>
  )
}
