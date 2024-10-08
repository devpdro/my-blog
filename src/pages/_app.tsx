import { type NextPage } from "next";
import { type AppProps } from "next/app";

import { type ReactElement, type ReactNode } from "react";

import { DefaultLayout } from "src/presentation/components";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "src/presentation/styles/global";
import darkTheme from "src/presentation/styles/themes/dark";

type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        {getLayout(<Component {...pageProps} />)}
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default App;
