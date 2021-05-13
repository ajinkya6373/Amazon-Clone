
import './App.css';
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"



const promise = loadStripe('pk_test_51Ip9lHSB6geyqnQ7pD8FfDkREPwTH2t7gp0osBqYkC9gMVX9app0SQNlUUzd1It2sbEv5YDAXhAHRjDcgExseQMW00xuqDaDva')

function App() {

  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    //will only run when the app components loads....
    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>", authUser)
      if (authUser) {
        //the user just logged in /or the user was logged in 
        dispatch({
          type: "SET_USER",
          user: authUser

        })
      } else {
        //the user logged out
        dispatch({
          type: "SET_USER",
          user: null

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
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

        </Switch>
      </div>
    </Router>


  );
}


export default App;
