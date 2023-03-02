import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from "@next/font/local";
// const roboto = localFont({
//   src: "../../public/Roboto/Roboto-Regular.ttf",
// });

export default function App({ Component, pageProps }: AppProps) {
  return <main><Component {...pageProps} /></main>
}
