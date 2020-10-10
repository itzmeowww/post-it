// import "../styles/globals.css";
// import "../styles/font.css";

import React from "react";
import { ThemeProvider, ColorModeProvider, CSSReset } from "@chakra-ui/core";

// import customTheme from "../theme/theme";

function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
