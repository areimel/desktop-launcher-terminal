//IMPORTS
//import Head from '@components/Head/Head'
import Head from 'next/head'
import DotBG from '@components/DotBG'
import DateTime from '@components/DateTime'

// module components moved inside Dashboard component
import FullScreenLayout from '@components/FullScreenLayout'
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
      }, // will be passed to the page component as props
  }
}

export default function Home(props) {
  return (
    <FullScreenLayout>
      <Head>
        <title>Terminal Launcher</title>
      </Head>

      
     
    </FullScreenLayout>
  )
}
