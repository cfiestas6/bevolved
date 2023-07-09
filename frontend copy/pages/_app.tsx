import '@/styles/globals.css'
import '@/devlink/global.css'
import type { AppProps } from 'next/app'
import { InteractionsProvider, createIX2Engine } from '@/devlink'
import { WagmiConfig, createConfig, mainnet } from 'wagmi'
import { createPublicClient, http } from 'viem'

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http(),
  }),
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <InteractionsProvider createEngine={createIX2Engine}>
      <WagmiConfig config={config}>
        <Component {...pageProps} />
      </WagmiConfig>
    </InteractionsProvider>
  );
}
