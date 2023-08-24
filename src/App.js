import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Web3ReactProvider } from "@web3-react/core";

import { connectors } from "./connectors";

import Header from "./pages/layout/Header.js";
import Home from "./pages/home.js";
import MintPage from "./pages/mintPage.js";
import About from "./pages/about.js";
import Team from "./pages/team.js";
import Error from "./pages/error.js";

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
