import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/home'>
                 <Home></Home>
          </Route>
          <Route></Route>
          <Route></Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
