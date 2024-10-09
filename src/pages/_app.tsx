import { type NextPage } from 'next'
import { type AppProps } from 'next/app'
import Head from 'next/head'
import { type ReactElement, type ReactNode } from 'react'

import { DefaultLayout } from 'src/presentation/components'
import { ThemeProvider } from 'src/main/providers'

type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>)

  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
    </>
  )
}

export default App
