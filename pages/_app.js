
import Head from 'next/head'
import Layout from '@components/Layout/Layout'

//Swiper.JS
import 'swiper/swiper.scss';
import 'swiper/components/a11y/a11y.scss';
import 'swiper/components/controller/controller.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/thumbs/thumbs.scss';
import "@styles/sliders.scss";
import "@styles/forms.scss";

//AUGMENTED-UI
import 'augmented-ui/augmented-ui.min.css';

import "@styles/vars.scss";
import "@styles/mixins.scss";
import "@styles/fonts.scss";
import "@styles/style.scss";

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default Application
