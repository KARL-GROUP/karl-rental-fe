import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from "@next/font/local";
const roboto = localFont({
  src: "../../public/Roboto/Roboto-regular.ttf",
});

export default function App({ Component, pageProps }: AppProps) {
  return <main className={roboto.className}><Component {...pageProps} /></main>
}
