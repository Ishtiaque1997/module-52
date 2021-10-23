import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Friends from './Components/Friends/Friends';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
                 <Home></Home>
          </Route>
           <Route path='/home'>
                 <Home></Home>
          </Route>
          <Route path='/friends'>
             <Friends></Friends>
          </Route>
          <Route path='/about'>
               <About></About>
          </Route>
           <Route path='*'>
               <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
