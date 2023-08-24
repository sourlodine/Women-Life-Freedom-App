import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./pages/layout/Header.js";
import Home from "./pages/home.js";
import MintPage from "./pages/mintPage.js";
import About from "./pages/about.js";
import Team from "./pages/team.js";
import Error from "./pages/error.js";

import { WalletProvider } from "./contexts/WalletContext";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
