
import './App.css';
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';


function App() {
  const [{},dispatch] = useStateValue();
  useEffect(() => {
    //will only run when the app components loads....
       auth.onAuthStateChanged(authUser =>{
         console.log("THE USER IS >>",authUser)
         if(authUser){
           //the user just logged in /or the user was logged in 
           dispatch({
             type:"SET_USER",
             user:authUser

           })
         }else{
           //the user logged out
           dispatch({
            type:"SET_USER",
            user:null

          })
         }
       })
  }, [])
  return (
    <Router>
      <div className="app">
     
        <Switch>
          <Route exact path="/">
            <Header />
            <Home/>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout/>
          </Route>
          <Route path="/login">
           <Login/>
          </Route>
        </Switch>
      </div>
    </Router>


  );
}

export default App;
