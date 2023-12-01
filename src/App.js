import Navbar from './Navbar';
import Home from './Home'
import Map from './Map'
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './index.css';


function App() {
  return (
    <Router>
    <div id='app'>
      <Switch>
        <Route exact path='/'>
        <Home />
        </Route>
        <Route path='/Map'>
          <Map />
        </Route>
    </Switch>
    </div>
    </Router>
  )
  }

export default App;

