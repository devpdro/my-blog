import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "src/presentation/styles/global";
import darkTheme from "src/presentation/styles/themes/dark";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
