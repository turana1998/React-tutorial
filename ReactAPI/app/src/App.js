import './App.css';
import Covid from './Components/Covid';
import Image from './Components/Image';
import QRcode from './Components/QRcode';
import Header from './Components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/qrcode">
            <QRcode />
          </Route>
          <Route path="/covid">
            <Covid />
          </Route>
          <Route path="/random">
            <Image />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
