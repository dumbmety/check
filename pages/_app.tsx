import "@fontsource/inter"
import "simplebar/dist/simplebar.min.css"

import type { AppProps } from "next/app"

import GlobalStyles from "../components/styles/GlobalStyles"
import DashLayout from "../components/layout/DashLayout"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />

      <DashLayout>
        <Component {...pageProps} />
      </DashLayout>
    </>
  )
}

export default MyApp
