//IMPORTS
//import Head from '@components/Head/Head'
import Head from 'next/head'
import ContentGrid from '@components/ContentGrid'
import GridCell from '@components/GridCell'
import Bookmarks from '@components/Bookmarks'
//import LocalApps from '@components/LocalApps'
//import DateTime from '@components/DateTime'
//import Caution from '@components/Caution'
//import D3Icon from '@components/D3Icon'

import DotBG from '@components/DotBG'
import DateTime from '@components/DateTime'

// module components moved inside Dashboard component
import Dashboard from '@components/Dashboard'
import ThreeDashboard from '@components/ThreeDashboard'
import AugmentedCell from '@components/AugmentedCell'
import Caution from '@components/Caution'
import FilterImage from '@components/FilterImage'


//VARS
export async function getStaticProps() {
  
  //General Page VARS
	  let title = "Initial Component Demo"
	  let author = "Alec Reimel"
	  let authorTeam = "Planet Caravan Studios"
	  let description ="\
		This is the inital demo template for Holy Mountain frontend components.  \
		Clone this page out for demoing new components.\
	  "
	  let contentProps = 'N/A'
	  let libraries = "N/A"
	  
	  let footerMessage = "Created by Planet Caravan Studios"
  
  //Component Content
  	let contentLeft = "Lorum Ipsum Dolor"

    return {
      props: {
        title,
        author,
        authorTeam,
        description,
        contentProps,
        libraries,
        footerMessage,
        contentLeft,
      }, // will be passed to the page component as props
  }
}

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Terminal Launcher</title>
      </Head>

      <Dashboard/>

      <br/>
      <hr/>
      <br/>

      <section className="flexRow" data-flex="start">
         <AugmentedCell augStyle="aug1" heading="Aug Cell 1">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </AugmentedCell>

         <AugmentedCell augStyle="aug2" heading="Aug Cell 2">
           <DateTime/>
        </AugmentedCell>  

        <AugmentedCell augStyle="aug3" heading="Aug Cell 3">
           <Caution>WARNING | DANGER</Caution>
        </AugmentedCell> 

         <AugmentedCell augStyle="aug3" heading="Aug Cell 2">
          <FilterImage
            image="/img/daily-img/given-1.jpg"
          />
        </AugmentedCell>  

      </section>

      <br/>
      <hr/>
      <br/>

      <ThreeDashboard/>
     
    </>
  )
}
