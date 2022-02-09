import './App.css';
import { useState, createContext } from 'react';
import Header from "./Components/Header";
import HomeSlider from "./Components/HomeSlider";
import Movies from './Components/Movies';
import { MoviesProvider } from './Context';
import Footer from './Components/Footer';
import Register from './Components/Registration/Register';
import SinglePost from './Components/SinglePost';
import CreateList from './Components/CreateList';
import Update from './Components/Update';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

export const DarkMode = createContext({})

function App() {
  const [mode, setMode] = useState(false)
  const [color, setColor] = useState("#141414")

  if (mode === false) {
    window.document.body.style.backgroundColor = "#141414"
  } else {
    window.document.body.style.backgroundColor = "#fff"
  }

  return (
    <>
      <Router>
        <MoviesProvider>
          <DarkMode.Provider value={{
            mode,
            color,
            setColor,
            setMode
          }}>
            <div className="App">
              <div className="Home">
                <Header />
                  <Route path="/" exact>
                    <HomeSlider />
                    <Movies />
                  </Route>
                  <Route path="/registration" exact>
                    <Register />
                  </Route>
                  <Route path="/movie-update/:name" exact>
                    <Update />
                  </Route>
                  <Route path="/:name/:id" exact>
                    <SinglePost />
                  </Route>
                  <Route path="/createlist" exact>
                    <CreateList />
                  </Route>
                <Footer />
              </div>
            </div>
          </DarkMode.Provider>
        </MoviesProvider>
      </Router>
    </>
  );
}

export default App;
