import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { createContext } from 'react'
import ClassComp from './components/ClassComp';

export const Context = createContext()
function App() { // class component

  return (
    <BrowserRouter>
      <Context.Provider value={{ name: "Turana" }}>
        <ClassComp surname="Ismayilova" />
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
