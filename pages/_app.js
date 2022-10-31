import React from 'react'
import { ThemeProvider } from '@emotion/react'
import Theme from '../configs/Theme'
import { Provider } from "react-redux"
// import store from "../configs/store"
import configureStore from "../configs/store"
import App from "next/app"

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={configureStore}>
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
      </ThemeProvider>

    </Provider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  appContext.ctx.reduxStore = configureStore;
  const appProps = await App.getInitialProps(appContext);

  // console.log('appProps', appProps)
  return { ...appProps }
}

export default MyApp
