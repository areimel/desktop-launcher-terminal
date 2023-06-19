import styles from './styles.module.scss';
import styled from "styled-components";
import DotBG from '@components/DotBG'
import Cell from './Cell.tsx';

import FilterImage from '@components/FilterImage'
import AugmentedCell from '@components/AugmentedCell'

export default function FullScreenLayout({ 
	children,
  heading,
  augStyle,
}) {
  
  //JS goes here

  return (
    <div className={styles.outer} data-augStyle={augStyle}>

      <div className={styles.gridParent}>
        {/*Left Side*/}
        <div className={styles.cellLeftTop}>
          <FilterImage
            image="/img/daily-img/given-1.jpg"
          />
        </div>
        <div className={styles.cellLeftBottom}>
          <AugmentedCell augStyle="aug1" heading="Grid Cell Center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </AugmentedCell>
        </div>

        {/*Center*/}
        <div className={styles.cellCenter}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br/><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br/><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>

        {/*Right Side*/}
        <div className={styles.cellRightTop}>
          <AugmentedCell augStyle="aug1" heading="Grid Cell Center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </AugmentedCell>
        </div>
        <div className={styles.cellRightBottom}>
          <FilterImage
            image="/img/semiotic/life-support-system.png"
          />
        </div>
      </div>

    </div>
  )
}
