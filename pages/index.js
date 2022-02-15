//IMPORTS
//import Head from '@components/Head/Head'
import Head from 'next/head'
import ContentGrid from '@components/ContentGrid'
import GridCell from '@components/GridCell'
//import Bookmarks from '@components/Bookmarks'
//import LocalApps from '@components/LocalApps'
//import DateTime from '@components/DateTime'
//import Caution from '@components/Caution'
//import D3Icon from '@components/D3Icon'

// module components moved inside Dashboard component
import Dashboard from '@components/Dashboard'


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
     

      {/*<ContentGrid>

        <GridCell heading="Bookmarks" classname="">
          <Bookmarks/>
        </GridCell>

        <GridCell heading="Local Apps" classname="">
          <LocalApps/>
        </GridCell>

        <GridCell heading="TO DO" classname="">
          <Caution>UNDER CONSTRUCTION</Caution>
        </GridCell>

        <GridCell heading="3D Transforms" classname="">
          <D3Icon></D3Icon>
        </GridCell>

        <GridCell heading="Dev Tools" classname="">
          <Caution>UNDER CONSTRUCTION</Caution>
        </GridCell>

        <GridCell heading="Date &amp; Weather" classname="">
          <Caution>UNDER CONSTRUCTION</Caution>
        </GridCell>

      </ContentGrid>*/}

        
      <Dashboard/>

       
          
          {/*<GridCell>
            <Bookmarks/>
          </GridCell>

          <GridCell>
            <AppLauncher/>
          </GridCell>

          <GridCell>
            <Time/>
            <CustomHR/>
            <Weather/>
          </GridCell>

          <GridCell>
            <ToDo/>
          </GridCell>

          <GridCell>
            <IncomingMessage/>
          </GridCell>*/}

        
     
    </>
  )
}
