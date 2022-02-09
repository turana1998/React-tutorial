import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import { useState } from 'react';

function App() {

  const [text, setText] = useState()

  const navigation = useNavigate()

  return (
    <>
      <div className="App">
        <Navbar />
        <div className="p-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-yellow-600 px-3 py-1 font-semibold text-white" onClick={() => {
          navigation(
            {
              pathname: '/',
            },
            {
              state: {
                name: text
              }
            }
          )
        }}>
          Ana Sehfye'a Kecid Et
        </button>
        <input type="text" className="border-2" onChange={(e) => setText(e.target.value)} />
      </div>
    </>
  );


}

export default App;
