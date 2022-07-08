import '../styles/globals.css'
import React from 'react'
import Navbar from '../components/navbar'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Navbar />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
