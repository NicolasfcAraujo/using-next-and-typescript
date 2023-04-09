import MainComponent from '@/components/MainComponent/MainComponent'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "../../fontawesome-free-6.3.0-web/fontawesome-free-6.3.0-web/css/all.min.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainComponent>
      <Component {...pageProps} />
    </MainComponent>
  )
}
