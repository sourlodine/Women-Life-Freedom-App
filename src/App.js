import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/header/Header.js';
import Home from './pages/home.js';
import MintPage from './pages/mintPage.js';
import About from './pages/about.js';
import Team from './pages/team.js';
import FAQ from './pages/faq.js';



function App() {
  return (
    <div className="App" >
      <Router >
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/mint" element={<MintPage />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/faq" element={<FAQ />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
