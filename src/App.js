import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Web3ReactProvider } from "@web3-react/core";

import { connectors } from "./connectors";

import Header from "./pages/layout/Header";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import MintPage from "./pages/mintPage";
import About from "./pages/about";
import Team from "./pages/team";
import Error from "./pages/error";

import { WalletProvider } from "./contexts/WalletContext";

function Web3Provider({ children }) {
  return (
    <Web3ReactProvider connectors={connectors}>{children}</Web3ReactProvider>
  );
}

function App() {
  return (
    <div className="App">
      <Web3Provider>
        <WalletProvider>
          <Router>
            <Header />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/gallery" element={<Gallery />} />
              <Route exact path="/mint" element={<MintPage />} />
              <Route exact path="/team" element={<Team />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/*" element={<Error />} />
            </Routes>
          </Router>
        </WalletProvider>
      </Web3Provider>
    </div>
  );
}

export default App;
