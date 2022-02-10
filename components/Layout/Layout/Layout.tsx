import styles from './styles.module.scss'
import styled from "styled-components";

import Head from 'next/head'
import MasterJS from '@components/Layout/MasterJS/MasterJS'
import MasterCSS from '@components/Layout/MasterCSS/MasterCSS'


const Cell = styled.div`

`;


export default function Layout({ 
	children,
  classname,
}) {
	return (
		<>
			<Head>
				<MasterCSS/>
			</Head>

			<div className={styles.noise}></div>

			<div className={styles.overlay}></div>

			<main className={styles.layoutOuter} >
				{/*<Heading>
				  <HeadingMain/>
				  <ThemeSelector/>
				</Heading>*/}
	  		<div className={styles.layoutInner}>
	  			
	  			{children}

	  		</div>
			</main>
			<MasterJS/>
		</>
	)
}
