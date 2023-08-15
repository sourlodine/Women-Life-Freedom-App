import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/header/Header.js';
import Home from './pages/home.js';
import MintPage from './pages/mintPage.js';
import About from './pages/about.js';

function App() {
  return (
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
  );
}

export default App;
