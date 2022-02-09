import './App.css';
import Game from './components/tictactoe/game';
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Navbar from './components/Navbar';
import Settings from './components/pages/Settings';
import Profile from './components/pages/settings/Profile';
import Account from './components/pages/settings/Account';
import Privacy from './components/pages/settings/Privacy';

function App() { // Outline - Nested Router, useParams, useContext

  return (
    <div>
      {/* <Game /> */}
      <Navbar />
      <div className="px-10 py-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:surname/:name" element={<Blog />} />
          <Route path="/settings" element={<Settings />} >
            <Route path="" element={<Profile />} />
            <Route path="account" element={<Account />} />
            <Route path="privacy" element={<Privacy />} />
          </Route>
        </Routes>
      </div>

    </div>
  );
}

export default App;
