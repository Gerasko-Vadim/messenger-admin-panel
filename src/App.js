
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/home/home';
import AdminPanel from './components/adminPanel/adminPanel';

function App() {
  return (
      <Router>
        <Switch>
          <Route  exact path="/">
            <Home/>
          </Route>
          <Route path="/adminPanel">
            <AdminPanel/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
