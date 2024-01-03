import { AppProps } from "next/app";
import { globalStyles } from "./styles/global";
import { Container } from "./styles/pages/app";
import { Header } from "./Components/Header";
import { CartContextProvider } from "./Contexts/CartContext";

globalStyles()

export default function App({ Component, pageProps}: AppProps) {

  return (
    <CartContextProvider>
    <Container>
      <Header />
      <Component {...pageProps} />
    </Container>
  </CartContextProvider>
  )
}

