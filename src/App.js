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
import Header from './Components/Hedaer/Header';
import FriendDetail from './Components/FriendDetail/FriendDetail';
import Culture from './Components/Culture/Culture';
import PostDetails from './Components/PostDetails/PostDetails';
function App() {
  return (
    <div className="App">
      
      <Router>
       <Header></Header>  
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
          <Route exact path='/about'>
               <About></About>
          </Route>
          <Route exact path="/about/culture">
              <Culture></Culture>
          </Route>
          <Route path="/post/:id">
            <PostDetails></PostDetails>
          </Route>
          <Route path="/friend/:friendId">
           <FriendDetail></FriendDetail>
          </Route>
           <Route path='*'>
               <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      {/* <Friends></Friends> */}
     
    </div>
  );
}

export default App;
