import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import localFont from "@next/font/local";
import { Provider } from 'react-redux';
import { store } from '../redux/store'
// const roboto = localFont({
//   src: "../../public/Roboto/Roboto-Regular.ttf",
// });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Provider store={store}>
        <ToastContainer />
        <Component {...pageProps} />
      </Provider>

    </main>
  )
}
