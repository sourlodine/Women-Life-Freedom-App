import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@rainbow-me/rainbowkit/styles.css';
import UserContext from './context/userContext';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  zora,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

import Header from './components/header/Header.js';
import Home from './pages/home.js';
import MintPage from './pages/mintPage.js';
import About from './pages/about.js';

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, zora],
  [
    alchemyProvider({ apiKey: '7HgwlZI7BC1Pd4ma5twinVG01_VXBDcc' }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: '4a6bfcb89386e434a61c058b92cfc577',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

function App() {
  // const [currentPage, setCurrentPage] = useState("Home");


  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        {/* <UserContext.Provider value={{ currentPage, setCurrentPage }}> */}

        <div className="App" >
          <Router >
            <Header />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/mint" element={<MintPage />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </Router>
        </div>
        {/* </UserContext.Provider> */}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
