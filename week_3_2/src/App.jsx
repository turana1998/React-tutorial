import { createContext, useState } from 'react';
import './App.css';
import Child1 from './components/Child1';
import Main from './components/Main';
import Navbar from './components/Navbar';

export const SampleContext = createContext();
export const Sample2Context = createContext();

function App() { // Context API, localStorage, cookie
  const [count, setCount] = useState(0);
  const [store, setStore] = useState({
    name: "Turane",
    surname: "Ismayilova",
    age: 0
  });

  console.log(document.cookie);

  return (
    <>
      <Navbar />
      <Main />
      <SampleContext.Provider value={[store, setStore]}>
        <Sample2Context.Provider value={["Salam"]}>
          <div>
            <div className="border-2 border-black p-10">
              <Child1 />
            </div>

            <div className="p-10">
              <button onClick={() => {
                setCount(prev => prev + 1)
              }} className="px-3 py-2 bg-red-400 text-white">
                Increase Count
              </button>
            </div>
          </div>
        </Sample2Context.Provider>
      </SampleContext.Provider>
    </>
  );
}

export default App;
