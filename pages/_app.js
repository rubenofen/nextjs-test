import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
function MyApp({ Component, pageProps }) {
  const theme = {
    colors: {
      primary: "orange",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
