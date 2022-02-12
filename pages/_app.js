import  Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return  <>
  <Head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
           />
        <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/fontawesome.min.css"
            />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/regular.min.css"
          />
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js" ></script> */}
  </Head>
   <Component {...pageProps} />
  </>
   
  
  
}

export default MyApp
