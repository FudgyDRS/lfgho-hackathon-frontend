import React from 'react';
import { WagmiConfig, createConfig } from 'wagmi';
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultConfig,
} from 'connectkit';
import Dashboard from './components/Dashboard/Dashboard';

interface AppProps {}

const config = createConfig(
  getDefaultConfig({
    alchemyId: process.env.ALCHEMY_ID,
    walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID!,

    appName: 'FudgyDRS LFGHO',

    appDescription: 'Project for LFGHO hackathon',
    appUrl: 'https://github.com/FudgyDRS/lfgho-hackathon-frontend',
    appIcon: 'https://family.co/logo.png',
  }),
);

const App: React.FC<AppProps> = () => {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider theme="midnight" mode="dark">
        <Dashboard />
        <ConnectKitButton />
      </ConnectKitProvider>
    </WagmiConfig>
  );
};

export default App;
