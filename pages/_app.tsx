import "@fontsource/manrope"

import type { AppProps } from "next/app"
import GlobalStyles from "../components/styles/GlobalStyles"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
