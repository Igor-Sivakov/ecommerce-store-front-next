import type { AppProps } from 'next/app'
import { PersistGate } from 'redux-persist/integration/react'

import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { theme } from '@/app/config/chackra.global.config'

import { persistor, store } from '@/redux/store'

import '../app/assets/styles/globals.scss'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  )
}
