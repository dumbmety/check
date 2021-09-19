import "@fontsource/inter"
import "simplebar/dist/simplebar.min.css"

import type { AppProps } from "next/app"

import GlobalStyles from "../components/styles/GlobalStyles"
import MainLayout from "../components/layout/MainLayout"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />

      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  )
}

export default MyApp
