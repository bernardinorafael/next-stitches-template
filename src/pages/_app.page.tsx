import { queryClient } from '@/services/react-query'
import { globalStyles } from '@/styles/globals'
import { QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </main>
  )
}
