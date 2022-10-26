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

      <Dashboard/>
     
    </>
  )
}
