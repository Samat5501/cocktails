
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Phone from './components/Phone'
import SinglePhone from './components/pages/SinglePhoneList'
import Error from './components/pages/Error'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path='/phone/:id'>
          <SinglePhone />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
